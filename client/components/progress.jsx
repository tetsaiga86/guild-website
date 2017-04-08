import React from 'react'
import Collapsible from './collapsible'
import ButtonGroup from './buttonGrp'
import Raid from './raid'
50
const guildAchievementsUrl = 'https://us.api.battle.net/wow/guild/kiljaeden/F%20O%20O%20L%20S%20A%20V%20A%20G%20E?fields=achievements%2Cchallenge&locale=en_US&apikey=8swrjb9wywnx7ycxqpgz39uweq9pbnps';

const achievementsUrl = 'https://us.api.battle.net/wow/data/guild/achievements?locale=en_US&apikey=8swrjb9wywnx7ycxqpgz39uweq9pbnps';

var achievements;


class Progress extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      raids: []
    };
  }

  componentWillMount() {
      this.fetchListData();
  }

  fetchListData () {
    $.getJSON(achievementsUrl, (data) => {
      const raids = data.achievements[3].categories[11].achievements.slice(0,3);
      this.setState({ raids: raids });

      $.getJSON(guildAchievementsUrl, (guildData) => {
        const newRaids = this.state.raids;

        const guildAchievementIds = guildData.achievements.achievementsCompleted;
        const guildAchivementTimestamps = guildData.achievements.achievementsCompletedTimestamp;
        var guildAchievements = [];
        for (var i=0; i<guildAchievementIds.length; i++){
          guildAchievements[i]={ id: guildAchievementIds[i], timestamp: guildAchivementTimestamps[i]};
        }

        guildAchievements.forEach(guildAchivement => {
          if (isArelevantAchievement(guildAchievement) && achievementComplete(guildAchievement)) {
            const raidEntry = newRaids[......];
            raidEntry.killedDate = guildAchievement['killed_at'];
          }
        });

        // const boss = newRaids[0][boss_id];
        // boss.killed = true;
        // boss.killedDate = '';
        // TODO : magic to change newRaids to include kill data on bosses
        this.setState({ raids: newRaids });
      });
    });
  }

  renderRaid(raid) {
    return <Raid raid={raid} />;
  }

  renderRaids() {
    return this.state.raids.map(this.renderRaid);
  }

  render () {
    // const renderedRaids = [];

    // this.state.achievements.forEach((raid) => {
      // const defaultOpen = renderedRaids.length === 0;
      // renderedRaids.push(<Collapsible title={raid.title} body={raid.body} key={raid.title} defaultOpen={defaultOpen}/>);
    // });



    return (
      <div>
        <h2>Progression</h2>
        <ButtonGroup />
        {this.renderRaids()}
      </div>
    );
  }
}

export default Progress
