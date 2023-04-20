import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function ModalTools() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createToolHandler(e: any) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.image.value);
    const tool = {
      name: e.target.name.value,
      image: e.target.image.value
    }
    console.log(tool)
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
          <Offcanvas.Title>Category</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="place-content-center flex">
          <form className="flex flex-col" onSubmit={createToolHandler}>
            <label>
              Tool name
              <input className="border" type="text" name="name" />
            </label>
            <label>
              Tool image
              <input className="border" type="file" name="image" />
            </label>
            <button className="w-2/6 bg-green-500 rounded-md text-white px-[15px] py-[5px]">
              create
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
