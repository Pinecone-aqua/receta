import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { CocktailType } from "@/src/types/types";

export default function DeleteRecipe(prop: { recipe: CocktailType; }) {
  const { recipe } = prop;
  const { isOpen, onOpen, onClose } = useDisclosure()

  function deleteOne() {
    console.log("ok");
    
  }

  // console.log("recipe", recipe._id);
  return (
    <>
    <button onClick={onOpen} className="ml-[10px]">Delete</button>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Итгэлтэй байна уу хамаа</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div >
              <h5>Name</h5>
              <p>{recipe.name}</p>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={deleteOne} color="white" backgroundColor="red">Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}