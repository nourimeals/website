import React from 'react';
import {connect} from 'react-redux';

import Header from '../header/header.jsx';


class HomePage extends React.Component {
  render() {
    return <React.Fragment>
        <Header />
      </React.Fragment>
  }
}

export default HomePage;