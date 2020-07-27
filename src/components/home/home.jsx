import React from 'react';

import { Header } from '../common/header/header.jsx';
import { Welcome } from './sections/Welcome';
import { About } from './sections/About';
import { Volunteer } from './sections/Volunteer';
import { Footer } from '../common/footer/Footer.jsx';


import './home.scss';
var ml_account;

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.runMailPopup = this.runMailPopup.bind(this);
  }

  componentDidMount() {
    // Code for running Mailerlite
    (function (m, a, i, l, e, r) {
      m['MailerLiteObject'] = e; function f() {
        var c = { a: arguments, q: [] }; var r = this.push(c); return "number" != typeof r ? r : f.bind(c.q);
      }
      f.q = f.q || []; m[e] = m[e] || f.bind(f.q); m[e].q = m[e].q || f.q; r = a.createElement(i);
      var _ = a.getElementsByTagName(i)[0]; r.async = 1; r.src = l + '?v' + (~~(new Date().getTime() / 1000000));
      _.parentNode.insertBefore(r, _);
    })(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');

    ml_account = ml('accounts', '1308892', 't0g9u5n8v8', 'load');
  }

  runMailPopup() {
    ml_account('webforms', '1094822', 'b7x6u1', 'show');
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Welcome />
        <About />
        <Volunteer />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;

