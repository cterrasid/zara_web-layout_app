import React from 'react';
import PropTypes from 'prop-types';
import { Controller, Scene } from 'react-scrollmagic';
import image from '../../assets/images.json';
import './styles.scss';

const Main = props => {
  const { visibilityClass, hideLeft } = props;
  const { images } = image;
  const { logo, sublogo, looks, data } = images;

  return (
    <main className="main__container">
      <section className="section-one__container" id="sticky">
        <div className={`logo-wrapper ${visibilityClass} appear`}>
          <img className="logo__chasing" src={logo.url} alt={logo.alt}></img>
          <img
            className="logo__spring"
            src={sublogo.url}
            alt={sublogo.alt}
          ></img>
        </div>
        <div className="look-one__wrapper">
          <img
            className="look-one__image"
            src={looks.look_one.url}
            alt={looks.look_one.name}
          ></img>
          <p className="look__description">
            {`${looks.look_one.name}. `}
            <strong>{`${data.serie}. `}</strong>
            {`${data.name}.`}
          </p>
        </div>
      </section>
      <Controller>
      <Scene triggerHook="onLeave" duration={1000} pin>
          <section className={`section-two__container ${hideLeft}`}>
            <div className="look-two__wrapper">
              <img
                className="look-two__image-one"
                src={looks.look_two.url}
                alt={looks.look_two.name}
              ></img>
              <p className="look__description">
                {`${looks.look_two.name}. `}
                <strong>{`${data.serie}. `}</strong>
                {`${data.name}.`}
              </p>
            </div>
            <div className="look-two__video-wrapper">
              <video className="look-two__video" loop autoPlay>
                <source src={looks.look_two.video} type="video/mp4" />
                <track default kind="captions" />
              </video>
              <img
                className="look-two__image-two"
                src={looks.look_two.asset}
                alt={looks.look_two.name}
              ></img>
            </div>
          </section>
        </Scene>
      </Controller>
      <section className="section-three__container">
        <div className="look-three__wrapper">
          <img
            className="look-three__image-one"
            src={looks.look_three.url}
            alt={looks.look_three.name}
          ></img>
          <p className="look__description">
            {`${looks.look_three.name}. `}
            <strong>{`${data.serie}. `}</strong>
            {`${data.name}.`}
          </p>
        </div>
        <img
          className="look-three__image-two"
          src={looks.look_three.asset}
          alt={looks.look_three.name}
        ></img>
      </section>
      <section className="section-four__container">
        <div className="look-four__wrapper">
          <img
            className="look-four__image-one"
            src={looks.look_four.url}
            alt={looks.look_four.name}
          ></img>
          <p className="look__description" id="vertical">
            {`${looks.look_four.name}. `}
            <strong>{`${data.serie}. `}</strong>
            {`${data.name}.`}
          </p>
        </div>
      </section>
      <section className="section-five__container">
        <div className="look-five__wrapper">
          <img
            className="look-five__image-one"
            src={looks.look_five.url}
            alt={looks.look_five.name}
          ></img>
          <p className="look__description">
            {`${looks.look_five.name}. `}
            <strong>{`${data.serie}. `}</strong>
            {`${data.name}.`}
          </p>
        </div>
        <img
          className="look-five__image-two"
          src={looks.look_five.asset_one}
          alt={looks.look_five.name}
        ></img>
        <img
          className="look-five__image-three"
          src={looks.look_five.asset_two}
          alt={looks.look_five.name}
        ></img>
      </section>
      <section className="section-six__container">
        <div className="look-six__wrapper">
          <video className="look-six__video" loop autoPlay>
            <source src={looks.look_six.url} type="video/mp4" />
            <track default kind="captions" />
          </video>
          <p className="look__description">
            {`${looks.look_six.name}. `}
            <strong>{`${data.serie}. `}</strong>
            {`${data.name}.`}
          </p>
        </div>
        <img
          className="look-six__image-one"
          src={looks.look_six.asset}
          alt={looks.look_six.name}
        ></img>
      </section>
      <section className="section-seven__container">
        <div className="look-seven__wrapper">
          <img
            className="look-seven__image-one"
            src={looks.look_seven.url}
            alt={looks.look_seven.name}
          ></img>
          <p className="look__description">
            {`${looks.look_seven.name}. `}
            <strong>{`${data.serie}. `}</strong>
            {`${data.name}.`}
          </p>
        </div>
        <img
          className="look-seven__image-two"
          src={looks.look_seven.asset}
          alt={looks.look_seven.name}
        ></img>
      </section>
      <section className="section-eight__container">
        <div className="look-eight__wrapper">
          <img
            className="look-eight__image-one"
            src={looks.look_eight.url}
            alt={looks.look_eight.name}
          ></img>
          <p className="look__description" id="vertical">
            {`${looks.look_eight.name}. `}
            <strong>{`${data.serie}. `}</strong>
            {`${data.name}.`}
          </p>
        </div>
      </section>
      <section className="section-nine__container">
        <div className="look-nine__wrapper">
          <img
            className="look-nine__image-one"
            src={looks.look_nine.url}
            alt={looks.look_nine.name}
          ></img>
          <p className="look__description" id="vertical">
            {`${looks.look_nine.name}. `}
            <strong>{`${data.serie}. `}</strong>
            {`${data.name}.`}
          </p>
        </div>
        <div className="look-nine__video-wrapper">
          <video className="look-nine__video" loop autoPlay>
            <source src={looks.look_nine.video} type="video/mp4" />
            <track default kind="captions" />
          </video>
        </div>
      </section>
      <section className="section-ten__container">
        <div className="look-ten__wrapper">
          <img
            className="look-ten__image-one"
            src={looks.look_ten.url}
            alt={looks.look_ten.name}
          ></img>
          <p className="look__description" id="vertical">
            {`${looks.look_ten.name}. `}
            <strong>{`${data.serie}. `}</strong>
            {`${data.name}.`}
          </p>
        </div>
      </section>
      <section className="section-eleven__container">
        <div className="look-eleven__wrapper">
          <img
            className="look-eleven__image-one"
            src={looks.look_eleven.url}
            alt={looks.look_eleven.name}
          ></img>
          <p className="look__description">
            {`${looks.look_eleven.name}. `}
            <strong>{`${data.serie}. `}</strong>
            {`${data.name}.`}
          </p>
        </div>
        <img
          className="look-eleven__image-two"
          src={looks.look_eleven.asset}
          alt={looks.look_eleven.name}
        ></img>
        <div className="logo-wrapper" id="vertical-logo">
          <img className="logo__chasing" src={logo.url} alt={logo.alt} />
          <img
            className="logo__spring"
            src={sublogo.url}
            alt={sublogo.alt}
          ></img>
        </div>
      </section>
    </main>
  );
};

Main.propTypes = {
  visibilityClass: PropTypes.string.isRequired,
  hideLeft: PropTypes.string.isRequired,
};

export default Main;
