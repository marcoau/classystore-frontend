'use strict';

import React, { Component } from 'react';
import Product from './../components/Product';

export default class ProductView extends Component {
  render() {
    const { params } = this.props;

    return (
      <div>
        <div className='container'>
          <div className='product-image'>
            <img src='http://www.perfumecopy.com/wp-content/uploads/2016/03/lancome_vie_belle.jpg' />
          </div>
          <div className='product-details'>
            <h3>Jamon Iberico de Bellota</h3>
            <h2>西班牙頂級橡果火腿</h2>
            <h3>ID: { params.pId }</h3>
            <p>
              傳統以來，西班牙人冬天時愛用伊比利豬火腿骨，加配牛肉、雞及蔬菜，煲五小時成濃湯，集肉類之精華，旨在補充體力。至於近骨的肉和筋肉，較有嚼勁，西班牙人會切粒當佐酒小食或切碎撒上意粉、海鮮飯或湯，有提鮮的作用。當然，不少得用上矜貴的豬油，伊比利亞豬油脂中含的油酸，來自橡果的健康脂肪酸，有助降低壞膽固醇，而且油香多一份甘味。好像意籍米芝蓮大廚Bombana就利用其脂肪，刨成薄片，包住龍蝦再焗香，使龍蝦多一份甘香，味道豐富。
            </p>
            <button className='_beauty _cart _right'>加到購物車</button>
          </div>
        </div>
        <div className='container'>
          <h3>為您推介的產品</h3>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    );
  }
}
