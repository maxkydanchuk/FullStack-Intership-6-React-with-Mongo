import React from "react";
import { Box } from "@chakra-ui/react";

const StarshipsPageItem = ({ starshipClass, MGLT, hyperdriveRating, pilots }) => {
  return (
    <>
      <Box className="table__row_class" flex="2" pt="8" pb="8">
        HELLO
      </Box>
      <Box className="table__row_mglt" flex="2" pt="8" pb="8">
        {MGLT}
      </Box>
      <Box className="table__row_hyperdriver" flex="2" pt="8" pb="8">
        {hyperdriveRating}
      </Box>
      <Box className="table__row_pilots" flex="2" pt="8" pb="8">
      {starshipClass}
      </Box>
      <Box className="table__row_fullname" flex="2" pt="8" pb="8">
        {pilots}
      </Box>
    </>
  );
};

export default StarshipsPageItem;
