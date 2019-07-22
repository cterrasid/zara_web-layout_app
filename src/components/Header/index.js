import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import data from '../../assets/menu.json';
import mainLogo from '../../images/logo-zara-coll19.png';
import './styles.scss';

const Header = props => {
  const { menuStatus, logo, handleMenuVisibility } = props;
  const { menu } = data;

  return (
    <header className="header__container">
      <img
        className={`header__logo ${logo}`}
        id="logo"
        src={mainLogo}
        alt="Zara, collection 2019 logo"
      />
      <Menu
        menu={menu}
        menuStatus={menuStatus}
        handleMenuVisibility={handleMenuVisibility}
      />
      <div className="search-user__wrapper">
        <label htmlFor="search" className="search__label">
          Search
          <input
            type="text"
            name="search"
            id="search"
            className="search__input"
          />
        </label>
        <ul className="user__container">
          <li className="user__action">Log in</li>
          <li className="user__action">Help</li>
          <li className="user__action">
            <span className="shop-cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#000"
                  fillRule="nonzero"
                  d="M12 7V6c0-1 1-2 2-2h4c1 0 2 1 2 2v1h7v19H5V7h7zm14 1H6v17h20V8zM13 6v1h6V6c0-.5-.5-1-1-1h-4c-.5 0-1 .5-1 1z"
                ></path>
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  menuStatus: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  handleMenuVisibility: PropTypes.func.isRequired,
};

export default Header;
