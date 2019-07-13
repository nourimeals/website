import React from 'react';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

import './home.scss';
var ml_account;

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.runMailPopup = this.runMailPopup.bind(this);
  }

  componentDidMount() {
    // Code for running Mailerlite
    (function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
      var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
      f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
      var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
      _.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');
      
      ml_account = ml('accounts', '1308892', 't0g9u5n8v8', 'load');
  }

  runMailPopup() {
    ml_account('webforms', '1094822', 'b7x6u1', 'show');
  }

  render() {
    return <React.Fragment>
      <Header />
        <section id="hero-block">
          <div className="cta-block">
            <h1>Helping hungry families is easy as easy as ordering food delivery from an app.</h1>
            <p>Join our team in bringing tech to end childhood hunger in our communities.</p>
            <button onClick={this.runMailPopup} className="cta-btn">Get Updates</button>
          </div>
        </section>

        <section id="home-how-it-works">
          <h1>How does Nouri Meals work?</h1>
          <ul>
            <li>Non profits identify families who need meals.</li>
            <li>Parents sign their family up for Nouri Meals.</li>
            <li>Vendors find a listing they can fulfill</li>
            <li>Vendors deliver ready-to-eat food to families.</li>
            <li>Families receive fresh meals right at their doorstep.</li>
          </ul>
        </section>

        <section id="home-quotes">
          <div className="white-overlay quote-content">
            <blockquote cite="https://www.nokidhungry.org/who-we-are/hunger-facts">More than 13 million children in the US live in ‘food insecure’ homes… In the US, 1 in 6 children face hunger.<cite> - nokidhungry.org</cite></blockquote>
            <blockquote cite="https://www.northwestharvest.org/wa-hunger-facts">1 in 5 kids in Washington state lives in a household that struggles to put food on the table. The majority of working-age Washingtonians who live in poverty are actively working or looking for work.<cite> - northwestharvest.org</cite></blockquote>
          </div>
        </section>

        <section id="home-come-in">
          <p>Time is one thing that holds the working poor back from improving their situation and time is also what often holds other people like you and me from being more involved and invested in the wellbeing of their communities.</p>
          <h1>This is where Nouri Meals comes in.</h1>
          <p>Nouri Meals is the hub for connecting Organizations, Donors, Businesses to help feed children fresh, nutritious food.</p>
        </section>
        <section id="home-learn-more">
          <h1>Learn more...</h1>
          <button onClick={this.runMailPopup} className="cta-btn">Get Updates</button>
        </section>

        <section id="home-priorities">
              <h1>Nouri Meals Priorities:</h1>
              <ul>
                <li>Provide fresh food for our children’s health and future.</li>
                <li>Empower local businesses to thrive and provide a living for their families.</li>
                <li>Involve communities to invest in the people around them.</li>
                <li>Respect the value of time and accessibility.</li>
                <li>Enable self-sufficiency and living wages.</li>
                <li>Connect people to information and resources to improve
                their lives.</li>
              </ul>
        </section>

        <section id="home-volunteer">
            <h1>Want to join the team?</h1>
            <p>We welcome volunteers!</p>
            <p>We work remotely and asynchronously using online collaboration tools like GitHub.</p>
            <p>Our stack is JavaScript/NodeJS, React, React-Native, and MongoDB.</p>
            <button onClick={this.runMailPopup} className="cta-btn">Volunteer</button>
        </section>

        <Footer />

      </React.Fragment>
  }
}

export default HomePage;