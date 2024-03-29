'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    const fashionQ = {
      category: 'fashion',
    };

    const foodQ = {
      category: 'food',
    };

    const beautyQ = {
      category: 'beauty',
    };

    return (
      <div className='header'>
        <h1>
          <Link to={''}>
            ClassyStore.
          </Link>
        </h1>
        <div className='header-left'>
          <Link to={`/search?q=${JSON.stringify(fashionQ)}`} className='button _fashion'>
            <i className='fa fa-shopping-bag' aria-hidden={true}></i>
            時裝潮物
          </Link>
          <Link to={`/search?q=${JSON.stringify(foodQ)}`} className='button _food'>
            <i className='fa fa-cutlery' aria-hidden={true}></i>
            美食佳餚
          </Link>
          <Link to={`/search?q=${JSON.stringify(beautyQ)}`} className='button _beauty'>
            <i className='fa fa-flask' aria-hidden={true}></i>
            美容扮靚
          </Link>
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
