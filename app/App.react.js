'use strict';

import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import HomeView from './views/HomeView';
import CartView from './views/CartView';
import ProductView from './views/ProductView';

class App extends Component {
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

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomeView} />
      <Route path='cart' component={CartView} />
      <Route path='products/:pId' component={ProductView} />
    </Route>
  </Router>
);

export { routes as default };
