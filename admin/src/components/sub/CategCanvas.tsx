import { CollectionType } from "@/src/types/Types";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function ModalCateg(props: { collections: CollectionType[] }) {
  const { collections } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createCateHandler(e: any) {
    e.preventDefault();
    console.log(e.target.collection.value);
    console.log(e.target.category.value);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create category
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
          <form className="flex flex-col" onSubmit={createCateHandler}>
            <label>
              Collection
              <select className="border" name="collection">
                {collections.map((collection, index) => (
                  <option key={index}>{collection.name}</option>
                ))}
              </select>
            </label>
            <label>
              Category name
              <input className="border" type="text" name="category" />
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
