import React from 'react';
import './button.css';

const Button = ({ onClick, theme, children }) => {
  return (
    <button className={`button ${theme}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;