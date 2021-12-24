import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import {ChakraProvider, Box, Flex, Button } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <ChakraProvider>
      <Flex 
      align={'center'}
      justify={'center'}>
             <Box> Welcome to Star Wars databse</Box>
          <NavLink to='/people' exact="true">
          <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="green.500"
        >
          People
        </Button>
          </NavLink>
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


