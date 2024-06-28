import React from 'react';
import { Box } from '@chakra-ui/react';

const Card = ({ position, children }) => {
  return (
    <Box
      p='16px'
      position='relative'
      {...position} // Spread the position props to apply styles
      borderRadius='20px'
      boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
      border='1px solid #000'
    >
      {children}
    </Box>
  );
};

export default Card;
