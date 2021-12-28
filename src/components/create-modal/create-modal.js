import { React, useRef, useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { addStarshipThunk, updateStarshipThunk } from "../../redux/starships/starshipsActions";
import { useDispatch } from "react-redux";

const CreateModal = ({ isOpen, onOpen, onClose, starship = {} }) => {

  // starship = {
  //   id: new Date(),
  //   starshipClass: '1',
  //   MGLT: '2',
  //   pilots: '3',
  //   hyperdriveRating: '4'
  // }

  const [pilots, setPilots] = useState(starship.pilots || "");
  const [MGLT, setMGLT] = useState(starship.MGLT || "");
  const [starshipClass, setStarshipClass] = useState(
    starship.starshipClass || ""
  );
  const [hyperdriveRating, setHyperdriveRating] = useState(
    starship.hyperdriveRating || ""
  );

  const dispatch = useDispatch();

  const initialRef = useRef();
  const finalRef = useRef();

  const addNewItem = (item) => dispatch(addStarshipThunk(item));
  const updateItem = (item) => dispatch(updateStarshipThunk(item))

  function resetForm() {
    setPilots('');
    setMGLT('');
    setStarshipClass('');
    setHyperdriveRating('')
  }

  const submitNewItem = async (e) => {
    e.preventDefault();

    if(starship.id) {
      updateItem({
        fields: {
          pilots,
          MGLT,
          starship_class: starshipClass,
          hyperdrive_rating: hyperdriveRating,
        }
      })
    } else {
      addNewItem({
        fields: {
          pilots,
          MGLT,
          starship_class: starshipClass,
          hyperdrive_rating: hyperdriveRating,
        }
      });
    }
    onClose();

    resetForm();
  };

  return (
    <>
      <Button onClick={onOpen}>Create starship</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new starship</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Starship class</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Starship class"
                value={starshipClass}
                onChange={(e) => setStarshipClass(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>MGLT</FormLabel>
              <Input
                placeholder="MGLT"
                value={MGLT}
                onChange={(e) => setMGLT(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Hyperdrive rating</FormLabel>
              <Input
                placeholder="Hyperdrive rating"
                type="number"
                value={hyperdriveRating}
                onChange={(e) => setHyperdriveRating(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Pilots</FormLabel>
              <Input
                placeholder="Pilots"
                value={pilots}
                onChange={(e) => setPilots(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={submitNewItem}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateModal;
