import React from "react";
import { useDispatch } from "react-redux";
import { Button, IconButton, ButtonGroup } from "@chakra-ui/react";
import { createPages } from "../../utils/pageCreator";
import { pageSize } from "../../configs/config";
import { setCurrentPage } from "../../store/actions";

const BottomButtons = ({ currentPage, totalPageCount }) => {
  const dispatch = useDispatch();

  const pages = [];
  const pageCount = Math.ceil(totalPageCount / 5);
  createPages(pages, pageCount, currentPage);

  const elements = pages.map((item, index) => {
    return (
      <Button
        colorScheme="teal"
        variant="link"
        key={index}
        display={'block'}
        margin={[10]}
        outline={'none'}
        onClick={() => dispatch(setCurrentPage(item))}
      >
        {item}
      </Button>
    );
  });

  return (
    <ButtonGroup size="sm" isAttached variant="outline">
      {elements}
    </ButtonGroup>
  );
};

export default BottomButtons;
