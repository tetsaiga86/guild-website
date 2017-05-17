import React from 'react'
import Header from './header'
import Achievement from './achievement'
import Achievements from './achievements'
import NewsPiece from './newsPiece'
import GuildNews from './guildNews'
import {
  Table
} from 'react-bootstrap'
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

  componentWillMount(){
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
            <Table striped bordered condensed hover className="achievement-table">
              <thead>
                <tr>
                  <th className="achievement-table-head">
                    Achievement Name
                  </th>
                  <th className="achievement-table-head">
                    Date Completed
                  </th>
                </tr>
              </thead>
              <Achievements achievements={this.state.achievements} />
            </Table>
            <Table striped bordered condensed hover className="news-table">
              <thead>
                <tr>
                  <th className="achievement-table-head">Guild News</th>
                </tr>
              </thead>
              <GuildNews news={this.state.news} />
            </Table>
          </div>
        </div>
      )
    }
  }
}

export default GuildUpdates
