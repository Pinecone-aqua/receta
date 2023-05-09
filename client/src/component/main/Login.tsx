import { useRouter } from "next/router";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import {
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  useDisclosure,
  Divider,
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
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email or name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="First name"
                className="mb-[10px]"
              />
              <Input ref={initialRef} placeholder="Password" />
              <button className="w-full shadow rounded-md  bg-white px-[16px] py-[6px] mt-5">
                Login
              </button>
              <Divider orientation="horizontal" className="mt-6" />
            </FormControl>

            <span
              onClick={googleLoginHandler}
              className="flex place-content-center cursor-pointer mt-5 px-5 p-2 bg-white shadow rounded-[25px] gap-2"
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
