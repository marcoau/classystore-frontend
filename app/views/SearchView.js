'use strict';

import React, { Component } from 'react';
import Product from './../components/Product';

export default class SearchView extends Component {
  render() {
    const { params, location } = this.props;
    const query = location.query;

    const CatHeader = query.cat ? 
      ( <h3>{query.cat}類</h3> ) : null;

    const QHeader = query.q ?
      ( <h3>找到與「{query.q}」相關的產品</h3> ) : null;    

    return (
      <div>
        <div className='container'>
          {CatHeader}
          {QHeader}
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    );
  }
}
