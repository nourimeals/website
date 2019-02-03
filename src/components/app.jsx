require('dotenv').config();

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './home/home.jsx';
import About from './about/about.jsx';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;