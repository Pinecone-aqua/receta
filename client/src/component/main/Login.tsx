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
          <ModalHeader>Login modal</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={10}>
            <span
              onClick={googleLoginHandler}
              className="flex place-content-center cursor-pointer mt-5 mb-2 px-5 p-2 bg-white shadow shadow-[#1e1e1e] rounded-[25px] gap-2"
            >
              <p className="text-[16px]">sign in google</p>
              <FcGoogle className="mt-[3px] w-[20px] h-[20px]" />
            </span>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
