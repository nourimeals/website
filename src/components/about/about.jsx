import React from "react";
import "./about.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import kim from "../../images/kim.jpg";
import green from "../../images/green.jpg";
import johnson from "../../images/johnson.jpg";
//about section
//button has no function at the moment
class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="about-container">
          <section className="about-col">
            <div className="about-col-1">
              <p>
                The idea of Nouri Meals was born out of a realization that we
                all want to be generous, be a part of our communities and help
                each other. We just need the light to show us how.
              </p>
              <div className="icon-heart">
                <FontAwesomeIcon icon="heart" />
              </div>
            </div>

            <div className="about-col-2">
              <p>
                We recognize that the way we plan to do business requires a
                paradigm shift - money and funding can always be found but time
                is what we cannot get back and time is often what holds people
                back from improving their situation in our communities. Time is
                also what holds people back from being more involved and
                invested in the wellbeing of their communities.
              </p>
              <div className="icon-heart">
                <FontAwesomeIcon icon="heart" />
              </div>
            </div>
            <div className="about-col-3">
              <p>
                From the parents who work 2-3 jobs let alone cook three meals a
                day for themselves and their children, to the non profit
                organizations who constantly have to find enough volunteers to
                help keep things running, and to each and every one of us who
                see the need around us but do not know how to fit saving the
                world into our schedules.
              </p>
            </div>
            <div className="icon-heart">
              <FontAwesomeIcon icon="heart" />
            </div>
          </section>

          <section className="container-reach-out">
            <h2 className="header">
              Our job is to gift time back to you and enable you to be part of
              your neighborhood.
            </h2>
            <button className="reach-out-btn">Reach Out</button>
          </section>

          <section className="team-block">
            <h1 className="team-header">Meet the Team</h1>
            <section className="team-col-container">
              <div className="team-col-1">
                <img src={kim} alt="team-photo" className="team-photo" />
                <p>
                  Amber grew up in Redmond, married into the Marine Corps and
                  eventually came back to the home she loves. After becoming
                  responsible for the wellbeing of her children and living
                  through postpartum depression, she realized the importance
                  good nutrition has on our bodies. Amber grew up with a family
                  legacy of serving others and Nouri Meals is one step forward
                  to giving back to her community. She has big shoes to follow.
                </p>
              </div>
              <div className="team-col-1">
                <img src={green} alt="team-photo" className="team-photo" />
                <p>
                  I am a stay at home dad and software developer. I love to make
                  things that are easy to use and make peoples lives easier. I
                  have been with Nouri from the start and believe that we can be
                  a positive influence for helping food insecure children.
                </p>
              </div>
              <div className="team-col-1">
                <img src={johnson} alt="team-photo" className="team-photo" />
                <p>
                  My passion lies in collaborative problem solving and
                  exercising organizational skills to maximize efficiency and
                  quality in everything from physical spaces to communication.
                  My mission is to leave what I touch better than it was found
                  without diminishing the needs of the present. The process of
                  collaboration and communication between all parties involved
                  in accomplishing a task excites me and drives me to create for
                  the benefit of others..
                </p>
              </div>
            </section>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
