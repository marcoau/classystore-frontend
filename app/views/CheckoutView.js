'use strict';

import React, { Component } from 'react';
import CheckoutProduct from './../components/CheckoutProduct';

export default class CheckoutView extends Component {
  constructor() {
    super();

    this.stripeHandler = StripeCheckout.configure({
      key: 'pk_test_N1wkExc5iUZM2g3im06rROVe',
      image: 'https://d30y9cdsu7xlg0.cloudfront.net/png/17663-200.png',
      locale: 'auto',
      token: token => {
        console.log('token:');
        console.log(token);
      }
    });
  }

  clickPay() {
    this.stripeHandler.open({
      name: 'ClassyStore',
      description: '4件產品',
      amount: 40000
    });
  }

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

          <button className='checkout-pay _right' onClick={this.clickPay.bind(this)}>
            <i className='fa fa-credit-card' aria-hidden={true}></i>
            付款
          </button>
        </div>
      </div>
    );
  }
}
