import React from 'react';
import data from '../../assets/networks.json';
import './styles.scss';

const SocialNetworks = () => {
  const { networks } = data;

  return (
    <section className="network__container">
      <ul className="network__list">
        {networks.map(network => (
          <li key={network.name}>
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              {network.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialNetworks;
