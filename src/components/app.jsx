import React from 'react';
// import {Provider} from 'react-redux';
// import {BrowserRouter, Route} from 'react-router-dom';
// import {createStore,
  // combineReducers,
  // applyMiddleware
// } from 'redux';

// import reducers from '../reducers/';

import Home from './home/home.jsx';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';
import About from './about/about.jsx';


import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

// library.add(faheart)
// import middlewares from '../middleware/';
// import {logger} from '../middleware/';

// const store = createStore(
//   reducers,
//   // applyMiddleware(middlewares.logger)
// );

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Home />
        <About />
        <Footer />   
      </React.Fragment>
    )
  }
}

export default App;