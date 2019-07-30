import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const LookVideo = props => {
  const { look, url, serie, name, number } = props;

  return (
    <div className={`look-${number}__wrapper`}>
      <video className={`look-${number}__video`} loop autoPlay>
        <source src={url} type="video/mp4" />
        <track default kind="captions" />
      </video>
      <p className="look__description">
        {`${look}. `}
        <strong>{`${serie}. `}</strong>
        {`${name}.`}
      </p>
    </div>
  );
};

LookVideo.propTypes = {
  look: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  serie: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default LookVideo;
