import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Flex,
  Button,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";

const MainPage = () => {
  return (
    <ChakraProvider>
      <Flex align={"center"} justify={"center"} direction={"column"}>
        <Box> Welcome to Star Wars databse</Box>
        <Box boxSize="sm">
          <Image
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.teahub.io%2Fviewwp%2FwJwxbx_han-solo-chewbacca-and-the-millennium-falcon-return%2F&psig=AOvVaw22rNTVhjGO6S3qt7SLFs6c&ust=1640355618315000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDe3IGP-vQCFQAAAAAdAAAAABAf"
            alt="Han-Solo-Chewbacca"
          />
        </Box>
        <ButtonGroup variant="outline" spacing="6">
          <NavLink to="/people" exact="true">
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
