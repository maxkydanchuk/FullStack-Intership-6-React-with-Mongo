import React from "react";
import { useDispatch } from "react-redux";
import { Button, Flex, ButtonGroup } from "@chakra-ui/react";
import { createPages } from "../../utils/pageCreator";
import { pageSize } from "../../configs/config";
import { setCurrentPage } from "../../store/actions";

const BottomButtons = ({ currentPage, totalPageCount }) => {
  const dispatch = useDispatch();

  const pages = [];
  console.log(pages.length)
  const pageCount = Math.ceil(totalPageCount / 5);
  createPages(pages, pageCount, currentPage);

  const elements = pages.map((item, index) => {
    return (
      <Button
        colorScheme="teal"
        variant="link"
        key={index}
        display={"block"}
        outline={"none"}
        onClick={() => dispatch(setCurrentPage(item))}
      >
        {item}
      </Button>
    );
  });

  return (
    <Flex align={"center"} justify={"center"}>
      <Button
        colorScheme="teal"
        variant="link"
        key={new Date()}
        display={"block"}
        outline={"none"}
        onClick={() => dispatch(setCurrentPage(1))}
      >
        &#8606;
      </Button>
      {elements}
      <Button
        colorScheme="teal"
        variant="link"
        key={123232}
        display={"block"}
        outline={"none"}
        onClick={() => dispatch(setCurrentPage(pages.length))}
      >
        &#8608;
      </Button>
    </Flex>
  );
};

export default BottomButtons;
