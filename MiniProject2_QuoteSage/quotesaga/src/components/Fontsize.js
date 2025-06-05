import React from 'react';
import './FontSize.css';

const FontSize  = ({ fontSize, setFontSize, theme }) => {
  return (
    <div className={`font-size ${theme}`}>
      <label htmlFor="font-size">Font Size:</label>
      <select 
        id="font-size" 
        value={fontSize} 
        onChange={(e) => setFontSize(Number(e.target.value))}
      >
        <option value="16">Small</option>
        <option value="18">Medium</option>
        <option value="20">Large</option>
      </select>
    </div>
  );
};

export default FontSize ;