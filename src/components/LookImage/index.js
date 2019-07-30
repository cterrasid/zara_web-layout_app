import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Look = props => {
  const { look, url, serie, name, number, orientation } = props;

  return (
    <div className={`look-${number}__wrapper`}>
      <img className={`look-${number}__image`} src={url} alt={look}></img>
      <p className="look__description" id={orientation}>
        {`${look}. `}
        <strong>{`${serie}. `}</strong>
        {`${name}.`}
      </p>
    </div>
  );
};

Look.propTypes = {
  look: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  serie: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
};

export default Look;
