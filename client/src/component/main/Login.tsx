import { useRouter } from "next/router";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import axios from "axios";
import { FaCocktail } from "react-icons/fa";

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  function googleLoginHandler() {
    axios.get("http://localhost:3003/google-login").then((res) => {
      router.push(res.data);
      localStorage.setItem("page", "cocktails");
    });
  }

  return (
    <>
      <Tooltip label="Login" aria-label="A tooltip" openDelay={200}>
        <button onClick={onOpen} className="z-10">
          Log in
        </button>
      </Tooltip>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="flex gap-5 text-[#292F36]">
            <FaCocktail className="" />
            <h1 className="">receta.</h1>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={10}>
            <span
              onClick={googleLoginHandler}
              className="flex place-content-center cursor-pointer mt-5 mb-2 px-5 py-2 bg-white border rounded-md gap-2"
            >
              <FcGoogle className="mt-[3px] w-[20px] h-[20px]" />
              <p className="text-[16px]">sign in google</p>
            </span>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
