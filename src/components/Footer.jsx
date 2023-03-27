import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import logo from '../assets/openai.svg';

const Footer = () => {
  return (
    <Box marginTop={10}>
      <Flex justifyContent="center" alignItems="center">
        <Image src={logo} marginRight="1rem"></Image>
        <Text>Powered by - OpenAI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
