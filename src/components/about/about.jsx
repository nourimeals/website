import React from 'react';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

import './about.scss';

import kim from "../../images/kim.jpg";
import green from "../../images/green.jpg";
import johnson from "../../images/johnson.jpg";

import teamData from '../../data/team-info.js';

class AboutPage extends React.Component {
  render() {
    return <React.Fragment>
      <Header />
      <section id="about-nouri">
        <p>The idea of Nouri Meals was born out of a realization that we all want to be generous, be a part of our communities and help each other. We just need the light to show us how.</p>
        <p>We recognize that the way we plan to do business requires a paradigm shift - money and funding can always be found but time is what we cannot get back and time is often what holds people back from improving their situation in our communities. Time is also what holds people back from being more involved and invested in the wellbeing of their communities.</p>
        <p>From the parents who work 2-3 jobs let alone cook three meals a day for themselves and their children, to the non profit organizations who constantly have to find enough volunteers to help keep things running, and to each and every one of us who see the need around us but do not know how to fit saving the world into our schedules.</p>
      </section>
      <section id="reach-out">
        <h2>Our job is to gift time back to you and enable you to be part of your neighborhood.</h2>
        <a href="mailto:hello@nourimeals.com"><button>Get Updates</button></a>
      </section>
      <section id="team-block">
        <h1>Meet the Board</h1>
          <div id="team-list">
            <div className="team-member">
              <img src={kim} alt={teamData.amber.name} className="team-photo" />
              <h3>{teamData.amber.name}</h3>
              <h4>{teamData.amber.position}</h4>
              <p>{teamData.amber.bio}</p>
            </div>
            <div className="team-member">
              <img src={green} alt={teamData.cody.name}className="team-photo" />
              <h3>{teamData.cody.name}</h3>
              <h4>{teamData.cody.position}</h4>
              <p>{teamData.cody.bio}</p>
            </div>
            <div className="team-member">
              <img src={johnson} alt={teamData.ryan.name}className="team-photo" />
              <h3>{teamData.ryan.name}</h3>
              <h4>{teamData.ryan.position}</h4>
              <p>{teamData.ryan.bio}</p>
            </div>
          </div>
      </section>
      <Footer />
    </React.Fragment>
  }
}

export default AboutPage;