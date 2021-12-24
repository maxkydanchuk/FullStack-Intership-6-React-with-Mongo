import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const BottomButtons = () => {
    
    return (
        <ButtonGroup size='sm' isAttached variant='outline'>
  <Button mr='-px'>Save</Button>
  <IconButton aria-label='Add to friends'/>
    </ButtonGroup>
    )
}

export default BottomButtons;