import { Box, Text, Link } from '@chakra-ui/layout';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box mt="">
      <Text m="" fontSize="">
        <Link
          
          isExternal
         
        >
        
          <FaExternalLinkAlt
            
          />
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
