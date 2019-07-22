import React from 'react';
import data from '../../assets/data.json';
import Newsletter from '../Newsletter';
import SocialNetworks from '../SocialNetworks';
import Utilities from '../Utilities';
import './styles.scss';

const Footer = () => {
  const { copy } = data;
  const { country, language, rights } = copy;

  return (
    <footer className="footer__container">
      <Newsletter />
      <SocialNetworks />
      <Utilities />
      <section className="country-info__container">
        <ul className="country-info__list">
          <li className="country-info__item">{country}</li>
          <li className="country-info__item">{language}</li>
        </ul>
        <small className="country-info__copy">&copy; {rights}</small>
      </section>
    </footer>
  );
};

export default Footer;
