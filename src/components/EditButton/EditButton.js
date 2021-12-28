import React from "react";
import { Button } from "@chakra-ui/react";
import { useParams, useMatch, Link } from "react-router-dom";

const EditButton = ({onOpen}) => {

    return (
         <Button  colorScheme='teal' variant='link' flex="1" onClick={onOpen}>
        Edit
      </Button>
    )
}

export default EditButton;