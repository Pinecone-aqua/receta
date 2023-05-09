import axios from "axios";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from "react-toastify";

export default function DeleteButton({ recipe }: {
  recipe: any;
}): JSX.Element {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function deleteHandler() {
    axios
      .delete(`http://localhost:3003/recipes/delete?id=${recipe._id}`)
      .then(
        (res) => res.statusText == "ok" && toast.success("Deleted!")
      );
      setShow(false);
  }
  return (
     <>
      <button className="bg-red-600 rounded text-white text-bold h-[30px] flex items-center justify-center" onClick={handleShow}>
        Delete
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Are you sure deleteing?</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>Are you sure deleteing?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}