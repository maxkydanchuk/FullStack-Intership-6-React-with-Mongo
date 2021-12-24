import React from "react";
import { Button, IconButton, ButtonGroup } from "@chakra-ui/react";
import { createPages } from '../../utils/pageCreator';
import { pageSize } from '../../configs/config'

const BottomButtons = ({currentPage, totalPageCount}) => {

    const pages = [];
    console.log(totalPageCount)
    const pageCount = Math.ceil(totalPageCount / 5);
    createPages(pages, pageCount, currentPage);
    console.log(pages)

  return (
    <ButtonGroup size="sm" isAttached variant="outline">
      <IconButton aria-label="Add to friends" />
    </ButtonGroup>
  );
};

export default BottomButtons;
