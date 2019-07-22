import React from 'react';
import './styles.scss';

const Newsletter = () => {
  return (
    <section className="newsletter__container">
      <h2 className="newsletter__title">Join our newsletter</h2>
      <label htmlFor="newsletter">
        <input
          type="email"
          className="newsletter__input"
          name="newsletter"
          id="newsletter"
          placeholder="Enter your email address here"
        />
      </label>
    </section>
  );
};

export default Newsletter;
