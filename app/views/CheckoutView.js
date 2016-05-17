'use strict';

import React, { Component } from 'react';
import CheckoutProduct from './../components/CheckoutProduct';

export default class CheckoutView extends Component {
  render() {
    return (
      <div className='checkout'>
        <div className='container _small'>
          <h3>結帳</h3>

          <div>
            <h4>選購產品</h4>
            <CheckoutProduct />
            <CheckoutProduct />
            <CheckoutProduct />
            <CheckoutProduct />
            <div className='checkout-total'>
              <h3 className='checkout-total-title'>總數</h3>
              <p className='checkout-total-price'>$400.00</p>
            </div>
          </div>

          <div>
            <h4>地址</h4>
            <p>Hong Kong Shatin Lalala</p>
          </div>

          <button className='checkout-pay _right'>
            <i className='fa fa-credit-card' aria-hidden={true}></i>
            付款
          </button>
        </div>
      </div>
    );
  }
}
