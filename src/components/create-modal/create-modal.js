import React, {useEffect} from "react";
import {FormControl, FormLabel, Input, Box, ButtonGroup, Button} from "@chakra-ui/react";
import ReactDOM from "react-dom";



const CreateModal = ({ isShowing, hide }) => {
    
    // useEffect(() => {
    //     const close = (e) => {
    //         if(e.keyCode === 27){
    //             hide()
    //         }
    //     }
    //     window.addEventListener('keydown', close)
    //     return () => window.removeEventListener('keydown', close)
    // },[])

    return (
        isShowing ? ReactDOM.createPortal(
            <Box
                className="modal"
                w="40%"
                position="fixed"
                top="20%"
                backgroundColor="white"
                left="30%"
                border="1px black solid"
                onClick={(e) => e.stopPropagation()}
            >
                <Box
                    className="modal__content"
                    backgroundColor="white"
                >
                    <FormControl isRequired>
                        <FormLabel htmlFor='name'>Name</FormLabel>
                        <Input id='name' placeholder='Name' />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='birth-year'>Birth Year</FormLabel>
                        <Input id='birth_year' placeholder='Birth Year' />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='gender'>gender</FormLabel>
                        <Input id='gender' placeholder='Gender' />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='eye-color'>Eye Color</FormLabel>
                        <Input id='eye_color' placeholder='Eye Color' />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='height'>Height</FormLabel>
                        <Input id='height' placeholder='Height' />
                    </FormControl>
                    <ButtonGroup variant='outline' spacing='6'>
                        <Button colorScheme='blue'>Save</Button>
                        <Button onClick={hide}>Cancel</Button>
                    </ButtonGroup>
                </Box>
            </Box>, document.body
        ) : null
    )
}


export default CreateModal;