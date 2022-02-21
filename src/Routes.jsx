import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Service from './components/Service.jsx';
import Contact from './components/Contact.jsx';
import History from './components/History.jsx';
import Header from './layout/Header';
import Footer from './layout/Footer';
class Routes extends React.Component {

  render() {

    return (
      <Router>
        <Header></Header>
        <Switch>
          <Route exact from="/" component={Home} />
          <Route exact from="/about" component={About} />
          <Route exact from="/portfolio" component={Portfolio} />
          <Route exact from="/service" component={Service} />
          <Route exact from="/contact" component={Contact} />
          <Route exact from="/history" component={History} />
        </Switch>
        <Footer></Footer>
      </Router>
    )
  }
}

export default Routes;