import React from 'react'
import './welcome.scss'
import landingImage from '../../../images/landing-image.png'
import groceries from '../../../images/aboutImg.png'

const HEADER_TXT = 'Providing fresh food to families in need.'
const SUB_HEADER_TXT = 'Help us childhood hunger in our communities.'

export const Welcome = () => {
  return (
    <section id='welcome'>
      <div className='welcome-text-container'>
        <h1 className='welcome-title'>{HEADER_TXT}</h1>
        <h2 className='welcome-sub-title'>{SUB_HEADER_TXT}</h2>
        <a href='https://donorbox.org/nouri' target='_blank' rel='noopener noreferrer'><button>donate now</button></a>
      </div>
      <div className='family-container'>
        <img id='family' src={landingImage} alt='family-image' />
      </div>
      <img id='grocery' src={groceries} />
    </section>
  )
}
