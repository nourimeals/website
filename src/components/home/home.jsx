import React from 'react';
// import {connect} from 'react-redux';

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
        <section id="home-quotes">
          <div className="white-overlay quote-content">
            <blockquote cite="https://www.nokidhungry.org/who-we-are/hunger-facts">More than 13 million children in the US live in ‘food insecure’ homes… In the US, 1 in 6 children face hunger.<cite> - nokidhungry.org</cite></blockquote>
            <blockquote cite="https://www.northwestharvest.org/wa-hunger-facts">1 in 5 kids in Washington state lives in a household that struggles to put food on the table. The majority of working-age Washingtonians who live in poverty are actively working or looking for work.<cite> - northwestharvest.org</cite></blockquote>
          </div>
        </section>
        <section id="home-come-in">
          <p>Time is one thing that holds people back from improving their situation and time is also what often holds other back from being more involved and invested in the wellbeing of their communities.</p>
          <h1>This is where Nouri Meals comes in.</h1>
          <p>Nouri Meals is the hub for connecting Schools or Non-Profit Organizations, Donors, Businesses to help feed children fresh, nutritious food.</p>
        </section>
        <section id="home-learn-more">
          <h1>Learn more...</h1>
          <a href="mailto:ambergkim@gmail.com"><button>CONNECT</button></a>
        </section>
        <section id="home-how-it-works">
          <h1>How does Nouri Meals work?</h1>
          <ul>
            <li>Schools identify who needs meals</li>
            <li>Parents sign their children up for Nouri Meals</li>
            <li>Vendors find a listing that fit their schedule</li>
            <li>Vendors deliver ready-to-eat food to families</li>
          </ul>
        </section>
      </React.Fragment>
  }
}

export default HomePage;