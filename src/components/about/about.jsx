import React from "react";
import "./about.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import kim from "../../images/kim.jpg";
//about section
//button has no function at the moment
class About extends React.Component {
  render() {
    return <React.Fragment>
    <section>
      <section className="about-col">
        <div className="about-col-1">
          <p>
            The idea of Nouri Meals was born out of a realization that we all
            want to be generous, be a part of our communities and help each
            other. We just need the light to show us how.
          </p>
          <div>
    <FontAwesomeIcon icon="heart" />
  </div>
        </div>

        <div className="about-col-2">
          <p>
            We recognize that the way we plan to do business requires a paradigm
            shift - money and funding can always be found but time is what we
            cannot get back and time is often what holds people back from
            improving their situation in our communities. Time is also what
            holds people back from being more involved and invested in the
            wellbeing of their communities.
          </p>
          <div>
    <FontAwesomeIcon icon="heart" />
  </div>
        </div>
        <div className="about-col-3">
          <p>
            From the parents who work 2-3 jobs let alone cook three meals a day
            for themselves and their children, to the non profit organizations
            who constantly have to find enough volunteers to help keep things
            running, and to each and every one of us who see the need around us
            but do not know how to fit saving the world into our schedules.
          </p>
        </div>
        <div>
    <FontAwesomeIcon icon="heart" />
  </div>
      </section>

      <section className="btn reach-out">
        <button className="reach-out-btn">Reach Out</button>
      </section>

      <section className="team-block">
        <h1 className="team-header">Meet the Team</h1>
        <div className="team-col-1">
          <img src={kim} alt="team-photo" className="team-photo" />
          <p />
        </div>
      </section>
    </section>
    </React.Fragment>
  }
}

export default About;
