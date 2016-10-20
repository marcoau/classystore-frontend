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
            <p>創立於1993年，美國時尚生活品牌kate spade new york以簡潔靈動的造型，鮮亮大膽的顏色以及活潑有趣的生活態度風靡時尚之都 - 紐約。 它用活力無限的大膽色調表現出kate spade new york女孩內心對於未來的美好憧憬和無所畏懼。 品牌創立之初，當時擔任《Mademoiselle》雜志時尚編輯的Kate Brosnaham由於遍尋不著心目中時尚經典的手袋，便決定親力親為的設計一款實用手包。Kate的決定就此引起生活配飾領域的一場全新變革,隨著品牌的不斷發展，經典的造型和現代圖案元素融合成品牌的核心價值，並建構出品牌的視覺標志。</p>
          </div>
        </div>
        <div className='brand-banner-hero'>
          <img src='http://previews.123rf.com/images/tonic85/tonic851304/tonic85130400145/19093766-Attractive-caucasian-girl-sitting-on-floor-Stock-Photo.jpg' />
        </div>
      </div>
    );
  }
}
