import React from 'react';

import './footer.scss';

import logo from '../../images/nouri-logo.png';

// getting Font Awesome import to component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faMedium, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const facebookSocial = <FontAwesomeIcon icon={ faFacebook } />
const linkedinSocial = <FontAwesomeIcon icon={ faLinkedin } />
const mediumSocial = <FontAwesomeIcon icon={ faMedium } />
const instagramSocial = <FontAwesomeIcon icon={ faInstagram } />

class Footer extends React.Component {
  render() {
    return (
      <footer>
      <img className="footer-logo" src={logo} />

      <div className="social-media">
        <p>Follow us on Social Media</p>
    
          <div className="social-icons">
            <a href="https://linkedin.com/company/teamnouri">{linkedinSocial}</a>
            <a href="https://medium.com/@teamnouri">{mediumSocial}</a>
            <a href="https://linkedin.com/company/teamnouri">{facebookSocial}</a>
            <a href="https://www.facebook.com/teamnouri/">{instagramSocial}</a>
          </div>

      </div>
    </footer>
    )};
}

export default Footer;