import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import HomeButton from "./home-button";
import CreateButton from "./create-button";

const HeaderButtons = () => {

    return (
        <Flex
        justify='space-around'
        align='center'
        >
        <NavLink to='/' exact='true'>
       <HomeButton/>
       </NavLink>
       {/*<NavLink to='/' exact='true'>*/}
           <CreateButton/>
       {/*</NavLink>*/}
       </Flex>
  
        
    )
}

export default HeaderButtons;