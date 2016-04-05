'use strict';

import React, { Component } from 'react';

export default class ProductView extends Component {
  render() {
    const { params } = this.props;

    return (
      <div>
        <h2>Product Page</h2>
        <h3>ID: { params.pId }</h3>
      </div>
    );
  }
}
