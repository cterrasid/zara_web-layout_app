import React from 'react';
// import MenuCategories from '../MenuCategories';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer__container">
      <section className="newsletter__container">
        <h2 className="newsletter__title">Join our newsletter</h2>
        <label htmlFor="newsletter">
          <input
            type="email"
            name="newsletter"
            id="newsletter"
            placeholder="Enter your email address here"
          />
        </label>
      </section>
      <section className="network__container">
        <ul className="network__list">
          <li className="network__social">Instagram</li>
          <li className="network__social">Facebook</li>
          <li className="network__social">Twitter</li>
          <li className="network__social">Pinterest</li>
          <li className="network__social">Youtube</li>
        </ul>
      </section>
      <section className="utilities__container">
        <ul className="utilities__section">
          <h2 className="utilities__section-title">Help</h2>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Shop at zara.com
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Product
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Gift card
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Gift receipt
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Payment
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Shipping
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Exchanges and returns
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Shops and company
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              My account
            </a>
          </li>
        </ul>
        <ul className="utilities__section">
          <h2 className="utilities__section-title">Follow us</h2>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Newsletter
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Pinterest
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Youtube
            </a>
          </li>
        </ul>
        <ul className="utilities__section">
          <h2 className="utilities__section-title">Company</h2>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              About us
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Offices
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Stores
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Work with us
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Gender pay gap report
            </a>
          </li>
        </ul>
        <ul className="utilities__section">
          <h2 className="utilities__section-title">Policies</h2>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Privacy policy
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Purchase conditions
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              Gift card conditions
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              UK act on modern slavery
            </a>
          </li>
          <li>
            <a href="link" target="_blank" rel="noopener noreferrer">
              UK tax strategy and approach
            </a>
          </li>
        </ul>
      </section>
      <section className="country-info__container">
        <ul className="country-info__list">
          <li className="country-info__item">United Kingdom</li>
          <li className="country-info__item">English</li>
        </ul>
        <small className="country-info__copy">&copy; All rights reserved</small>
      </section>
    </footer>
  );
};

export default Footer;
