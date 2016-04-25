'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Filter extends Component {
  buildQueryString(query) {
    let queryString = '';
    for(let param in query) {
      queryString += `&${param}=${query[param]}`;
    }

    return queryString;
  }

  render() {
    const currentQuery = this.props.query;

    let currentQueryString = '';
    for(let param in currentQuery) {
      currentQueryString += `&${param}=${currentQuery[param]}`;
    }

    // TEMP: hardcode brands for now
    const BRANDS = ['Coach', 'Longchamp'];

    const filterLinks = BRANDS.map(b => {
      const newQuery = Object.assign(currentQuery, { brand: b });

      return (
        <p key={b}>
          <Link to={`/search?${this.buildQueryString(newQuery)}`}>
            {b}
          </Link>
        </p>
      );
    });

    return (
      <div className='filter'>
        <h4>品牌</h4>
        {filterLinks}
      </div>
    );
  }
}
