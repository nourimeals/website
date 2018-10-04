import React from 'react';

import FontAwesome from 'react-fontawesome';

// import './header.scss';

class Header extends React.Component {

  render() {
    return <header>
        <nav class="header-nav">
          <img src="../src/images/nouri-logo.png" alt="Nouri Logo" id="logo"/>
          <div class="nav-links">
            <a href="mailto:ambergkim@gmail.com">
              <FontAwesome name="envelope" size="2x" />
            </a>
          </div>
        </nav>
        <div id="hero-block">
          <div className="cta-block">
            <h1>Join our mission in solving childhood hunger</h1>
            <h3>Reach out!</h3>
            <a href="mailto:ambergkim@gmail.com">
              <button className="cta-btn">connect</button>
            </a>
          </div>
        </div>
      </header>
  }
}

export default Header;