// import { CocktailType } from "@/src/types/types";
import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function CanvasEditButton({ recipe }: any) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className="bg-green-600 rounded text-white text-bold h-[30px] flex items-center justify-center"
        onClick={handleShow}
      >
        Edit
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="w-50 relative pt-[30px]"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Recipe</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>{recipe.name}</div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
