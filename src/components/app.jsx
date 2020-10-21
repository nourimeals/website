import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './home/home.jsx'

require('dotenv').config()

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
