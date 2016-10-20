'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Gallery extends Component {
  render() {
    const { products } = this.props;

    const GalleryImages = products.map(p => (
      <div className='gallery-product'>
        <img src={ p.imageUrl } />
      </div>
    ));

    return (
      <div className='gallery'>
        <div className='container'>
          { GalleryImages }
        </div>
      </div>
    );
  }
}
