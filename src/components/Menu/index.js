import React from 'react';
import MenuButton from '../MenuButton';
import MenuNavigation from '../MenuNavigation';
import './styles.scss';

const Menu = () => {
  return (
    <nav className="menu__container">
      <MenuButton />
      <MenuNavigation />
    </nav>
  );
};

export default Menu;
