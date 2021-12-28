import React from "react";
import {Box} from "@chakra-ui/react";
import SearchPanel from "../search-panel";
import HeaderButtons from "../header-buttons";

const PageNavbar = ({onSearchChange, inputValue, onOpen }) => {

    return (
        <Box>
            <HeaderButtons
                onOpen={onOpen}
            />
            <SearchPanel onSearchChange={onSearchChange} inputValue={inputValue}/>
        </Box>
    )
}
export default PageNavbar;
