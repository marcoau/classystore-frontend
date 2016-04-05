'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomeView extends Component {
	render() {
    return (
      <div>
        <h2>Home Page</h2>
        <ul>
          <li>
            <Link to={'/cart'}>Cart</Link>
          </li>
          <li>
            <Link to={'/products/apple'}>Product Apple</Link>
          </li>
          <li>
            <Link to={'/products/banana'}>Product Banana</Link>
          </li>
        </ul>
      </div>
    );
  }
}
