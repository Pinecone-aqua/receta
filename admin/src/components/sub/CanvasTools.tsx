import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function CanvasTools() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createCateHandler(e: any) {
    e.preventDefault();
    const category = {
      collection: e.target.collection.value,
      name: e.target.name.value,
    };
    console.log(category);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create tools
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        className="w-2/5 mx-auto rounded-md mt-[5%]"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Create tool</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="place-content-center flex">
          <form className="flex flex-col" onSubmit={createCateHandler}>
            
            <label>
              Tool name
              <input className="border" type="text" name="name" />
            </label>
            <label className="mt-[5px]">
              Tool image
              <input className="border" type="file" name="image" />
            </label>

            <div className="flex justify-between mt-[10px] mb-[10px]">
            <Button className="w-1/4 bg-green-500 rounded-md text-white px-[15px] py-[5px]" type="button" onClick={() => setShow(false)}>
                Cancel
            </Button>
            <button className="w-1/4 bg-green-500 rounded-md text-white px-[15px] py-[5px]" type="submit">
              Create
            </button>
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
