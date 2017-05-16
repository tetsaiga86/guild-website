import React from 'react'
import Header from './header'
import Achievement from './achievement'
import NewsPiece from './newsPiece'
import {
  Table
} from 'react-bootstrap'
import $ from 'jquery';

const guildAchievNewsUrl = '/api/achievements';
class Achievements extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      achievements: [],
      news: []
    }
  }

  componentWillMount(){
    this.fetchGuildAchievNews()
  }

  renderAchievement(achievement){
    return <Achievement achievement={achievement} />
  }

  renderAchievements(){
    return this.state.achievements.map(this.renderAchievement);
  }

  renderNewsPiece(newsPiece){
    return <NewsPiece piece={newsPiece} />
  }

  renderNews(){
    return this.state.news.map(this.renderNewsPiece);
  }

  fetchGuildAchievNews(){
    $.getJSON(guildAchievNewsUrl, (guildAchievNews) => {
      this.setState({
        achievements : guildAchievNews.achievements,
        news : guildAchievNews.news
      })
    })
  }

  render () {
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
            <tbody>
              {this.renderAchievements()}
            </tbody>
          </Table>
          <Table striped bordered condensed hover className="news-table">
            <thead>
              <tr>
                <th className="achievement-table-head">Guild News</th>
              </tr>
            </thead>
            <tbody>
              {this.renderNews()}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

export default Achievements
