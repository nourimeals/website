import React, { Component } from 'react'

/*  IMAGES   */
import MemberCard from './MemberCard.jsx'

class BoardMembers extends Component {
  render () {
    return (
      [
        <MemberCard key='parent' />
      ]
    )
  }
}

export default BoardMembers
