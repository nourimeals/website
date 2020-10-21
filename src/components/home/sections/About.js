import React from 'react'
import './about.scss'
import groceries from '../../../images/aboutImg.png'

const HEADER_TEXT = 'A different model without the need for storage or many volunteers. Where the priority is fresh, nutritious food without sacrificing safety.'
const CONTENT1 = `Even before we all started staying at home during the COVID pandemic, we saw a need to help families struggling to put food on the table without 
requiring them to figure out transportation, time out of their busy schedules, and sacrifice nutrition for shelf life.`
const CONTENT2 = 'After the pandemic began, our service become especially important to low-income families who also have health issues that put them in the high-risk category if exposed to the virus.'
const CONTENT3 = 'We started doing small beta test runs in Redmond, WA at the end of last year (2019) and started ongoing beta testing in February. We began to deliver fresh, perishable groceries to families in need.'

export const About = () => {
  return (
    <section id='about'>
      <h2>{HEADER_TEXT}</h2>
      <div className='about-content-container'>
        <img id='about-groceries' src={groceries} />
        <div className='about-content-col'>
          <p>{CONTENT1}</p>
          <p>{CONTENT2}</p>
          <p>{CONTENT3}</p>
        </div>
      </div>
      <a>
        <button>Help Us Feed More Families</button>
      </a>
    </section>
  )
}
