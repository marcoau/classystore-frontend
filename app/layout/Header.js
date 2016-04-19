'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>
          <Link to={''}>
            ClassyStore.
          </Link>
        </h1>
        <div className='header-left'>
          <a className='button _fashion' href>
            <i className='fa fa-shopping-bag' aria-hidden={true}></i>
            時裝潮物
          </a>
          <a className='button _food' href>
            <i className='fa fa-cutlery' aria-hidden={true}></i>
            美食佳餚
          </a>
          <a className='button _beauty' href>
            <i className='fa fa-flask' aria-hidden={true}></i>
            美容扮靚
          </a>
        </div>
        <div className='header-right'>
          <button className='_bordered _fb'>
            <i className='fa fa-facebook-square' aria-hidden={true}></i>
              FB登入
          </button>
          <Link to={'/cart'} className='button'>
            <i className='fa fa-shopping-cart' aria-hidden={true}></i>
            購物車
          </Link>
        </div>
      </div>
    );
  }
}
