import React from "react";
import { useDispatch } from "react-redux";
import { Button, IconButton, ButtonGroup } from "@chakra-ui/react";
import { createPages } from '../../utils/pageCreator';
import { pageSize } from '../../configs/config'

const BottomButtons = ({currentPage, totalPageCount, setCurrentPage}) => {

    console.log(setCurrentPage)

    const dispatch = useDispatch();

    const pages = [];
    const pageCount = Math.ceil(totalPageCount / 5);
    createPages(pages, pageCount, currentPage);
    
    const elements = pages.map((item, index) => {
       return <IconButton 
       key={index} 
       aria-label="Add to friends"
       onClick={dispatch(setCurrentPage(item))}
       >

       </IconButton>
    })
    
  return (
    <ButtonGroup size="sm" isAttached variant="outline">
        {elements} 
    </ButtonGroup>
  );
};

export default BottomButtons;
