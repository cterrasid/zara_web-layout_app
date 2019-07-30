import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Image = props => {
  const { url, name, number } = props;

  return <img className={`image__${number}`} src={url} alt={name}></img>;
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Image;
