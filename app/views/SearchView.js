'use strict';

import React, { Component } from 'react';
import Filter from './../components/Filter';
import Product from './../components/Product';
import request from 'superagent';

import Stickyfill from 'stickyfill';

const API_URL = process.env.API_URL;

export default class SearchView extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this._productsRef = new Firebase(`https://classy-store.firebaseio.com/products`);
    this.pullProducts(this.props);

    // use Stickyfill for search filters sidebar
    const stickyfill = new Stickyfill();
    const searchFilterElem = document.getElementsByClassName('search-filter')[0];
    stickyfill.add(searchFilterElem);
  }

  componentWillReceiveProps(nextProps) {
    this.pullProducts(nextProps);
  }

  pullProducts(props) {
    const { location } = props;
    const query = location.query;

    let productsUrl = `${API_URL}/api/products`;
    if(query.q) productsUrl += `?q=${query.q}`;

    request.get(productsUrl)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        const products = res.body.data;

        this.setState({
          products: products,
        });
      });
  }

  render() {
    const { params, location } = this.props;
    const query = location.query;

    const CatHeader = query.category ?
      ( <h3>{query.category}類</h3> ) : null;

    const QHeader = query.q ?
      ( <h3>找到與「{query.q}」相關的產品</h3> ) : null;

    const Products = this.state.products.map(p => ( <Product key={p.productId} product={p} /> ));

    return (
      <div className='search'>
        <div className='container'>
          <div className='search-filter'>
            <Filter query={query} />
          </div>
          <div className='search-products'>
            {CatHeader}
            {QHeader}
            {Products}
          </div>
        </div>
      </div>
    );
  }
}
