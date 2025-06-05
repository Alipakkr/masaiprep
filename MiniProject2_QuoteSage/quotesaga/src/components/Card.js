import React from 'react';
import './Card.css';

const Card = ({ quote, author, fontSize, theme, liked, onLikeToggle  }) => {
  return (
    <div className={`card ${theme}`}>
      <div className="content" style={{ fontSize: `${fontSize}px` }}>
        "{quote}"
      </div>
      <div className="author">- {author}</div>
       <button
          onClick={onLikeToggle}
          label={liked ? "Unlike" : "Like"}
        />
    </div>
  );
};

export default Card;