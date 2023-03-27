import React from 'react';
import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/bulb_on.png';
const Header = () => {
  return (
    <>
      <Image src={logo} alt="logo" width={100} marginBottom="1rem" />
      <Heading color="white" marginBottom="1rem">
        AI Keyword Extractor
      </Heading>
      <Text fontSize={25} textAlign="center">
        Paste in your text below ad we'll extract the keywords for you
      </Text>
    </>
  );
};

export default Header;
