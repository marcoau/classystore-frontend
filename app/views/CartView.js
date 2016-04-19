'use strict';

import React, { Component } from 'react';
import CartProduct from './../components/CartProduct';

export default class CartView extends Component {
  render() {
    return (
      <div className='cart'>
        <div className='container'>
          <h3>購物車</h3>
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <div className='cart-total'>
            <h3 className='cart-total-title'>總數</h3>
            <p className='cart-total-price'>$400.00</p>
          </div>

          <button className='cart-checkout _right'>
            <i className='fa fa-credit-card' aria-hidden={true}></i>
            結帳
          </button>
        </div>
      </div>
    );
  }
}
