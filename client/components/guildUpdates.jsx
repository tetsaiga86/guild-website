import React from 'react'
import Header from './header'
import Achievements from './achievements'
import GuildNews from './guildNews'
import $ from 'jquery';

const guildAchievNewsUrl = '/api/achievements';
class GuildUpdates extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      achievements: [],
      news: [],
      loaded: false
    }
  }

  componentDidMount(){
    this.fetchGuildAchievNews()
  }

  fetchGuildAchievNews(){
    $.getJSON(guildAchievNewsUrl, (guildAchievNews) => {
      this.setState({
        achievements : guildAchievNews.achievements,
        news : guildAchievNews.news,
        loaded: true
      })
    })
  }

  render () {
    if (!this.state.loaded) {
      return (
        <div>
          <Header />
          <h1>Loading...</h1>
        </div>
      )
    }else{
      return (
        <div>
          <Header />
          <div className="achievement-news-table">
            <Achievements achievements={this.state.achievements} />
            <GuildNews news={this.state.news} />
          </div>
        </div>
      )
    }
  }
}

export default GuildUpdates
