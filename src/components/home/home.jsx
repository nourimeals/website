import React from 'react';
import {connect} from 'react-redux';

import Header from '../header/header.jsx';

import './home.scss';

class HomePage extends React.Component {
  render() {
    return <React.Fragment>
        <section id="hero-block">
          <div className="cta-block">
            <h1>Will you be a part of
your community?</h1>
            <p>Fighting childhood hunger starts with schools…</p>
            <p>… and ends with a vibrant and supportive community.</p>
            <a href="mailto:hello@nourimeals.com">
              <button className="cta-btn">connect</button>
            </a>
          </div>
        </section>
      </React.Fragment>
  }
}

export default HomePage;