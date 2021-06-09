import React from 'react'
import './footer.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedinIn, faTwitter, faMediumM } from '@fortawesome/free-brands-svg-icons'

const CONTENT =
  <div className='missionStatement'>
    Nouri is a Section 501(c) (3) charitable organization, EIN 83-4209975. All donations are
    deemed tax-deductible absent any limitations on deductibility applicable to a particular
    taxpayer. No goods or services were provided in exchange for your contribution.<br />
  </div>
const ADDRESS = <div className='missionStatement'>Nouri's Address:<br />522 W. Riverside Ave. Suite N <br /> Spokane, WA</div>

export const Footer = () => {
  return (
    <span>
      <div className='links-container'>
        <a href='https://www.facebook.com/teamnouri/' className='facebook' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon
            icon={faFacebookSquare}
            size='2x'
          />
        </a>
        <a href='https://linkedin.com/company/teamnouri' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size='2x'
          />
        </a>
        <a href='https://twitter.com/TeamNouri' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon
            icon={faTwitter}
            size='2x'
          />
        </a>
        <a href='https://medium.com/@teamnouri' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon
            icon={faMediumM}
            size='2x'
          />
        </a>

      </div>
      <footer>
        {CONTENT}
        <br />
        {ADDRESS}
      </footer>
    </span>

  )
}
