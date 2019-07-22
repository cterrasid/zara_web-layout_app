import React from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../MenuButton';
import MenuNavigation from '../MenuNavigation';
import './styles.scss';

const Menu = props => {
  const { menu, menuStatus, handleMenuVisibility } = props;

  return (
    <nav className="menu__container">
      <MenuButton
        menuStatus={menuStatus}
        handleMenuVisibility={handleMenuVisibility}
      />
      <MenuNavigation
        category={menu.category}
        subcategory={menu.subcategory}
        menuStatus={menuStatus}
        handleMenuVisibility={handleMenuVisibility}
      />
    </nav>
  );
};

Menu.propTypes = {
  menu: PropTypes.objectOf(PropTypes.string).isRequired,
  menuStatus: PropTypes.string.isRequired,
  handleMenuVisibility: PropTypes.func.isRequired,
};

export default Menu;
