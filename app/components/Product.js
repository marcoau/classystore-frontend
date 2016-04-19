'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Product extends Component {
  render() {
    return (
      <div className='product-wrapper _beauty'>
        <Link to={'/products/apple'}>
          <div className='product'>
            <img src='http://www.perfumecopy.com/wp-content/uploads/2016/03/lancome_vie_belle.jpg' />
            <h4 className='product-title'>Lancome La vie est belle<br />美好人生香水</h4>

            <p className='product-price'>$100.00</p>
            <p className='product-saved'>Saved $30.00*</p>
          </div>
        </Link>
      </div>
    );
  }
}
