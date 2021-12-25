import React from "react";
import {
  NavLink,
} from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";


const MainPage = () => {
  return (
      <Flex align={"center"} justify={"center"} direction={"column"}>
        <Box> Welcome to Star Wars databse</Box>
        <Box boxSize="s ">
          <Image
            src="https://cdn.images.express.co.uk/img/dynamic/36/590x/Han-Solo-and-Chewie-633918.jpg"
            alt="Han-Solo-Chewbacca"
            mt="5"
          />
        </Box>
        <ButtonGroup variant="outline" spacing="6" mt="5">
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
          <NavLink to="/starships" exact="true">
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="green.500"
          >
            Starships
          </Button>
          </NavLink>
        </ButtonGroup>
      </Flex>
  );
};

export default MainPage;
