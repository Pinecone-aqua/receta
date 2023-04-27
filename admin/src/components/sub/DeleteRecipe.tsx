import React from "react";
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
} from "@chakra-ui/react";
import { CocktailType } from "@/src/types/types";
import axios from "axios";

export default function DeleteRecipe(props: {
  recipe: CocktailType;
  showDel: boolean;
}) {
  const { isOpen, onClose } = useDisclosure();
  const { recipe, showDel } = props;
  // console.log("myres", recipe);

  function deleteOne() {
    axios
      .delete(`http://localhost:3003/recipes/delete?id=${recipe._id}`)
      .then((res) => console.log(res));
    console.log("ok");
  }

  // console.log("recipe", recipe._id);
  return (
    <>
      {showDel && (
        <Modal onOpen>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Итгэлтэй байна уу хамаа</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>
                <h5>Name</h5>
                <p>{recipe.name}</p>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={deleteOne} color="white" backgroundColor="red">
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
