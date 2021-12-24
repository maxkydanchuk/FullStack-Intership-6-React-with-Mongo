import React from "react";
import { useDispatch } from "react-redux";
import { Button, Flex } from "@chakra-ui/react";
import { createPages } from "../../utils/pageCreator";
import { pageSize } from "../../configs/config";
import { setCurrentPage } from "../../store/actions";
import './main.css';

const BottomButtons = ({ currentPage, totalPageCount, setCurrentPage }) => {
  const dispatch = useDispatch();

  const pages = [];
  const pageCount = Math.ceil(totalPageCount / pageSize);
  createPages(pages, pageCount, currentPage);
  const elements = pages.map((item, index) => {
    return (
      // <Button
      //   colorScheme="teal"
      //   variant="link"
      //   key={index}
      //   display={"block"}
      //   outline={"none"}
      //   onClick={() => dispatch(setCurrentPage(item))}
      // >
      //   {item}
      // </Button>
 <span
        key={index}
        className={currentPage == item ? "current-page" : "page"}
        onClick={() => dispatch(setCurrentPage(item))}>{item}</span>
    );
  });

  return (

    <Flex align={"center"} justify={"center"} mt={'6'}>
      <Button
        colorScheme="teal"
        variant="link"
        key={new Date()}
        display={"block"}
        onClick={() => dispatch(setCurrentPage(0))}
      >
        &#8606;
      </Button>
      <div className="pages">
      {elements}
      </div>
      <Button
        colorScheme="teal"
        outline={'none'}
        variant="link"
        key={123232}
        display={"block"}
        
        onClick={() => dispatch(setCurrentPage(pageCount -1))}
      >
        &#8608;
      </Button>
    </Flex>
  );
};

export default BottomButtons;
