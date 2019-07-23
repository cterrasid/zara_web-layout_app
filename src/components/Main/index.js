import React from 'react';
import PropTypes from 'prop-types';
import image from '../../assets/images.json';
import Chasing from '../../images/textchasing.svg';
import Spring from '../../images/textspring.svg';
import Look01 from '../../images/look1-look1.st.jpg';
import Look02 from '../../images/look2-look2.st.jpg';
import imageLook02 from '../../images/chasingimg1.st.jpg';
import './styles.scss';

const Main = props => {
  const { visibilityClass } = props;
  const { images } = image;
  const { logo, sublogo, looks, data } = images;

  return (
    <main className="main__container">
      <section className="main__wrapper">
        <div className={`logo-wrapper ${visibilityClass}`}>
          <img className="logo__chasing" src={Chasing} alt={logo.alt}></img>
          <img className="logo__spring" src={Spring} alt={sublogo.alt}></img>
        </div>
        <div className="look-one__wrapper">
          <img
            className="look-one__image"
            src={Look01}
            alt={looks.look_one}
          ></img>
          <p className="look-one__description">
            {`${looks.look_one}. `}
            <strong>{`${data.serie}. `}</strong>
            {`${data.name}.`}
          </p>
        </div>
      </section>
      <section className="look-two__container">
        <div className="look-two__wrapper">
          <img
            className="look-two__image-one"
            src={Look02}
            alt={looks.look_two}
          ></img>
          <p className="look-one__description">
            {`${looks.look_two}. `}
            <strong>{`${data.serie}. `}</strong>
            {`${data.name}.`}
          </p>
        </div>
        <img
          className="look-two__image-two"
          src={imageLook02}
          alt={looks.look_two}
        ></img>
      </section>
    </main>
  );
};

Main.propTypes = {
  visibilityClass: PropTypes.string.isRequired,
};

export default Main;
