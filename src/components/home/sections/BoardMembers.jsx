import React from 'react'
import './volunteer.scss'
import './boardmembers.scss'
import johnson from '../../../images/johnson.jpg'
import kim from '../../../images/kim.jpg'
import timKim from '../../../images/tim-kim.jpg'
import green from '../../../images/green.jpg'
import roger from '../../../images/roger.jpg'
export const BoardMembers = () => {
  return (
    <div className='main'>
      <div className='volunteer-content'>

        <h1 className='volunteer-title'>Board Members</h1>
        <div className='board'>
          <div>
            <img src={kim} alt='board-img' />
            <div className='text-div'>
              <p>Amber Kim</p>
              <p>Chair</p>
            </div>
          </div>

          <div>
            <img src={green} alt='board-img' />
            <div className='text-div'>
              <p>Cody Green</p>
              <p>Vice Chair</p>
            </div>
          </div>
          <div>
            <img src={johnson} alt='board-img' />
            <div className='text-div'>
              <p>Ryan Johnson</p>
              <p>Member of the Board</p>
            </div>
          </div>

        </div>
        <div id='team'>
          <h1 className='volunteer-title'>Leadership Team</h1>
          <div className='board'>
            <div>
              <img src={timKim} alt='board-img' />
              <div className='text-div'>
                <p>Timothy Kim</p>
                <p>Chief of Operations</p>
              </div>
            </div>

            <div>
              <img src={roger} alt='board-img' />
              <div className='text-div'>
                <p>Roger Keith</p>
                <p>Lead Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
