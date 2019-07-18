import React from 'react';
import Menu from '../Menu';
import './styles.scss';

const Header = () => {
  return (
    <header className="header__container">
      <img
        className="menu__logo"
        id="logo"
        src="../../assets/images/logo-zara-coll19.png"
        alt="Zara, collection 2019 logo"
      />
      <Menu />
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
          <span className="shop-cart">0</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
