import React from 'react';
import MenuItem from '../MenuItem';
import './styles.scss';

const MenuSubcategories = () => {
  return (
    <div>
      <ul className="subcategory__container">
        <li>
          <MenuItem />
        </li>
      </ul>
    </div>
  );
};

export default MenuSubcategories;
