import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortBy } from '../../../redux/actions/fillterlang';
import LangPopup from '../LangPopup/LangPopup';
import LocationPopup from '../LocationPopup/LocationPopup';
import avatar from '../../../assets/user.png';
import './SubHeader.css';
// const LangCategory = ['Русский', 'Узбекский', 'Англиский'];
function SubHeader() {
  // const dispatch = useDispatch();
  // const { sortBy } = useSelector(({ filters }) => filters);
  // const onSelectLangType = React.useCallback((type) => {
  //   dispatch(setSortBy(type));
  // }, []);
  return (
    <div className="container">
      <div className="flexBlock marginTop">
        <div className="block">
          <LocationPopup />
        </div>
        {/* accordion */}
        <div className="block">
          <ul className="headerLinksBlock">
            <li className="headerlinks">
              <a href="#">Вакансии</a>
            </li>
            <li className="headerlinks">
              <a href="#">B2B</a>
            </li>
            <li className="headerlinks">
              <a href="#">О нас</a>
            </li>
            <li className="headerlinks">
              <a href="#">Тендоры</a>
            </li>
          </ul>
        </div>
        <div className="block optionBlock">
          <div className="signUpBlock">
            <img src={avatar} alt="avatar" />
            <a href="#" className="signIn">
              Войти
            </a>
            <p className="slash">/</p>
            <a href="#" className="signUp">
              Регистрация
            </a>
          </div>
          <div className="langBlock">
            {/* <div className="accordion">
              <p className="langTitle langtitleActive">русс</p>
              <p className="langTitle">узб</p>
              <p className="langTitle">анг</p>
             
            </div> */}
            <LangPopup
            // activeSortType={sortBy.type}
            // items={LangCategory}
            // onClickSortType={onSelectLangType}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
