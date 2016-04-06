'use strict';

import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <h1>Classy Store</h1>
        { children }
      </div>
    );
  }
}
