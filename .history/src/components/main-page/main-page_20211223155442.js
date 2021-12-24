import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <>
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
    </>
  );
};

export default MainPage;


