'use strict';

import React, { Component } from 'react';
import Product from './../components/Product';
import request from 'superagent';

const API_URL = process.env.API_URL;

export default class ProductView extends Component {
  constructor() {
    super();

    this.state = {
      product: {}
    };
  }

  getProduct() {
    const { params } = this.props;
    const productUrl = `${API_URL}/api/products/${params.pId}`;

    request.get(productUrl)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        const product = res.body.data;

        this.setState({
          product: product,
        });
      });
  }

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { params } = this.props;
    const { name, description, imageUrl, category } = this.state.product;

    return (
      <div>
        <div className='container'>
          <div className='product-image'>
            <img src={imageUrl} />
          </div>
          <div className='product-details'>
            <h3>{name ? name.en : ''}</h3>
            <h2>{name ? name['zh-HK'] : ''}</h2>
            <p>
              {description ? description['en'] : ''}
            </p>
            <button className={`_${category} _cart _right`}>
              <i className="fa fa-shopping-bag" aria-hidden={true}></i>
              加到購物車
            </button>
          </div>
        </div>
        <div className='container'>
          <h3>為您推介的產品</h3>
        </div>
      </div>
    );
  }
}
