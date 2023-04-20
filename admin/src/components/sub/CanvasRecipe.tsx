import { CollectionType, CocktailType, ToolsType } from "@/src/types/types";
import React, { MutableRefObject, useRef, useState } from "react";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function CanvasRecipe(props: {
  collections: CollectionType[];
  tools: ToolsType[];
}) {
  const { collections } = props;
  const { tools } = props;
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState<boolean | null>(false);
  const [ingredient, setIngredient] = useState<string[]>([]);
  const [selectTools, setSelectTools] = useState<string[]>([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const tempRef: MutableRefObject<string> = useRef("");

  const addInputHandler = () => {
    tempRef.current && setIngredient([...ingredient, tempRef.current]);
  };

  const removeInputHandler = (index: number) => {
    const deleteInput = ingredient.filter((input, i) => index !== i);
    setIngredient(deleteInput);
  };

  //----

  function addToolHandler(id: string) {
    if (selectTools.includes(id)) {
      setSelectTools(selectTools.filter((tool) => tool !== id));
    } else {
      setSelectTools([...selectTools, id]);
    }
  }
  console.log(selectTools);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createCocktail(e: any) {
    e.preventDefault();

    const cocktailData: CocktailType = {
      name: e.target.name.value,
      description: e.target.description.value,
      category: e.target.category.value,
      collection: e.target.collection.value,
      ingredients: ingredient,
      imageUrl: e.target.imageUrl.value,
      videoUrl: e.target.videoUrl.value,
      alcohol: e.target.alcohol.value,
      tools: selectTools,
    };
    console.log(cocktailData);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        create recipe
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="w-50"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Recipe</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form
            className="w-full h-full flex-col justify-center"
            onSubmit={(e) => createCocktail(e)}
          >
            <label className="block w-full">
              Cocktail name
              <input
                type="text"
                name="name"
                className="bg-slate-400 w-52 rounded"
              />
            </label>
            <label className="block">
              Description
              <textarea
                name="description"
                className="resize  bg-slate-400  w-52 rounded"
              />
            </label>
            <label className="block">
              Collection
              <select className="border" name="collection">
                {collections.map((collection, index) => (
                  <option key={index}>{collection.name}</option>
                ))}
              </select>
            </label>
            <label className="block">
              Tools
              <div className="flex flex-wrap gap-1">
                {tools.map((tool, index) => (
                  <div
                    className={
                      selectTools.includes(tool._id)
                        ? "w-[170px] py-[10px] border bg-slate-300 flex flex-col items-center"
                        : "w-[170px] py-[10px] border flex flex-col items-center"
                    }
                    key={index}
                    onClick={() => addToolHandler(tool._id)}
                  >
                    <p className="">{tool.name}</p>
                    <img className="w-[80px]" src={tool.image_url} />
                  </div>
                ))}
              </div>
            </label>
            <label className="block">
              Category
              <select name="category" id="">
                <option value="">a</option>
              </select>
            </label>
            <label className="block">
              Ingredients
              <div className="flex flex-col gap-2">
                {ingredient.map((inex, index) => (
                  <div key={`input-container-${index}`} className="flex ">
                    <p className="w-24 border">{inex}</p>
                    <button
                      onClick={() => {
                        removeInputHandler(index);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <input
                type="text"
                name="ingredients"
                className="bg-slate-400 w-52 rounded"
                onChange={(e) => {
                  tempRef.current = e.target.value;
                  console.log(tempRef);
                }}
              />
            </label>
            <button onClick={addInputHandler}>Add ingredient</button>
            <label className="block">
              Photo or image
              <input
                type="file"
                name="imageUrl"
                className="bg-slate-400 w-52 rounded"
              />
            </label>
            <label className="block">
              Tutorial video
              <input
                type="text"
                name="videoUrl"
                className="bg-slate-400 w-52 rounded"
              />
            </label>
            <label>
              Alcoholic or nonalcoholic
              <input
                onClick={() => setCheck(!check)}
                type="checkbox"
                value={`${check}`}
                name="alcohol"
                className="bg-slate-400 w-52 rounded"
              />
            </label>
            <div className="flex justify-center gap-3 h-[40px]">
              <Button onClick={() => setShow(false)} type="button">
                Cancel
              </Button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
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
