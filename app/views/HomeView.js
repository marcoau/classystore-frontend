'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import Firebase from 'firebase';

import Product from './../components/Product';

export default class HomeView extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const productsRef = new Firebase(`https://classy-store.firebaseio.com/products`);

    productsRef.on('value', dataSnapshot => {
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
    const Products = this.state.products.map(p => ( <Product key={p.id} product={p} /> ));

    return (
      <div>
        <div className='container'>
          <h3>大熱產品</h3>
          { Products }
        </div>
      </div>
    );
  }
}
