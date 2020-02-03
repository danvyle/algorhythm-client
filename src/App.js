import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import queryString from 'query-string'
import './App.css';

import Welcome from './components/Welcome';
import Song from './components/Song';
import User from './containers/User'
import ErrorMsg from './components/ErrorMsg'

import SavedPlaylists from './containers/SavedPlaylists'

var StatsD = require('node-dogstatsd').StatsD;
var dogstatsd = new StatsD();

// # Increment a counter.
dogstatsd.increment('page.views')


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { serverData: {} }
  }



  render() {
    return (
      <Router>
        <div className="App" >
          <Route exact path='/' component={Welcome} />
          <Route exact path='/user' component={User} />
          <Route exact path='/error' component={ErrorMsg} />
        </div>
      </Router>
    );
  }

}
export default App;
