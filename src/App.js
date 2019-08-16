import React, { Component } from 'react';
import './style.scss';
// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from './scenes/Home';
import Detail from './scenes/Detail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/detail" component={Detail} />
        </div>
      </Router>
    );
  }
}

export default App;
