import React from "react";
import { Button, IconButton, ButtonGroup } from "@chakra-ui/react";

const BottomButtons = () => {
  return (
    <ButtonGroup size="sm" isAttached variant="outline">
      <IconButton aria-label="Add to friends" />
    </ButtonGroup>
  );
};

export default BottomButtons;
