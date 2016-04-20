'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Product extends Component {
  render() {
    const { id, name, category, imageUrl, price, originalPrice } = this.props.product;

    const discountAmount = originalPrice - price;
    const discountPercentage = discountAmount / originalPrice * 100;

    return (
      <div className={`product-wrapper _${category}`}>
        <Link to={`/products/${id}`}>
          <div className='product'>
            <img src={imageUrl} />
            <h4 className='product-title'>{name.en}<br />{name['zh-HK']}</h4>

            <p className='product-price'>${price.toFixed(2)}</p>
            <p className='product-saved'>Saved ${discountAmount.toFixed(2)} (${discountPercentage.toFixed(2)})*</p>
          </div>
        </Link>
      </div>
    );
  }
}
