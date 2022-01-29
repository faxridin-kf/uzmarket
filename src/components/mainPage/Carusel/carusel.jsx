import React from 'react';
import './Carousel.css';
import { Carousel } from './MainCarousel/Carousel';
function Carousell() {
  return (
    <Carousel>
      <div className="item item-1">item 1</div>
      <div className="item item-2">item 2</div>
      <div className="item item-3">item 3</div>
      <div className="item item-4">item 4</div>
    </Carousel>
  );
}

export default Carousell;
