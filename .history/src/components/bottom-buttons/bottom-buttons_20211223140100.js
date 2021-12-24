import React from "react";
import { useDispatch } from "react-redux";
import { Button, Flex } from "@chakra-ui/react";
import { createPages } from "../../utils/pageCreator";
import { pageSize } from "../../configs/config";
import { setCurrentPage } from "../../store/actions";

const BottomButtons = ({ currentPage, totalPageCount }) => {
  const dispatch = useDispatch();

  const pages = [];
  const pageCount = Math.ceil(totalPageCount / pageSize);
  console.log(pageCount)
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
    <Flex align={"center"} justify={"center"} mt={'6'}>
      <Button
        colorScheme="teal"
        variant="link"
        key={new Date()}
        display={"block"}
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
        onClick={() => dispatch(setCurrentPage(pageCount))}
      >
        &#8608;
      </Button>
    </Flex>
  );
};

export default BottomButtons;
