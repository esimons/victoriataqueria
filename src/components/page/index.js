import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../home';
import About from '../about';
import Menu from '../menu';
import Locations from '../locations';
import Navbar from '../navbar';

import './_index.css';

const Page = () => {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/about"
          component={About}
        />
        <Route
          exact
          path="/menu"
          component={Menu}
        />
        <Route
          exact
          path="/locations"
          component={Locations}
        />
      </React.Fragment>
    </Router>
  )
};

export default Page;