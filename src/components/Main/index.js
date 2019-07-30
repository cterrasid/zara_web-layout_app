import React from 'react';
import PropTypes from 'prop-types';
import { Controller, Scene } from 'react-scrollmagic';
import LookImage from '../LookImage';
import LookVideo from '../LookVideo';
import Image from '../Image';
import Video from '../Video';
import image from '../../assets/images.json';
import './styles.scss';

const Main = props => {
  const { visibilityClass } = props;
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
        <LookImage
          number="one"
          look={looks.look_one.name}
          url={looks.look_one.url}
          serie={data.serie}
          name={data.name}
          orientation="horizontal"
        />
      </section>
      <Controller>
        <Scene triggerHook="onLeave" duration={1000} pin>
          <section className="section-two__container">
            <LookImage
              number="two"
              look={looks.look_two.name}
              url={looks.look_two.url}
              serie={data.serie}
              name={data.name}
              orientation="horizontal"
            />
            <div className="section-two__wrapper">
              <Video number="one" url={looks.look_two.video} />
              <Image
                number="one"
                url={looks.look_two.asset}
                name={looks.look_two.name}
              />
            </div>
          </section>
        </Scene>
      </Controller>
      <section className="section-three__container">
        <LookImage
          number="three"
          look={looks.look_three.name}
          url={looks.look_three.url}
          serie={data.serie}
          name={data.name}
          orientation="horizontal"
        />
        <Image
          number="two"
          url={looks.look_three.asset}
          name={looks.look_three.name}
        />
      </section>
      <section className="section-four__container">
        <LookImage
          number="four"
          look={looks.look_four.name}
          url={looks.look_four.url}
          serie={data.serie}
          name={data.name}
          orientation="vertical"
        />
      </section>
      <section className="section-five__container">
        <LookImage
          number="five"
          look={looks.look_five.name}
          url={looks.look_five.url}
          serie={data.serie}
          name={data.name}
          orientation="horizontal"
        />
        <Image
          number="three"
          url={looks.look_five.asset_one}
          name={looks.look_five.name}
        />
        {/* ***Cambiar a Look */}
        <Image
          number="four"
          url={looks.look_five.asset_two}
          name={looks.look_five.name}
        />
        {/* ***Cambiar a Look */}
      </section>
      <section className="section-six__container">
        <LookVideo
          number="six"
          look={looks.look_six.name}
          url={looks.look_six.url}
          serie={data.serie}
          name={data.name}
        />
        <Image
          number="five"
          url={looks.look_six.asset}
          name={looks.look_six.name}
        />
      </section>
      <section className="section-seven__container">
        <LookImage
          number="seven"
          look={looks.look_seven.name}
          url={looks.look_seven.url}
          serie={data.serie}
          name={data.name}
          orientation="horizontal"
        />
        <Image
          number="six"
          url={looks.look_seven.asset}
          name={looks.look_seven.name}
        />
      </section>
      <section className="section-eight__container">
        <LookImage
          number="eight"
          look={looks.look_eight.name}
          url={looks.look_eight.url}
          serie={data.serie}
          name={data.name}
          orientation="vertical"
        />
      </section>
      <section className="section-nine__container">
        <LookImage
          number="nine"
          look={looks.look_nine.name}
          url={looks.look_nine.url}
          serie={data.serie}
          name={data.name}
          orientation="vertical"
        />
        <div className="look-nine__video-wrapper">
          <Video number="two" url={looks.look_nine.video} />
        </div>
      </section>
      <section className="section-ten__container">
        <LookImage
          number="ten"
          look={looks.look_ten.name}
          url={looks.look_ten.url}
          serie={data.serie}
          name={data.name}
          orientation="vertical"
        />
      </section>
      <section className="section-eleven__container">
        <LookImage
          number="eleven"
          look={looks.look_eleven.name}
          url={looks.look_eleven.url}
          serie={data.serie}
          name={data.name}
          orientation="horizontal"
        />
        <Image
          number="seven"
          url={looks.look_eleven.asset}
          name={looks.look_eleven.name}
        />
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
};

export default Main;
