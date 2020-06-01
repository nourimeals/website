import React from 'react';

/*    STYLING    */
import './header.scss';
import logo from '../../../images/nouri-logo.png';

export const Header = () => {
  return (
    <header>
      <div className="header-parent">
        <a href="#welcome"><img src={logo} alt="Nouri Logo" id="logo" /></a>
        <div className="header-right">
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#volunteer">Volunteer</a></li>
            <li><a href="https://docs.google.com/forms/d/18KYoG2Qu9xwRAca-6zuM2wp3i3aa3B3fa4ysegm9g34/viewform?edit_requested=true" target="_blank">Need Help?</a></li>
          </ul>
          <a href="https://donorbox.org/nouri" target="_blank"><button className="btn-container">donate</button></a>
        </div>
      </div>
    </header>
  );
}

