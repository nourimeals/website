import React, { Component } from 'react'
import johnson from '../../../images/johnson.jpg'
import kim from '../../../images/kim.jpg'
import timKim from '../../../images/tim-kim.jpg'
import green from '../../../images/green.jpg'
import roger from '../../../images/roger.jpg'
import './board-members.scss'
const MemberData = [{ name: 'Amber Kim', position: 'Chair', pic: kim }, { name: 'Cody Green', position: 'Vice Chair', pic: green },
  { name: 'Ryan Johnson', position: 'Member of the Board', pic: johnson }]
const Leadership = [{ name: 'Timothy Kim', position: 'Chief of Operations', pic: timKim }, { name: 'Roger Keith', position: 'Lead Software Developer', pic: roger }]
class MemberCard extends Component {
  constructor (props) {
    super(props)
    this.makeBoardMembers = this.makeBoardMembers.bind(this)
  }

  makeBoardMembers (personsData) {
    return personsData.map(obj => {
      return (
        <div key={obj.position} className='overlay'>
          <img src={obj.pic} alt='board-img' />
          <div className='text-div' key={obj.position}>
            <p>{obj.name}</p>
            <p>{obj.position}</p>
          </div>
        </div>)
    })
  }

  render () {
    return (
      <span className='board-members'>
        <div key='board_wrapper'>
          <h1 key='members'> Board Members </h1>
          {this.makeBoardMembers(MemberData)}
        </div>
        <div key='learder_wrapper'>
          <h1 key='learders'>Leadership Team</h1>
          {this.makeBoardMembers(Leadership)}
        </div>
      </span>)
  }
}

export default MemberCard
