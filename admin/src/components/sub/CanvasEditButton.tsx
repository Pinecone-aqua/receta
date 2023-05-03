// import { CocktailType } from "@/src/types/types";
import {
  CollectionType,
  CreateCategoryType,
  ToolsType,
} from "@/src/types/types";
import axios from "axios";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function CanvasEditButton({ recipe, collections, tools }: any) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [ingredient, setIngredient] = useState<string[]>(recipe.ingredients);
  const [categories, setCategories] = useState<CreateCategoryType[]>([]);
  const [selectTools, setSelectTools] = useState<string[]>(recipe.tools_id);
  const [how, setHow] = useState<string[]>(recipe.how_to);
  // const [oneRec, setOneRec] = useState(recipe);

  const tempRef: MutableRefObject<string> = useRef("");
  const tempRefHow: MutableRefObject<string> = useRef("");
  const inputRefIng = useRef<HTMLInputElement>(null);
  const inputRefIns = useRef<HTMLInputElement>(null);

  const addInputHandler = () => {
    tempRef.current && setIngredient([...ingredient, tempRef.current]);
    if (inputRefIng.current) {
      inputRefIng.current.value = "";
    }
  };

  const addInputHandlerHow = () => {
    tempRefHow.current && setHow([...how, tempRefHow.current]);
    if (inputRefIns.current) {
      inputRefIns.current.value = "";
    }
  };

  //----

  const removeInputHandler = (index: number) => {
    const deleteInput = ingredient.filter((input, i) => index !== i);
    setIngredient(deleteInput);
  };

  const removeInputHandlerHow = (index: number) => {
    const deleteInputHow = how.filter((input, i) => index !== i);
    setHow(deleteInputHow);
  };

  // add tool handler

  function addToolHandler(id: string) {
    if (selectTools.includes(id)) {
      setSelectTools(selectTools.filter((tool) => tool !== id));
    } else {
      setSelectTools([...selectTools, id]);
    }
  }

  function filterCate(name: string) {
    axios
      .get(`http://localhost:3003/categories/filter?name=${name.toLowerCase()}`)
      .then((res) => setCategories(res.data));
  }
  useEffect(() => {
    axios
      .get(`http://localhost:3003/categories/filter?name=difficulty`)
      .then((res) => setCategories(res.data));
  }, []);
  console.log(recipe);

  function updateRecipe(e: any) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      description: e.target.description.value,
      categories: e.target.category.value,
      collection: e.target.collection.value,
      ingredients: ingredient,
      how_to: how,
      video_url: e.target.videoUrl.value,
      alcohol: e.target.alcohol.value,
      tools: selectTools,
    };
    console.log(data);
  }

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
          <Offcanvas.Title>Recipe editing</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form
            className="w-full h-full flex-col justify-center items-center pl-[50px] mb-[30px]"
            onSubmit={(e) => {
              updateRecipe(e);
            }}
          >
            <div className="w-3/4 flex justify-between mb-[20px] border-b-[1px] border-black pb-[20px]">
              <label className="">Cocktail name</label>
              <input
                type="text"
                name="name"
                defaultValue={recipe.name}
                className="bg-slate-400 w-52 rounded"
              />
            </div>

            <div className="w-3/4 flex justify-between mb-[20px] border-b-[1px] border-black pb-[20px]">
              <label className="block">Description</label>
              <textarea
                name="description"
                defaultValue={recipe.description}
                className="resize  bg-slate-400  w-52 rounded"
              />
            </div>
            <div className="w-3/4 flex justify-between mb-[20px] border-b-[1px] border-black pb-[20px]">
              <label className="block">Collection</label>
              <select
                className="border"
                name="collection"
                onChange={(e) => filterCate(e.target.value)}
              >
                {collections.map(
                  (collection: CollectionType, index: number) => (
                    <option value={recipe.collection_id} key={index}>
                      {collection.name}
                    </option>
                  )
                )}
              </select>
            </div>

            <label className="block">Tools</label>
            <div className="flex flex-wrap gap-1 w-4/4 mt-[25px] border-b-[1px] border-black pb-[20px]">
              {tools.map((tool: ToolsType, index: number) => (
                <div
                  className={
                    selectTools.filter(
                      (selected: any) => selected._id === tool._id
                    ).length > 0
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
            <div className="w-3/4 flex justify-between  mt-[20px] mb-[20px] border-b-[1px] border-black pb-[20px]">
              <label className="block">Category</label>
              <select
                defaultValue={recipe.categories_id.name}
                name="category"
                id=""
              >
                {categories.map((category, index) => (
                  <option key={index}>{category.name}</option>
                ))}
              </select>
            </div>

            <div className="mt-[20px] mb-[20px] border-b-[1px] border-black pb-[20px]">
              <label className="block">Ingredients</label>
              <div className="flex flex-col gap-2 pt-[20px] pb-[20px]">
                {ingredient.map((inex, index) => (
                  <div
                    key={`input-container-${index}`}
                    className="h-full flex items-center"
                  >
                    <p className="w-[200px] m-0 bg-gray-400">{inex}</p>
                    <input
                      value="Remove"
                      className="px-[10px] bg-red-500"
                      onClick={() => {
                        removeInputHandler(index);
                      }}
                      type="button"
                    />
                  </div>
                ))}
              </div>

              <input
                id="adding"
                type="text"
                ref={inputRefIng}
                name="ingredients"
                className="bg-slate-400 w-52"
                onChange={(e) => {
                  tempRef.current = e.target.value;
                }}
              />
              <input
                value="Add ingredient"
                className="px-[10px] bg-green-400"
                onClick={addInputHandler}
                type="button"
              />
            </div>

            <div className="mt-[20px] mb-[20px] border-b-[1px] border-black pb-[20px]">
              <label className="block">Instructions</label>
              <div className="flex flex-col gap-2 pt-[20px] pb-[20px]">
                {how.map((inex, index) => (
                  <div
                    key={`input-container-${index}`}
                    className="h-full flex items-center"
                  >
                    <p className="w-[200px] m-0 bg-gray-400">{inex}</p>
                    <input
                      value="Remove"
                      className="px-[10px] bg-red-500"
                      onClick={() => {
                        removeInputHandlerHow(index);
                      }}
                      type="button"
                    />
                  </div>
                ))}
              </div>

              <input
                id="adding"
                type="text"
                ref={inputRefIns}
                name="instructions"
                className="bg-slate-400 w-52"
                onChange={(e) => {
                  tempRefHow.current = e.target.value;
                }}
              />
              <input
                value="Add instructions"
                className="px-[10px] bg-green-400"
                onClick={addInputHandlerHow}
                type="button"
              />
            </div>

            <div className="w-3/4 flex justify-between mt-[20px] mb-[20px]">
              <label className="block">Photo or image</label>
              <input
                // value={recipe.image_url}
                type="file"
                name="imageUrl"
                className="bg-slate-400 w-52"
              />
            </div>
            {/* <div className="w-3/4 flex justify-between mb-[20px]">
              <label className="block">Tutorial video</label>
              <input
                type="text"
                name="videoUrl"
                className="bg-slate-400 w-52 rounded"
              />
            </div> */}
            {/* <div className="w-3/4 flex justify-between mb-[20px]">
              <label>Alcoholic or nonalcoholic</label>
              <input
                onClick={() => setCheck(!check)}
                type="checkbox"
                value={`${check}`}
                name="alcohol"
                className="bg-slate-400 w-52 rounded"
              />
            </div> */}
            <div className="flex justify-center items-center gap-3 h-[100px]">
              <input
                className="bg-sky-800 w-[70px] h-[40px] rounded text-white"
                onClick={() => setShow(false)}
                type="button"
                value="Cancel"
              />

              <button
                type="submit"
                className="h-[40px] rounded-md bg-green-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
              >
                Save changes
              </button>
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
