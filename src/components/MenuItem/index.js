import React from 'react';
import './styles.scss';

const MenuItem = props => {
  const { items } = props;

  return (
    <ul>
      {items.map(item => (
        <li key={item.name}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <h4 className="item__title">{item.name}</h4>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuItem;
