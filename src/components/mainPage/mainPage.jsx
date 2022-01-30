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
      {/*  */}
      <h1 className="categoryName container">Топ-Продукты</h1>
      <Carousell />
      {/*  */}
      <div className="goodsFlexBox container">
        <h1 className="categoryName">M brand</h1>
        <div className="goodsListBlock">
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods /> <Goods />
          <Goods />
        </div>
      </div>
      <h1 className="categoryName container">Молочная продукция</h1>
      <Carousell />
      {/*  */}
      <div className="goodsFlexBox container">
        <h1 className="categoryName">M brand</h1>
        <div className="goodsListBlock">
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods /> <Goods />
          <Goods />
        </div>
      </div>
      {/*  */}
      <h1 className="categoryName container">Для футбола</h1>
      <Carousell />
      {/*  */}
      <Footer />
    </div>
  );
}

export default MainPage;
