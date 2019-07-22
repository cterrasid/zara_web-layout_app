import React from 'react';
import './styles.scss';

const UtilitiesList = props => {
  const { items } = props;

  return (
    <ul className="utilities__section">
      {items.map(item => (
        <li key={item.name}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default UtilitiesList;
