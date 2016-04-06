'use strict';

import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Header from './layout/Header';
import Footer from './layout/Footer';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        { children }
        <Footer />
      </div>
    );
  }
}
