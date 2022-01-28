import React from 'react';
import './MainHeader.css';
import logo from '../../../assets/logo-new.png';
import give from '../../../assets/give_hope.png';

function MainHeader() {
  return (
    <div>
      <div className="container">
        <div className="flexBock">
          <img src={logo} alt="Makro market" />
          <form className="searchBlock">
            <input
              className="headerSearchInputField"
              type="text"
              placeholder="Поиск товаров по каталогу"
            />
            <button className="headerSearchBtn">
              <img width="35" src={give} />
            </button>
          </form>
          <div className="midleRightBlock">
            <svg
              width="25"
              height="21"
              viewBox="0 0 25 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.9268 4.19018C19.9267 -1.64019 13.7475 2.00183 12.2383 4.19017C10.4266 1.85979 4.42644 -1.64017 1.42644 4.19017C-1.57356 10.0205 12.2383 19.36 12.2383 19.36C12.2383 19.36 25.9268 10.0205 22.9268 4.19018Z"
                stroke=""
                stroke-width="2"></path>
            </svg>
            <div>
              <svg
                width="30"
                height="29"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke=""
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke=""
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke=""
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="priceText">
              <span className="priceNum">0</span> Сум
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
