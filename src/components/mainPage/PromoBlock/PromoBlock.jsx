import React from 'react';
import './PromoBlock.css';
import hope from '../../../assets/give_hope.png';
import banner from '../../../assets/banner.png';
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
        <a href="#" className="promoBanner">
          <img className="promoItemImage" src={banner} alt="banner" />
        </a>
      </div>
    </div>
  );
}

export default PromoBlock;
