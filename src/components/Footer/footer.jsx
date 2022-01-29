import React from 'react';
import './Footer.css';
import pay from '../../assets/credit-card.png';
function Footer() {
  return (
    <footer className="footer">
      <div className="footerBlock container">
        <div className="footerLeftBlock">
          <h1>E-Makro</h1>
          <div className="footerColumnBlock">
            <ul class="footerBlockMenu">
              <li class="footerBlockMenuItem">
                <a href="https://makromarket.uz/pages/e-makro" class="footerBlockMenuLink">
                  E-Makro
                </a>
              </li>

              <li class="footerBlockMenuItem">
                <a href="https://makromarket.uz/pages/texpodderzka" class="footerBlockMenuLink">
                  Жалобы и предложения
                </a>
              </li>

              <li class="footerBlockMenuItem">
                <a href="https://makromarket.uz/pages/usloviya" class="footerBlockMenuLink">
                  Оферта
                </a>
              </li>

              <li class="footerBlockMenuItem">
                <a href="https://makromarket.uz/yandex-plus" class="footerBlockMenuLink">
                  Yandex Plus
                </a>
              </li>
              <li class="footerBlockMenuItem">
                <a href="https://makromarket.uz/draws" class="footer-block-menu-link">
                  Розыгрыши
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerCenterBlock">
          <h1>О компании</h1>
          <div className="footerColumnBlock">
            <ul class="footerBlockMenu">
              <li class="footerBlockMenuItem">
                <a href="https://makromarket.uz/pages/e-makro" class="footerBlockMenuLink">
                  Оферта Доставка
                </a>
              </li>

              <li class="footerBlockMenuItem">
                <a href="https://makromarket.uz/pages/texpodderzka" class="footerBlockMenuLink">
                  О Нас
                </a>
              </li>

              <li class="footerBlockMenuItem">
                <a href="https://makromarket.uz/pages/usloviya" class="footerBlockMenuLink">
                  Политика качества Подарите надежду на жизнь
                </a>
              </li>

              <li class="footerBlockMenuItem">
                <a href="https://makromarket.uz/yandex-plus" class="footerBlockMenuLink">
                  Люди Макро
                </a>
              </li>
              <li class="footerBlockMenuItem">
                <a href="https://makromarket.uz/draws" class="footer-block-menu-link">
                  Розыгрыши
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerRightBlock">
          <h1>Обратная связь</h1>
          <div className="footerColumnBlock">
            <ul class="footerBlockMenu">
              <li class="footerBlockMenuItem">
                <a href="https://makromarket.uz/pages/e-makro" class="footerBlockMenuLink">
                  <span>Техподдержка</span>
                  <p>+998 71 205 12 32</p>
                </a>
              </li>

              <div className="payFlexBlock">
                <li class="footerBlockMenuItem">
                  <a href="https://makromarket.uz/pages/texpodderzka" class="footerBlockMenuLink">
                    <img src={pay} alt="" />
                  </a>
                </li>

                <li class="footerBlockMenuItem">
                  <a href="https://makromarket.uz/pages/usloviya" class="footerBlockMenuLink">
                    <img src={pay} alt="" />
                  </a>
                </li>
              </div>
              <div className="payFlexBlock">
                <li class="footerBlockMenuItem">
                  <a href="https://makromarket.uz/yandex-plus" class="footerBlockMenuLink">
                    <img src={pay} alt="" />
                  </a>
                </li>
                <li class="footerBlockMenuItem">
                  <a href="https://makromarket.uz/draws" class="footerBlockMenuLink">
                    <img src={pay} alt="" />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
