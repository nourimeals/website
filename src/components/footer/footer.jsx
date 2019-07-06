import React from 'react';

import './footer.scss';

import logo from '../../images/nouri-logo.png'

// getting Font Awesome import to component

class Footer extends React.Component {

  render() {
    return <footer>
      <img className="footer-logo" src={logo} />
    </footer>
  }
}

export default Footer;