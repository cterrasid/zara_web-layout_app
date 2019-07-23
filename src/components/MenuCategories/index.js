import React from 'react';
import PropTypes from 'prop-types';
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

MenuCategories.propTypes = {
  items: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MenuCategories;
