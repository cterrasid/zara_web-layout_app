import React from 'react';
import PropTypes from 'prop-types';
import MenuCategories from '../MenuCategories';
import MenuSubcategories from '../MenuSubcategories';
import './styles.scss';

const MenuNavigation = props => {
  const { category, subcategory, menuStatus, handleMenuVisibility } = props;

  return (
    <div className={`menu-navigation__content ${menuStatus}`}>
      <MenuCategories
        items={category.items}
        handleMenuVisibility={handleMenuVisibility}
      />
      <MenuSubcategories
        subcategory={subcategory}
        handleMenuVisibility={handleMenuVisibility}
      />
    </div>
  );
};

MenuNavigation.propTypes = {
  category: PropTypes.objectOf(PropTypes.string).isRequired,
  subcategory: PropTypes.objectOf(PropTypes.string).isRequired,
  menuStatus: PropTypes.string.isRequired,
  handleMenuVisibility: PropTypes.func.isRequired,
};

export default MenuNavigation;
