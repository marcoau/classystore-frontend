'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';

import Product from './../components/Product';

const API_URL = process.env.API_URL;

export default class HomeView extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  getProducts() {
    const productsUrl = `${API_URL}/api/products`;

    request.get(productsUrl)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        const products = res.body.data;

        this.setState({
          products: products,
        });
      });
  }

  componentDidMount() {
    this.getProducts();
  }

	render() {
    const Products = this.state.products.map(p => ( <Product key={p.productId} product={p} /> ));

    return (
      <div>
        <div className='container'>
          <h3>大熱產品</h3>
          { Products }
        </div>
      </div>
    );
  }
}
