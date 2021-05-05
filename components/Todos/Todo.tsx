import React from 'react';

export default ({ id, text, done, todoClicked }) => (
  <li className={`todo ${done ? 'done' : 'not-done'}`} onClick={() => todoClicked(id)} key={id}>
    <span>{text}</span>
  </li>
);