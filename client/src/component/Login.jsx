import axios from "axios";
import { Button, Spinner, Modal } from "flowbite-react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Login() {
  const { data: session } = useSession();
  console.log("bye");
  const [showModal, setShowModal] = useState(false);

  if (session) {
    return (
      <div>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={() => signOut()}
        >
          Sign out
        </button>
        <Spinner aria-label="Default status example" />
      </div>
    );
  } else {
    return (
      <>
        <Button onClick={() => setShowModal(true)}>Login</Button>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Modal.Header>Login</Modal.Header>
          <Modal.Body className="h-[150px]">
            <Button
              color="light"
              className="w-full rounded-[50px]"
              onClick={() => signIn()}
            >
              Sign in with google
            </Button>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
