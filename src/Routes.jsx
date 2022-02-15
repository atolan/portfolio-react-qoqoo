import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home.jsx';

class Routes extends React.Component {
  render() {

    return (
      <Router>
        <Switch>
          <Route exact from="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;