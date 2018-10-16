import React from 'react';
import {connect} from 'react-redux';

import Header from '../header/header.jsx';

import './home.scss';

class HomePage extends React.Component {
  render() {
    return <React.Fragment>
        <section id="hero-block">
          <div className="cta-block">
            <h1>Join our mission in solving childhood hunger</h1>
            <h3>Reach out!</h3>
            <a href="mailto:ambergkim@gmail.com">
              <button className="cta-btn">connect</button>
            </a>
          </div>
        </section>
      </React.Fragment>
  }
}

export default HomePage;