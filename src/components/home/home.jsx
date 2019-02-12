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
            <h1>Will you be a part of
            your community?</h1>
            <p>Fighting childhood hunger starts with you...</p>
            <p>… and ends with a vibrant and supportive community.</p>
            <button onClick={this.runMailPopup} className="cta-btn">Connect</button>
          </div>
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

        <section id="home-quotes">
          <div className="white-overlay quote-content">
            <blockquote cite="https://www.nokidhungry.org/who-we-are/hunger-facts">More than 13 million children in the US live in ‘food insecure’ homes… In the US, 1 in 6 children face hunger.<cite> - nokidhungry.org</cite></blockquote>
            <blockquote cite="https://www.northwestharvest.org/wa-hunger-facts">1 in 5 kids in Washington state lives in a household that struggles to put food on the table. The majority of working-age Washingtonians who live in poverty are actively working or looking for work.<cite> - northwestharvest.org</cite></blockquote>
          </div>
        </section>

        <section id="home-come-in">
          <p>Time is one thing that holds people back from improving their situation and time is also what often holds other back from being more involved and invested in the wellbeing of their communities.</p>
          <h1>This is where Nouri Meals comes in.</h1>
          <p>Nouri Meals is the hub for connecting Organizations, Donors, Businesses to help feed children fresh, nutritious food.</p>
        </section>
        <section id="home-learn-more">
          <h1>Learn more...</h1>
          <button onClick={this.runMailPopup} className="cta-btn">Connect</button>
        </section>

        <section id="home-how-it-works">
          <h1>How does Nouri Meals work?</h1>
          <ul>
            <li>Schools identify who needs meals.</li>
            <li>Parents sign their children up for Nouri Meals.</li>
            <li>Vendors find a listing they can fulfill</li>
            <li>Vendors deliver ready-to-eat food to families.</li>
            <li>Families receive fresh meals right at their doorstep.</li>
          </ul>
        </section>

        <Footer />

      </React.Fragment>
  }
}

export default HomePage;