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
      </React.Fragment>
    )
  }
}

export default App;