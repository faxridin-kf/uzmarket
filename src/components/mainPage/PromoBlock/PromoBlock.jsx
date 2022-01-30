import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import './PromoBlock.css';
import hope from '../../../assets/give_hope.png';
import banner from '../../../assets/banner1.jpg';
function PromoBlock() {
  return (
    <div className="container">
      <div className="column12">
        <a href="#" className="takeGood">
          <img className="heartImg" src={hope} alt="heart" />
          Подарите надежду на жизнь
        </a>
      </div>
      <div className="owlItemPromo">
        <Carousel show={1} slide={1} swiping={true}>
          <a href="#" className="promoBanner">
            <img className="promoItemImage" src={banner} alt="banner" />
          </a>
          <a href="#" className="promoBanner">
            <img className="promoItemImage" src={banner} alt="banner" />
          </a>
          <a href="#" className="promoBanner">
            <img className="promoItemImage" src={banner} alt="banner" />
          </a>
          <a href="#" className="promoBanner">
            <img className="promoItemImage" src={banner} alt="banner" />
          </a>
        </Carousel>
        <a href="#" className="promoBanner">
          <img className="promoItemImage" src={banner} alt="banner" />
        </a>
      </div>
    </div>
  );
}

export default PromoBlock;
