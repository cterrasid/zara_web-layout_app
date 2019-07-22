import React from 'react';
import './styles.scss';

const UtilitiesList = props => {
  const { items } = props;

  return (
    <ul className="utilities__list">
      {items.map(item => (
        <li className="utilities__list-element" key={item.name}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default UtilitiesList;
