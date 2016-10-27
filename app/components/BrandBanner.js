'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class BrandBanner extends Component {
  render() {
    return (
      <div className='brand-banner'>
        <div className='container'>
          <div className='brand-banner-text'>
            <img src='https://www.katespade.com/on/demandware.static/-/Sites-Shop-Library/default/dw5bdf042b/themes/katespade/images/logo.png' />
            <h4>簡潔靈動，活力無限</h4>
          </div>
        </div>
        <div className='brand-banner-hero'>
          <img src='http://previews.123rf.com/images/tonic85/tonic851304/tonic85130400145/19093766-Attractive-caucasian-girl-sitting-on-floor-Stock-Photo.jpg' />
        </div>
      </div>
    );
  }
}
