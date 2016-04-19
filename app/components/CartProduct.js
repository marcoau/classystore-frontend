'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class CartProduct extends Component {
  render() {
    return (
      <div className='cart-product _beauty'>
        <div className='cart-product-image'>
          <img src='http://www.perfumecopy.com/wp-content/uploads/2016/03/lancome_vie_belle.jpg' />
        </div>
        <h4 className='cart-product-name'>Lancome La vie est belle<br />美好人生香水</h4>
        <p className='cart-product-price'>$100.00</p>
      </div>
    );
  }
}
