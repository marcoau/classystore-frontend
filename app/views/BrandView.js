'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';

import BrandBanner from './../components/BrandBanner';
import Gallery from './../components/Gallery';
import Product from './../components/Product';

const API_URL = process.env.API_URL;

export default class BrandView extends Component {
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
        <BrandBanner />
        <Gallery products={ this.state.products ? this.state.products.slice(0,7) : [] }/>
      </div>
    );
  }
}
