import React from "react";
import { useDispatch } from "react-redux";
import { Button, Flex } from "@chakra-ui/react";
import { createPages } from "../../utils/pageCreator";
import { pageSize } from "../../configs/config";
import { setCurrentPage } from "../../store/actions";
import './main.less';

const BottomButtons = ({ currentPage, totalPageCount }) => {
  const dispatch = useDispatch();

  const pages = [];
  const pageCount = Math.ceil(totalPageCount / pageSize);
  createPages(pages, pageCount, currentPage);
console.log(currentPage)
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
    <div className="pages">
      {elements}
      </div>
    // <Flex align={"center"} justify={"center"} mt={'6'}>
    //   <Button
    //     colorScheme="teal"
    //     variant="link"
    //     key={new Date()}
    //     display={"block"}
    //     onClick={() => dispatch(setCurrentPage(0))}
    //   >
    //     &#8606;
    //   </Button>
    //   {elements}
    //   <Button
    //     colorScheme="teal"
    //     outline={'none'}
    //     variant="link"
    //     key={123232}
    //     display={"block"}
        
    //     onClick={() => dispatch(setCurrentPage(pageCount -1))}
    //   >
    //     &#8608;
    //   </Button>
    // </Flex>
  );
};

export default BottomButtons;
