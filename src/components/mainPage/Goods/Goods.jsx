import React from 'react';
import Button from '../../Button/Button';
import './Goods.css';
import goodImg from '../../../assets/good.jpg';
function Goods() {
  return (
    <>
      <div className="cartItem">
        <a className="goodsItemImgWrapper" href="#">
          <img className="goodsImg" src={goodImg} alt="goods" />
        </a>
        <p className="goodName">Goog name</p>
        <p className="goodPrice">
          <span className="goodPriceText">3 0000</span> Сум
        </p>
        <div className="goodsItemBtns">
          <Button />
        </div>
      </div>
    </>
  );
}

export default Goods;
