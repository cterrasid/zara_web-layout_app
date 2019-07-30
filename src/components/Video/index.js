import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Video = props => {
  const { url, number } = props;

  return (
    <video className={`video__${number}`} loop autoPlay>
      <source src={url} type="video/mp4" />
      <track default kind="captions" />
    </video>
  );
};

Video.propTypes = {
  url: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Video;
