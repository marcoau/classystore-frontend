'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import Firebase from 'firebase';

export default class Filter extends Component {
  constructor() {
    super();

    this.state = {
      brands: [],
      types: [],
    };
  }

  componentDidMount() {
    this._brandsRef = new Firebase(`https://classy-store.firebaseio.com/brands`);
    this._typesRef = new Firebase(`https://classy-store.firebaseio.com/types`);
  }

  componentWillReceiveProps(nextProps) {
    this.pullFilters(nextProps);
  }

  pullFilters(props) {
    const { query } = props;

    let brandsRefQuery = this._brandsRef.orderByChild('category');
    let typesRefQuery = this._typesRef.orderByChild('category');

    if(query.category) {
      brandsRefQuery = brandsRefQuery.equalTo(query.category);
      typesRefQuery = typesRefQuery.equalTo(query.category);
    }

    brandsRefQuery.once('value', dataSnapshot => {
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

    typesRefQuery.once('value', dataSnapshot => {
      const data = dataSnapshot.val();
      const types = [];

      for(let id in data) {
        const type = data[id];
        types.push(type);
      }

      this.setState({
        types: types,
      });
    });
  }

  render() {
    let currentQuery = {};
    try {
      currentQuery = JSON.parse(this.props.query.q);

    } catch(err) {
    }

    const brandFilters = this.state.brands.map(b => {
      const newQuery = Object.assign({ brand: b.name }, currentQuery);

      return (
        <p key={b.id} className='filter-group-link'>
          <Link to={`/search?q=${JSON.stringify(newQuery)}`}>
            {b.name}
          </Link>
        </p>
      );
    });

    const typeFilters = this.state.types.map(t => {
      const newQuery = Object.assign({ type: t.name.en }, currentQuery);
      delete newQuery.brand;

      return (
        <p key={t.id} className='filter-group-link'>
          <Link to={`/search?q=${JSON.stringify(newQuery)}`}>
            {t.name['zh-HK']}
          </Link>
        </p>
      );
    });

    const allBrandsQuery = Object.assign({}, currentQuery);
    delete allBrandsQuery.brand;

    const allBrandsLink = Object.keys(allBrandsQuery).length ?
      `/search?q=${JSON.stringify(allBrandsQuery)}` :
      '/search';

    const allTypesQuery = Object.assign({}, currentQuery);
    delete allTypesQuery.type;

    const allTypesLink = Object.keys(allTypesQuery).length ?
      `/search?q=${JSON.stringify(allTypesQuery)}` :
      '/search';

    return (
      <div className='filter'>
        <h3>分類搜尋</h3>
        <div className='filter-group'>
          <h4>品牌</h4>
          <p className='filter-group-link'>
            <Link to={allBrandsLink}>
              全部
            </Link>
          </p>
          {brandFilters}
        </div>
        <div className='filter-group'>
          <h4>類別</h4>
          <p className='filter-group-link'>
            <Link to={allTypesLink}>
              全部
            </Link>
          </p>
          {typeFilters}
        </div>
      </div>
    );
  }
}
