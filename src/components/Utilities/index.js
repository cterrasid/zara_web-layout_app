import React from 'react';
import data from '../../assets/utilities.json';
import UtilitiesList from '../UtilitiesList';
import './styles.scss';

const Utilities = () => {
  const { utilities } = data;

  return (
    <ul className="utilities__container">
      {utilities.map(utility => (
        <li className="utilities__container-list">
          <h2 className="utilities__title">{utility.title}</h2>
          <UtilitiesList items={utility.items} />
        </li>
      ))}
    </ul>
  );
};

export default Utilities;
