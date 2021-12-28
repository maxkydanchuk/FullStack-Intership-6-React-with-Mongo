import React from "react";
import {Box} from "@chakra-ui/react";
import SearchPanel from "../search-panel";
import HeaderButtons from "../header-buttons";

const PageNavbar = ({onSearchChange, inputValue, isOpen, onOpen, onClose}) => {

    return (
        <Box>
            <HeaderButtons
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
            />
            <SearchPanel onSearchChange={onSearchChange} inputValue={inputValue}/>
        </Box>
    )
}

export default PageNavbar;
