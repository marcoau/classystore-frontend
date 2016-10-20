'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomeHero extends Component {
  render() {
    return (
      <div className='home-hero'>
        <div className='home-hero-title'>
          <h2>今日我至潮</h2>
          <h4>永遠走前潮流一步，發掘明日經典</h4>
        </div>
        <div className='home-hero-image'>
          <img src='http://previews.123rf.com/images/tonic85/tonic851304/tonic85130400145/19093766-Attractive-caucasian-girl-sitting-on-floor-Stock-Photo.jpg' />
        </div>
      </div>
    );
  }
}
