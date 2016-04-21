'use strict';

import React, { Component } from 'react';
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

    let refQuery;
    if(query.cat) {
      refQuery = this._productsRef.orderByChild('category').equalTo(query.cat);

    } else {
      refQuery = this._productsRef.orderByChild('category');
    }

    refQuery.once('value', dataSnapshot => {
      const data = dataSnapshot.val();
      const newProducts = [];

      for(let id in data) {
        newProducts.push(data[id]);
      }

      this.setState({
        products: newProducts,
      });
    });
  }

  render() {
    const { params, location } = this.props;
    const query = location.query;

    const CatHeader = query.cat ?
      ( <h3>{query.cat}類</h3> ) : null;

    const QHeader = query.q ?
      ( <h3>找到與「{query.q}」相關的產品</h3> ) : null;

    const Products = this.state.products.map(p => ( <Product key={p.id} product={p} /> ));

    return (
      <div>
        <div className='container'>
          {CatHeader}
          {QHeader}
          {Products}
        </div>
      </div>
    );
  }
}
