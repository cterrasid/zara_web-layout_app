import React from 'react';
import MenuCategories from '../MenuCategories';
import MenuSubcategories from '../MenuSubcategories';
import './styles.scss';

const MenuNavigation = () => {
  return (
    <div className="menu__container">
      <MenuCategories />
      <MenuSubcategories />
    </div>
  );
};

export default MenuNavigation;
