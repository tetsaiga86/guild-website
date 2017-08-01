module DataManipulation
  class LatestLogs
    def massage_logs(logs_client)
      guild_log_ids = logs_client.guild_log_ids(ENV['GUILD_NAME'])
      guild_leader_personal_log_ids = logs_client.guild_leader_personal_logs()
      all_log_ids = guild_log_ids.push(*guild_leader_personal_log_ids)
      all_log_ids.sort! do |a,b|
        a['start'] <=> b['start']
      end

      massaged_log_ids = all_log_ids.select do |log|
        log['date']=Time.at(log['start']/1000).strftime('%a, %d %b %Y')
        log['time']=Time.at(log['start']/1000).strftime('%H:%M')
        log['raid_day']=log['date'].include?('Tue') || log['date'].include?('Wed') || log['date'].include?('Thu')
      end

      filtered_log_ids = massaged_log_ids.select do |log|
        log['owner']==ENV['GUILD_LEADER'] || log['raid_day']
      end

      logged_dates = []
      filtered_log_ids.each do |logCandidate|
          logged_date = logged_dates.find do |dateObject|
            dateObject[:date] == logCandidate['date']
          end

          if !logged_date
            logged_date = { date: logCandidate['date'], entries: [] }
            logged_dates.push(logged_date)
          end

          logged_date[:entries].push logCandidate
      end

      log_ids_to_be_rendered = []

      logged_dates.each do |logged_date|
        logged_date[:entries].sort! do |a,b|
          b['end']-b['start'] <=> a['end']-a['start']
        end
        log_ids_to_be_rendered.push(logged_date[:entries][0])
      end

      logs_arr=[]
      log_ids = log_ids_to_be_rendered.last(ENV['LOG_COUNT'].to_i).map{|litbr| litbr['id']}
      raid_logs = RaidLog.where(w_log_id: log_ids).to_a

      log_ids_to_be_rendered.last(ENV['LOG_COUNT'].to_i).each do |log_id|
        raid_log = raid_logs.select { |rl| rl.w_log_id == log_id['id'].to_s }.first

        # raid_log = RaidLog.find_by(w_log_id: log_id['id'])
        if !raid_log
          raid_log_body = logs_client.guild_log(log_id['id'])
          raid_log = RaidLog.find_or_create_by(w_log_id: log_id['id'])
          raid_log.update(body: raid_log_body.to_json)
        end
        logs_arr.push(JSON.parse(raid_log.body))
      end
      return logs_arr
    end
  end
end
