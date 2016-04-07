'use strict';

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Classy Store</h1>
        <div className='header-left'>
          <a href>Fashion</a>
          <a href>Beauty</a>
          <a href>Taste</a>
        </div>
        <div className='header-search'>
          <input placeholder='Search for products' />
        </div>
        <div className='header-right'>
          <button>Login</button>
          <button>Cart</button>
        </div>
      </div>
    );
  }
}
