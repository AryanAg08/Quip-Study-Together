import React from 'react';

const Card = ({ position, children }) => {
  const cardStyles = {
    padding: '16px',
    position: 'relative',
    ...position,  // Spread the position props to apply styles
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #000',
  };

  return (
    <div style={cardStyles}>
      {children}
    </div>
  );
};

export default Card;
