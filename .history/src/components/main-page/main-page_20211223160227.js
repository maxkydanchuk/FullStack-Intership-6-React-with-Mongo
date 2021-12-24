import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ChakraProvider, Box, Flex, Button } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <ChakraProvider>
      <Box> Welcome to Star Wars databse</Box>
      <Flex>
        <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="green.500"
        >
          People
        </Button>
        <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="green.500"
        >
          Starships
        </Button>
      </Flex>
    </ChakraProvider>
  );
};

export default MainPage;

