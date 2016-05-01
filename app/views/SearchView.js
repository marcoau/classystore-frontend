'use strict';

import React, { Component } from 'react';
import Filter from './../components/Filter';
import Product from './../components/Product';

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
  }

  componentWillReceiveProps(nextProps) {
    this.pullProducts(nextProps);
  }

  pullProducts(props) {
    const { location } = props;
    const query = location.query;

    let refQuery = this._productsRef.orderByChild('category');
    if(query.category) refQuery = refQuery.equalTo(query.category);

    refQuery.once('value', dataSnapshot => {
      const data = dataSnapshot.val();
      const newProducts = [];

      for(let id in data) {
        const product = data[id];

        // filters
        if(query.brand && query.brand !== product.brand) continue;

        newProducts.push(product);
      }

      this.setState({
        products: newProducts,
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

    const Products = this.state.products.map(p => ( <Product key={p.id} product={p} /> ));

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
