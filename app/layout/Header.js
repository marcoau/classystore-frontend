'use strict';

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Classy Store</h1>
        <div className='header-left'>
          <a className='button' href>
            <i className='fa fa-shopping-bag' aria-hidden={true}></i>
            時裝潮物
          </a>
          <a className='button' href>
            <i className='fa fa-cutlery' aria-hidden={true}></i>
            美食佳餚
          </a>
          <a className='button' href>
            <i className='fa fa-flask' aria-hidden={true}></i>
            美容扮靚
          </a>
        </div>
        <div className='header-search'>
          <input placeholder='Search for products' />
        </div>
        <div className='header-right'>
          <button className='_bordered _fb'>
            <i className='fa fa-facebook-square' aria-hidden={true}></i>
              FB登入
          </button>
          <button>
            <i className='fa fa-shopping-cart' aria-hidden={true}></i>
            購物車
          </button>
        </div>
      </div>
    );
  }
}
