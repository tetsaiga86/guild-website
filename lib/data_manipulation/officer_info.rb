module DataManipulation
  class OfficerInfo
    def legion_raid_officer_info(officers)
      legion_raid_officer_details = []
      officers.each do |officer|
        start = officer['progression']['raids'].length-ENV['NUMBER_OF_RAIDS'].to_i
        finish = officer['progression']['raids'].length
        for i in start...finish
          legion_raid_officer_details.push(officer['progression']['raids'][i])
        end
      end
      return legion_raid_officer_details
    end

    def merge_legion_raid_officer_info(officers_raid_prog_arr)
      merged_legion_raid_officer_info = []
      for i in 0...ENV['NUMBER_OF_RAIDS'].to_i
        merged_legion_raid_officer_info.push(officers_raid_prog_arr[i])
      end
      officers_raid_prog_arr.each do |raid|
        for i in 0...merged_legion_raid_officer_info.length
          if merged_legion_raid_officer_info[i]['name']==raid['name']
            for j in 0...merged_legion_raid_officer_info[i]['bosses'].length
              jth_item = merged_legion_raid_officer_info[i]['bosses'][j]

              #add all kills together
              difficulties= %w[lfrKills normalKills heroicKills mythicKills]
              difficulties.each do |difficulty|
                jth_item[difficulty] += raid['bosses'][j][difficulty]
              end

              #get latest timestamp
              timestampDifficulties= %w[lfrTimestamp normalTimestamp heroicTimestamp mythicTimestamp]
              timestampDifficulties.each do |timestampDifficulty|
                jth_item[timestampDifficulty] = [raid['bosses'][j][timestampDifficulty], jth_item[timestampDifficulty]].max
              end
            end
          end
        end
      end
      return merged_legion_raid_officer_info
    end
  end
end
