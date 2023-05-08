import {
  CollectionType,
  CreateCategoryType,
  ToolsType,
} from "@/src/types/types";
import axios from "axios";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function CanvasEditButton({
  recipe,
  collections,
  categories,
  tools,
}: any) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  //--
  const [ingredient, setIngredient] = useState<string[]>(recipe.ingredients);
  const [filteredCategory, setFilteredCategory] = useState<
    CreateCategoryType[]
  >([]);
  const [currentCollection, setCurrentCollection] = useState<any>(
    recipe.collection_id
  );
  const [how, setHow] = useState<string[]>(recipe.how_to);
  const [check, setCheck] = useState<boolean>(recipe.alcohol); // isAcholed
  const [file, setFile] = useState<any | null>(recipe.image_url); //image
  const idOfTools = recipe.tools_id.map((one: { _id: string }) => one._id);
  const [selectTools, setSelectTools] = useState<string[]>(idOfTools); //selectedTools

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
    selectTools.includes(id);
    if (selectTools.includes(id)) {
      setSelectTools(selectTools.filter((tool) => tool !== id));
    } else {
      setSelectTools([...selectTools, id]);
    }
  }

  // file setting
  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
    console.log("file", file);
  };

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
      alcohol: e.target.alcohol.checked,
      tools: selectTools,
    };
    console.log("file", file);
    console.log("data", data);
    const formData = new FormData();
    e.target.imageUrl.files[0]
      ? formData.append("file", file)
      : formData.append("img", file);
    formData.append("data", JSON.stringify(data));

    axios
      .patch(`http://localhost:3003/recipes/update?id=${recipe._id}`, formData)
      .then((res) => console.log(res.data));
  }

  useEffect(() => {
    const result = categories.filter(
      (category: any) => category.collection_name === currentCollection
    );

    setFilteredCategory(result);
  }, [categories, currentCollection]);

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
          {/* <AdditionalFields name="Ingredients" ingredients={ingredients} setIngredients={setIngredients}/>
          <AdditionalFields name="Instructions"/> */}
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
                defaultValue={recipe.collection_id}
                className="border"
                name="collection"
                onChange={(e) => setCurrentCollection(e.target.value)}
              >
                {collections.map(
                  (collection: CollectionType, index: number) => (
                    <option key={index}>{collection.name}</option>
                  )
                )}
              </select>
            </div>

            <div className="w-3/4 flex justify-between  mt-[20px] mb-[20px] border-b-[1px] border-black pb-[20px]">
              <label className="block">Category</label>
              <select
                defaultValue={recipe.categories_id[0].name}
                name="category"
              >
                {filteredCategory.map((category: any, index: number) => (
                  <option key={index}>{category.name}</option>
                ))}
              </select>
            </div>

            <label className="block">Tools</label>
            <div className="flex flex-wrap gap-1 w-4/4 mt-[25px] border-b-[1px] border-black pb-[20px]">
              {tools.map((tool: ToolsType, index: number) => (
                <div
                  className={
                    selectTools.includes(tool._id)
                      ? //   (selected: any) => selected._id === tool._id
                        // ).length > 0
                        "w-[170px] py-[10px] border bg-slate-300 flex flex-col items-center"
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
                accept="image/*"
                onChange={handleFileChange}
                type="file"
                name="imageUrl"
                className="w-52"
              />
              {file && (
                <div>
                  <img width="50px" height="50px" src={file} alt="cocktail" />
                </div>
              )}
            </div>
            <div className="w-3/4 flex justify-between mb-[20px]">
              <label className="block">Tutorial video</label>
              <input
                defaultValue={recipe.how_to}
                type="text"
                name="videoUrl"
                className="bg-slate-400 w-52 rounded"
              />
            </div>
            <div className="w-3/4 flex justify-between mb-[20px]">
              <label>Alcoholic or nonalcoholic</label>
              <input
                onClick={()=>{setCheck(!check)}}
                type="checkbox"
                defaultChecked={check}
                name="alcohol"
                className="bg-slate-400 w-52 rounded"
              />
            </div>
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
