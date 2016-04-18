'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

import Product from './../components/Product';

export default class HomeView extends Component {
	render() {
    return (
      <div>
        <div className='container'>
          <h3>大熱產品</h3>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    );
  }
}
