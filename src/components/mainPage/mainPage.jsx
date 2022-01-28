import React from 'react';
import Header from '../Header/Header';
import PromoBlock from './PromoBlock/PromoBlock';
import Goods from './Goods/Goods';
import './MainPage.css';

function MainPage() {
  return (
    <div>
      <Header />
      <PromoBlock />
      <div className="goodsFlexBox container">
        <h1 className="categoryName">M brand</h1>
        <div className="goodsListBlock">
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
