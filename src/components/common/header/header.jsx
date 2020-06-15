import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

/*    STYLING    */
import './header.scss';
import logo from '../../../images/nouri-logo.png';

export const Header = () => {

  const [navClass, toggleNav] = useState("hide");

  const toggleResponsiveNav = () => {
    if (navClass === "mobile") {
      toggleNav("hide");
    } else {
      toggleNav("mobile");
    }
  }

  return (
    <header>
      <div className="header-parent">
        <a href="#welcome"><img src={logo} alt="Nouri Logo" id="logo" /></a>


        <ul className={navClass}>
          <li><a href="#about">About us</a></li>
          <li><a href="#volunteer">Volunteer</a></li>
          <li><a href="https://docs.google.com/forms/d/18KYoG2Qu9xwRAca-6zuM2wp3i3aa3B3fa4ysegm9g34/viewform?edit_requested=true" target="_blank">Need Help?</a></li>
          <a href="https://donorbox.org/nouri" target="_blank"><button className="btn-container">donate</button></a>
        </ul>

        <FontAwesomeIcon icon={navClass === "hide" ? faBars : faTimes} size="2x" className="hamburger-icon" onClick={(toggleResponsiveNav)} />



      </div>
    </header>
  );
}

