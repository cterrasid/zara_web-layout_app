import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const MenuButton = props => {
  const { handleMenuVisibility } = props;

  return (
    <div className="menu-button__container">
      <button
        type="button"
        className="menu-button__element"
        onClick={handleMenuVisibility}
        onMouseEnter={handleMenuVisibility}
      >
        <svg height="18" width="18" strokeWidth="5%">
          <line x1="0" y1="16.666666%" x2="100%" y2="16.666666%" />
          <line x1="0" y1="50%" x2="100%" y2="50%" />
          <line x1="0" y1="83.333333%" x2="100%" y2="83.333333%" />
        </svg>
      </button>
    </div>
  );
};

MenuButton.propTypes = {
  handleMenuVisibility: PropTypes.func.isRequired,
};

export default MenuButton;
