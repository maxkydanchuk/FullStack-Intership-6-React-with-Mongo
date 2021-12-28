import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import HomeButton from "./home-button";
import CreateModal from "../create-modal";

const HeaderButtons = ({isOpen, onOpen, onClose}) => {

    return (
        <Flex
        mt="10px"
        justify='space-around'
        align='center'
        >
        <NavLink to='/' exact='true'>
       <HomeButton/>
       </NavLink>
       <CreateModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
       />
       {/*<NavLink to='/' exact='true'>*/}
           {/* <CreateButton/> */}
       {/*</NavLink>*/}
       </Flex>
  
        
    )
}

export default HeaderButtons;