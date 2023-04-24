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
            className="w-full h-full flex-col justify-center items-center pl-[50px]"
            onSubmit={(e) => createCocktail(e)}
          >
            <div className="w-3/4 flex justify-between mb-[20px]">
            <label className="">
              Cocktail name
            </label>
              <input
                type="text"
                name="name"
                className="bg-slate-400 w-52 rounded"
              />
            </div>
            <div className="w-3/4 flex justify-between mb-[20px]">
            <label className="block">
              Description
            </label>
              <textarea
                name="description"
                className="resize  bg-slate-400  w-52 rounded"
              />
            </div>
            <div className="w-3/4 flex justify-between mb-[20px]">
            <label className="block">
              Collection
            </label>
              <select className="border" name="collection">
                {collections.map((collection, index) => (
                  <option key={index}>{collection.name}</option>
                ))}
              </select>
            </div>
            <label className="block">
              Tools
            </label>
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
            <div className="w-3/4 flex justify-between  mt-[20px] mb-[20px]">
            <label className="block">
              Category
            </label>
              <select name="category" id="">
                <option value="">a</option>
              </select>
            </div>
            <label className="block">
              Ingredients
            </label>
              <div className="flex flex-col gap-2 pt-[20px] pb-[20px]">
                {ingredient.map((inex, index) => (
                  <div key={`input-container-${index}`} className="h-full flex items-center">
                    <p className="w-[200px] m-0 bg-gray-400">{inex}</p>
                    <button className="px-[10px] bg-red-500" 
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
                className="bg-slate-400 w-52"
                onChange={(e) => {
                  tempRef.current = e.target.value;
                  console.log(tempRef);
                }}
              />
            <button className="px-[10px] bg-green-400" onClick={addInputHandler}>Add ingredient</button>
            <div className="w-3/4 flex justify-between  mt-[20px] mb-[20px]">
            <label className="block">
              Photo or image
            </label>
              <input
                type="file"
                name="imageUrl"
                className="bg-slate-400 w-52 rounded"
              />
            </div>
            <div className="w-3/4 flex justify-between  mb-[20px]">
            <label className="block">
              Tutorial video
            </label>
              <input
                type="text"
                name="videoUrl"
                className="bg-slate-400 w-52 rounded"
              />
            </div>
            <div className="w-3/4 flex justify-between  mb-[20px]">
            <label>
              Alcoholic or nonalcoholic
            </label>
              <input
                onClick={() => setCheck(!check)}
                type="checkbox"
                value={`${check}`}
                name="alcohol"
                className="bg-slate-400 w-52 rounded"
              />
            </div>
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
