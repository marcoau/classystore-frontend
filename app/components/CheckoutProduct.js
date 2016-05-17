'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class CheckoutProduct extends Component {
  render() {
    return (
      <div className='checkout-product _beauty'>
        <div className='checkout-product-image'>
          <img src='http://www.perfumecopy.com/wp-content/uploads/2016/03/lancome_vie_belle.jpg' />
        </div>
        <h4 className='checkout-product-name'>Lancome La vie est belle<br />美好人生香水</h4>
        <p className='checkout-product-price'>$100.00</p>
      </div>
    );
  }
}
