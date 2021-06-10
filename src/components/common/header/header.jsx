import React, { useState } from 'react'
import { PopUp } from './PopUp.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

/*    STYLING    */
import './header.scss'
import logo from '../../../images/nouri-logo.png'

export const Header = () => {
  const [navClass, toggleNav] = useState('hide')
  const [POPUPDISPLAY, popUp] = useState('hide')
  // const [submitEmail, name, email] = useState('name', 'email');
  const toggleResponsiveNav = () => {
    if (navClass === 'mobile') {
      toggleNav('hide')
    } else {
      toggleNav('mobile')
    }
  }
  const mobileMenuClose = (e) => {
    if (e.target.tagName === 'A' && navClass === 'mobile') {
      toggleNav('hide')
    }
  }
  const handlePopUp = (e) => {
    // toggle effect for the popUp component to get emails from nouri
    e.preventDefault()
    if (POPUPDISPLAY === 'hide') { popUp('overlay') } else { popUp('hide') }
  }

  return (
    <>
      <header>
        <div className='header-parent'>
          <a href='#welcome'><img src={logo} alt='Nouri Logo' id='logo' /></a>
          <ul className={navClass} onClick={(e) => mobileMenuClose(e)}>
            <li><a href='#about'>About us</a></li>
            <li><a href='#volunteer'>Volunteer</a></li>
            <li><a href='https://forms.gle/pK6fb7YfQMWqNnRC7' target='_blank' rel='noopener noreferrer'>Need Help?</a></li>
            <li><a href='https://github.com/nourimeals/documents/tree/master/Webinars' target='_blank' rel='noopener noreferrer'>Resources</a></li>
            {/* adds div to only smaller || "mobile" devices that allows users to access MailerLite form */}
            <li><div className={navClass}><a onClick={(e) => handlePopUp(e)}>Connect With Email</a></div>
              <button onClick={(e) => handlePopUp(e)} className='btn-container-email'>Connect With Email</button>
            </li>
            {/* passing the variable POPUPDISPLAY and the setState function popUP via props */}
            <li>
              <a href='https://donorbox.org/nouri' target='_blank' rel='noopener noreferrer'><button className='btn-container'>Donate</button></a>
            </li>
          </ul>

          <FontAwesomeIcon icon={navClass === 'hide' ? faBars : faTimes} size='2x' className='hamburger-icon' onClick={(toggleResponsiveNav)} />

        </div>

      </header>
      <PopUp popupdisplay={POPUPDISPLAY} popupFn={popUp} />
    </>
  )
}
