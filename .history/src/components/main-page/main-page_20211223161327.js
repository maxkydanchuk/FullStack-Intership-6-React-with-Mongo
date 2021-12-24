import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import {ChakraProvider, Box, Flex, Button, ButtonGroup } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <ChakraProvider>
      <Flex 
      align={'center'}
      justify={'center'}
      direction={"column"}>
            <Box> Welcome to Star Wars databse</Box>
            <ButtonGroup>
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
            </ButtonGroup>
      </Flex>
    </ChakraProvider>
  );
};

export default MainPage;


