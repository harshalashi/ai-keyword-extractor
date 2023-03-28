import React from 'react';
import { Box, Image, Text, Flex, Divider } from '@chakra-ui/react';
import logo from '../assets/openai.svg';

const Footer = () => {
  return (
    <Box marginTop={10}>
      <Flex justifyContent="center" alignItems="center">
        <Image src={logo} marginRight="1rem"></Image>
        <Text>Powered by - OpenAI</Text>
      </Flex>

      <Text
        textAlign="center"
        fontSize={18}
        fontWeight={500}
        marginTop={15}
        ml={15}
      >
        Made By Harsh Alashi
      </Text>
    </Box>
  );
};

export default Footer;
