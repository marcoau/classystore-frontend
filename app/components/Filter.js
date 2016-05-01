'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Filter extends Component {
  constructor() {
    super();

    this.state = {
      brands: []
    };
  }

  buildQueryString(query) {
    const queries = [];

    for(let param in query) {
      queries.push(`${param}=${query[param]}`);
    }

    return queries.length ? queries.join('&') : '';
  }

  componentDidMount() {
    this._brandsRef = new Firebase(`https://classy-store.firebaseio.com/brands`);
  }

  componentWillReceiveProps(nextProps) {
    this.pullFilters(nextProps);
  }

  pullFilters(props) {
    const { query } = props;

    let refQuery = this._brandsRef.orderByChild('category');
    if(query.category) refQuery = refQuery.equalTo(query.category);

    refQuery.once('value', dataSnapshot => {
      const data = dataSnapshot.val();
      const brands = [];

      for(let id in data) {
        const brand = data[id];
        brands.push(brand);
      }

      this.setState({
        brands: brands,
      });
    });
  }

  render() {
    const currentQuery = this.props.query;

    const brandFilters = this.state.brands.map(b => {
      const newQuery = Object.assign(currentQuery, { brand: b.name });

      return (
        <p key={b.id} className='filter-group-link'>
          <Link to={`/search?${this.buildQueryString(newQuery)}`}>
            {b.name}
          </Link>
        </p>
      );
    });

    return (
      <div className='filter'>
        <h3>分類搜尋</h3>
        <div className='filter-group'>
          <h4>品牌</h4>
          {brandFilters}
        </div>
        <div className='filter-group'>
          <h4>類別</h4>
        </div>
      </div>
    );
  }
}
