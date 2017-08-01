import React from 'react'
import NewsPiece from './newsPiece'
import {
  Table
} from 'react-bootstrap'

class GuildNews extends React.Component {
  renderNewsPiece(newsPiece){
    return <NewsPiece piece={newsPiece} key={`news_piece_${this.newsCount++}`}/>
  }

  renderNews(){
    this.newsCount = 0;
    return this.props.news.map(this.renderNewsPiece, this);
  }

  render () {
    return (
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
    )
  }
}

export default GuildNews
