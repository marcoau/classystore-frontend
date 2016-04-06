'use strict';

import React, { Component } from 'react';

export default class ProductView extends Component {
  render() {
    const { params } = this.props;

    return (
      <div>
        <h2>西班牙頂級橡果火腿</h2>
        <h3>Jamon Iberico de Bellota</h3>
        <h3>ID: { params.pId }</h3>
      </div>
    );
  }
}
