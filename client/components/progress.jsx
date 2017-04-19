import React from 'react'
import Collapsible from './collapsible'
import ButtonGroup from './buttonGrp'
import Raid from './raid'

const guildAchievementsUrl = `https://us.api.battle.net/wow/guild/kiljaeden/F%20O%20O%20L%20S%20A%20V%20A%20G%20E?fields=achievements%2Cchallenge&locale=en_US&apikey=${ENV.api_key}`;

const allGuildAchievementsUrl = `https://us.api.battle.net/wow/data/guild/achievements?locale=en_US&apikey=${ENV.api_key}`;

const guildLeaderAchievementsUrl = `https://us.api.battle.net/wow/character/kiljaeden/Srprise?fields=achievements&locale=en_US&apikey=${ENV.api_key}`

const allCharacterAchievementsUrl = `https://us.api.battle.net/wow/data/character/achievements?locale=en_US&apikey=${ENV.api_key}`

const areas = ['Emerald Nightmare', 'Trial of Valor', 'Nighthold'];
const difficulty = 'Mythic';
const action = 'Defeat';

var achievements;
var mythicBossAchievementIds = [];
var heroicBossCriteriaIds = [];
var mythicBossKills = [];

class Progress extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      raids: []
    };
    this.onToggle = this.onToggle.bind(this);
  }

  componentWillMount() {
      this.fetchListData();
  }

  fetchListData () {
    $.getJSON(allGuildAchievementsUrl, (allGuildAchievements) => {
      const raids = allGuildAchievements.achievements[3].categories[11].achievements.slice(0,3);
      for(var i=0; i<raids.length; i++){
        for(var j=0; j<raids[i].criteria.length; j++){
          heroicBossCriteriaIds.push(raids[i].criteria[j].id);
        }

        raids[i].in = i == raids.length - 1;
      }

      this.setState({ raids });

      $.getJSON(guildLeaderAchievementsUrl, (characterData) => {
        const guildLeaderAchievements = characterData.achievements.achievementsCompleted;
        const guildLeaderAchievementsTimestamp = characterData.achievements.achievementsCompletedTimestamp;

        $.getJSON(allCharacterAchievementsUrl, (allCharacterAchievements) => {
          const mythicCandidates = allCharacterAchievements.achievements[4].categories[11].achievements;

          mythicCandidates.forEach(candidate => {
            if (candidate.description.startsWith(action)) {
              areas.forEach(location => {
                if (candidate.description.includes(`${location} on ${difficulty} difficulty.`)) {
                  mythicBossAchievementIds.push({name: candidate.title.slice(8,candidate.title.length), id: candidate.id, location: location});
                }
              });

            }
          });

          for(var i=0; i<mythicBossAchievementIds.length; i++){
            if(guildLeaderAchievements.includes(mythicBossAchievementIds[i].id)){
              var index = guildLeaderAchievements.indexOf(mythicBossAchievementIds[i].id);
              mythicBossKills.push({id: guildLeaderAchievements[index], timestamp: guildLeaderAchievementsTimestamp[index], name: mythicBossAchievementIds[i].name, location: mythicBossAchievementIds[i].location});
            }
          }

          //console.log('mythicBossKills', mythicBossKills);
          const raidCharacterAchievements = allCharacterAchievements.achievements;

          $.getJSON(guildAchievementsUrl, (guildData) => {
            const newRaids = this.state.raids;

            const guildAchievementIds = guildData.achievements.criteria;
            const guildAchivementTimestamps = guildData.achievements.criteriaTimestamp;
            var guildAchievements = [];
            for (var i=0; i<guildAchievementIds.length; i++){
              guildAchievements[i]={ id: guildAchievementIds[i], timestamp: guildAchivementTimestamps[i]};
            }
            //console.log(heroicBossCriteriaIds);
            var raidEntry;
            guildAchievements.forEach(guildAchievement => {
              if (this.isAHeroicKill(guildAchievement.id)) {
                raidEntry = newRaids;
                for (var i = 0; i < raidEntry.length; i++) {
                  for (var j = 0; j < raidEntry[i].criteria.length; j++) {
                    if(raidEntry[i].criteria[j].id==guildAchievement.id){
                      raidEntry[i].criteria[j].killedDate = this.timeConverter(guildAchievement.timestamp);
                    }
                  }

                }
              }
            });
            mythicBossKills.forEach(mythicBossKill => {
              for (var i = 0; i < raidEntry.length; i++) {
                for (var j = 0; j < raidEntry[i].criteria.length; j++) {
                  if(raidEntry[i].criteria[j].description.includes(mythicBossKill.name)){
                    raidEntry[i].criteria[j].mKilledDate = this.timeConverter(mythicBossKill.timestamp);
                  }
                }
              }
            });
            //console.log('raid entry', raidEntry);
            this.setState({ raids: raidEntry });
          });
        });
      });
    });
  }

  isAHeroicKill(achievementId){
    return heroicBossCriteriaIds.includes(achievementId);
  }

  timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year;
    return time;
  }

  achievementComplete(){
    return true;
  }

  onToggle (toggleRaid) {
    const newState = !toggleRaid.in;
    this.setState({
      raids: this.state.raids.map((raid) => {
        raid.in = raid == toggleRaid ? newState : false;
        return raid;
      })
    });
  }

  renderRaid(raid) {
    return <Raid raid={raid} key={raid.title} onToggle={() => this.onToggle(raid)}/>;
  }

  renderRaids() {
    return this.state.raids.map((raid) => this.renderRaid(raid));
  }

  render() {
    return (
      <div>
        <h2>Progression</h2>
        {this.renderRaids()}
      </div>
    );
  }
}

export default Progress
