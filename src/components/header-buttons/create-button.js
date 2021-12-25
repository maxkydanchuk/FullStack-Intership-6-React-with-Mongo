import React from "react";
import { Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import useModal from "../../hooks/useModal";
import CreateModal from "../create-modal";

const CreateButton = () => {
    const location = useLocation()
    const pathname = location.pathname;

    const {isShowing, toggle} = useModal();


    function createButtonLabel() {
        if(pathname === '/people') {
            return 'Create new person'
        }
        if(pathname === '/starships') {
            return 'Create new starship'
        }
    }

    return (
        <Button colorScheme='teal' variant='link' onClick={toggle}>
            <CreateModal
                isShowing={isShowing}
                hide={toggle}
            />
        {createButtonLabel()}
      </Button>
    )
}

export default CreateButton;