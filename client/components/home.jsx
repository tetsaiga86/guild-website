import React from 'react'
import Announcements from './announcements'
import Contact from './contact'

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>HOME</h1>
        <Announcements maxShown={2} />
        <Contact />
      </div>
    )
  }
}

export default Home
