'use strict';

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './AppView';
import HomeView from './views/HomeView';
import CartView from './views/CartView';
import SearchView from './views/SearchView';
import ProductView from './views/ProductView';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomeView} />
      <Route path='cart' component={CartView} />
      <Route path='search' component={SearchView} />
      <Route path='products/:pId' component={ProductView} />
    </Route>
  </Router>
);

export { routes as default };
