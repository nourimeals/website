import React, { useState } from 'react';
import {PopUp} from './PopUp.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

/*    STYLING    */
import './header.scss';
import logo from '../../../images/nouri-logo.png';

export const Header = () => {
  
  const [navClass, toggleNav] = useState("hide");
  const [POPUPDISPLAY, popUp] = useState('popupdisplayHIDE'); 
  const [submitEmail, name, email] = useState('name', 'email');  
  const toggleResponsiveNav = () => {
    if (navClass === "mobile") {
      toggleNav("hide");
    } else {
      toggleNav("mobile");
    }
  }  
  /* fn handleSubmitEmail is not used, could be used later
  /* const handleSubmitEmail = (e)=>{
     //this fn is never run and can be used in the future 
     submitEmail(e.target.name.value, e.target.email.value) 
     console(e, name, email )

   } */
  const handlePopUp =(e)=>{ 
    //toggle effect for the popUp component to get emails from nouri 
    e.preventDefault();  
    if (POPUPDISPLAY === "popupdisplaySHOW"){
      popUp("popupdisplayHIDE") 
    } else {
      popUp("popupdisplaySHOW")
    }
    
  }

  return (
    <header>
      <div className="header-parent">
        <a href="#welcome"><img src={logo} alt="Nouri Logo" id="logo" /></a>
        <ul className={navClass}>
          <li><a href="#about">About us</a></li>
          <li><a href="#volunteer">Volunteer</a></li>
          <li><a href="https://forms.gle/pK6fb7YfQMWqNnRC7" target="_blank">Need Help?</a></li>
          <li><a href="https://github.com/nourimeals/documents/tree/master/Webinars" target="_blank">Resources</a></li>
          <button onClick={(e)=> handlePopUp(e)} className="btn-container">Connect With Email</button>
          { /* passing the variable POPUPDISPLAY and the setState function popUP via props */}
          <PopUp popupdisplay={POPUPDISPLAY} popupFn={popUp} submitEmail={handleSubmitEmail}/>
          <a href="https://donorbox.org/nouri" target="_blank"><button className="btn-container">donate</button></a>
        </ul>

        <FontAwesomeIcon icon={navClass === "hide" ? faBars : faTimes} size="2x" className="hamburger-icon" onClick={(toggleResponsiveNav)} />



      </div>
    </header>
  );
}

