import axios from "axios";
import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

export default function CanvasTools() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createToolHandler(e: any) {
    e.preventDefault();
    const tool = {
      name: e.target.name.value,
      price: e.target.price.value,
    };

    const data = new FormData();
    data.append("file", e.target.image_url.files[0]);
    data.append("newTool", JSON.stringify(tool));

    axios
      .post("http://localhost:3003/tools/create", data)
      .then((res) => console.log(res));
  }

  return (
    <>
      <Button className="my-[30px]" variant="primary" onClick={handleShow}>
        Create tools
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        className="w-1/4 mx-auto rounded-md mt-[5%]"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Create tool</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="place-content-center flex">
          <form className="flex flex-col" onSubmit={createToolHandler}>
            <label className="flex flex-col gap-2 mb-[20px]">
              Tool name
              <input className="border" type="text" name="name" />
            </label>
            <label className="flex flex-col gap-2 mb-[20px]">
              Tool image
              <input className="border" type="file" name="image_url" />
            </label>
            <label className="flex flex-col gap-2 mb-[20px]">
              Tool price
              <input className="border" type="number" name="price" />
            </label>

            <div className="flex justify-between mt-[10px] mb-[10px]">
              <Button
                className="w-1/4 bg-green-500 rounded-md text-white px-[15px] py-[5px]"
                type="button"
                onClick={() => setShow(false)}
              >
                Cancel
              </Button>
              <button
                className="w-1/4 bg-green-500 rounded-md text-white px-[15px] py-[5px]"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
