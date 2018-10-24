import React from 'react';

import './header.scss';

import logo from '../../images/nouri-logo.png'

class Header extends React.Component {

  render() {
    return <header>
        <nav className="header-nav">
          <img src={logo} alt="Nouri Logo" id="logo"/>
        </nav>
      </header>
  }
}

export default Header;