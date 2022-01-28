import React from 'react';
import './HeartBtn.css';
function HeartBtn() {
  return (
    <>
      <button className="goodItemFavorite">
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
      </button>
    </>
  );
}
export default HeartBtn;
