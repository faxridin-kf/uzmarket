import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import './Carousel.css';
import Goods from '../Goods/Goods';
import Right from '../../../assets/right.png';
import Left from '../../../assets/left.png';
function Carousell() {
  return (
    <>
      <Carousel
        className="containerr"
        rightArrow={
          <button className="arrowRightBtn">
            <img src={Right} alt="right" />
          </button>
        }
        leftArrow={
          <button className="arrowLeftBtn">
            <img src={Left} alt="left" />
          </button>
        }
        infinite={true}
        show={4.5}
        slide={1}
        swiping={true}>
        <Goods />
        <Goods />
        <Goods />
        <Goods />
        <Goods />
      </Carousel>
      ,
    </>
  );
}
export default Carousell;
