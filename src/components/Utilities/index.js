import React from 'react';
import data from '../../assets/utilities.json';
import UtilitiesList from '../UtilitiesList';
import './styles.scss';

const Utilities = () => {
  const { utilities } = data;

  return (
    <article className="utilities__container">
      {utilities.map(utility => (
        <div>
          <h2 className="utilities__section-title">{utility.title}</h2>
          <UtilitiesList items={utility.items} />
        </div>
      ))}
    </article>
  );
};

export default Utilities;
