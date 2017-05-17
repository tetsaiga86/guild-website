import React from 'react'
import NewsPiece from './newsPiece'

class GuildNews extends React.Component {
  renderNewsPiece(newsPiece){
    return <NewsPiece piece={newsPiece} />
  }

  renderNews(){
    return this.props.news.map(this.renderNewsPiece);
  }

  render () {
    return (
      <tbody>
        {this.renderNews()}
      </tbody>
    )
  }
}

export default GuildNews
