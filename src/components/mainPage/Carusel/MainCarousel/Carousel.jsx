import { useState, useEffect, Children, cloneElement } from 'react';
import './Carousel.css';

const Page_Width = 438;
export const Carousel = ({ children }) => {
  const handleArrowLeftClick = () => {
    setOffset((correntOffset) => {
      const newOffset = correntOffset + Page_Width;
      console.log(newOffset);
      return Math.min(newOffset, 0);
    });
  };
  const handleArrowRightClick = () => {
    setOffset((correntOffset) => {
      const newOffset = correntOffset - Page_Width;
      console.log(newOffset);
      const maxOffset = -(Page_Width * (pages.leng - 1));
      return Math.max(newOffset, maxOffset);
    });
  };
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: { height: '100%', minWidth: `${Page_Width}px`, maxWidth: `${Page_Width}px` },
        });
      }),
    );
  }, []);
  return (
    <div className="main-container">
      {/* <FaChevronLeft/> */}
      <button className="arrow" onClick={handleArrowLeftClick}>
        left
      </button>
      <div className="window">
        <div
          className="all-pages-container"
          style={{
            tranform: `translateX(${offset})`,
          }}>
          {pages}
        </div>
      </div>
      <button className="arrow" onClick={handleArrowRightClick}>
        right
      </button>
      {/* <FaChevronRight/> */}
    </div>
  );
};
