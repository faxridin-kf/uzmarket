import React from 'react';
import Header from '../Header/Header';
import PromoBlock from './PromoBlock/PromoBlock';
import Goods from './Goods/Goods';
import Carousell from './Carusel/carusel';
import Footer from '../Footer/footer';
import './MainPage.css';

function MainPage() {
  return (
    <div>
      <Header />
      <PromoBlock />
      <Carousell />
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
      <Footer />
    </div>
  );
}

export default MainPage;
