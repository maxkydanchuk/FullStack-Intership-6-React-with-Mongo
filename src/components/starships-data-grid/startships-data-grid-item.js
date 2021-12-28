import React from "react";
import { Box, Button } from "@chakra-ui/react";
import EditButton from "../EditButton/EditButton";

const StarshipsPageItem = ({ _id, starshipClass, MGLT, hyperdriveRating, pilots, dispatchDeleteStaship,isOpen, onOpen, onClose}) => {
  return (
    <>
      <Box className="table__row_class" flex="2" pt="8" pb="8" textAlign={"center"}>
        {starshipClass}
      </Box>
      <Box className="table__row_mglt" flex="2" pt="8" pb="8" textAlign={"center"}>
        {MGLT}
      </Box>
      <Box className="table__row_hyperdriver" flex="2" pt="8" pb="8" textAlign={"center"}>
        {hyperdriveRating}
      </Box>
      <Box className="table__row_pilots" flex="2" pt="8" pb="8" textAlign={"center"}>
      {pilots}
      </Box>
      <EditButton onOpen={onOpen}/>
      <Button  colorScheme='teal' variant='link' flex="1"  onClick={ () => dispatchDeleteStaship(_id)}>
    Delete
  </Button>
    </>
  );
};

export default StarshipsPageItem;
