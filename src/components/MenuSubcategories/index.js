import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem';
import './styles.scss';

const MenuSubcategories = props => {
  const { subcategory } = props;

  return (
    <ul className="subcategory__container">
      {subcategory.map(el => (
        <li key={el.title.name}>
          <a href={el.title.url} target="_blank" rel="noopener noreferrer">
            <h3 className="subcategory__title">{el.title.name}</h3>
          </a>
          <MenuItem items={el.items} />
        </li>
      ))}
    </ul>
  );
};

MenuSubcategories.propTypes = {
  subcategory: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MenuSubcategories;
