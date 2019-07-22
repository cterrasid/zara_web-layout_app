import React from 'react';
import './styles.scss';

const MenuCategories = props => {
  const { items } = props;

  return (
    <ul className="menu__category">
      {items.map(item => (
        <li key={item.name}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <span className="menu__subcategory-title">{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuCategories;
