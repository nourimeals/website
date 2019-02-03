import React from 'react';
import {Link} from 'react-router-dom';

import './header.scss';

import logo from '../../images/nouri-logo.png';


class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      menuOn: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({menuOn: !this.state.menuOn});
  }

  render() {
    return <header>
      <img src={logo} alt="Nouri Logo" id="logo"/>
      <p onClick={this.toggleMenu}>MENU</p>
      {
        this.state.menuOn ?
        (
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
          </ul>
        ) :
        (
          null
        )
      }
      </header>
  }
}

export default Header;