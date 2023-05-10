import {
  CollectionType,
  ToolsType,
  CreateCategoryType,
  CreateCocktailType,
} from "../../util/Types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useCocktail } from "@/src/context/CocktailContext";
import { Spinner } from "@chakra-ui/react";
import AddToolHandler from "./functions/AddToolHandler";
import InputMappingInCreate from "./functions/InputMappingInCreate";

export default function CreateRecipe(props: {
  collections: CollectionType[];
  tools: ToolsType[];
}) {
  const { collections } = props;
  const { tools } = props;
  const [categories, setCategories] = useState<CreateCategoryType[]>([]);
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState<boolean | null>(false);
  const [ingredient, setIngredient] = useState<string[]>([]);
  const [selectTools, setSelectTools] = useState<string[]>([]);
  const [how, setHow] = useState<string[]>([]);
  const [spinner, setSpinner] = useState<string>();

  const { setRecipes, recipes } = useCocktail();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputIng, setInputIng] = useState<string>("");
  const [inputIns, setInputIns] = useState<string>("");

  // filter categories
  function filterCate(name: string) {
    axios
      .get(`http://localhost:3003/categories/filter?name=${name}`)
      .then((res) => setCategories(res.data));
  }
  useEffect(() => {
    axios
      .get(
        `http://localhost:3003/categories/filter?name=${localStorage.getItem(
          "currentColloction"
        )}`
      )
      .then((res) => setCategories(res.data));
  }, []);

  async function createCocktail(e: any) {
    e.preventDefault();
    setSpinner("loading");

    const cocktailData: CreateCocktailType = {
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
    const data = new FormData();
    data.append("file", e.target.imageUrl.files[0]);
    data.append("newRecipe", JSON.stringify(cocktailData));
    console.log(cocktailData);
    try {
      const result = await axios.post(
        "http://localhost:3003/recipes/create",
        data
      );
      if (result.statusText === "Created") {
        setRecipes([...recipes, result.data]),
          setSpinner("run"),
          setShow(false),
          setSelectTools([]);
      }
    } catch (error) {
      console.log(error, "error in creating");
    }
  }

  return (
    <>
      <Button
        className="my-[30px]"
        style={{ background: "#454ADE" }}
        onClick={handleShow}>
        Create recipe
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="w-50 relative pt-[30px]">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Recipe</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form
            className="w-full h-full flex-col justify-center items-center pl-[50px] mb-[30px]"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={(e) => createCocktail(e)}>
            <div className="w-3/4 flex justify-between mb-[20px] border-b-[1px] border-black pb-[20px]">
              <label className="">Cocktail name</label>
              <input
                type="text"
                name="name"
                className="bg-slate-400 w-52 rounded"
              />
            </div>

            <div className="w-3/4 flex justify-between mb-[20px] border-b-[1px] border-black pb-[20px]">
              <label className="block">Description</label>
              <textarea
                name="description"
                className="resize  bg-slate-400  w-52 rounded"
              />
            </div>
            <div className="w-3/4 flex justify-between mb-[20px] border-b-[1px] border-black pb-[20px]">
              <label className="block">Collection</label>
              <select
                className="border"
                name="collection"
                onChange={(e) => filterCate(e.target.value)}>
                {collections.map((collection, index) => (
                  <option key={index}>{collection.name}</option>
                ))}
              </select>
            </div>

            <label className="block">Tools</label>
            <div className="flex flex-wrap gap-1 w-4/4 mt-[25px] border-b-[1px] border-black pb-[20px]">
              <AddToolHandler
                selectTools={selectTools}
                setSelectTools={setSelectTools}
                tools={tools}
              />
            </div>
            <div className="w-3/4 flex justify-between  mt-[20px] mb-[20px] border-b-[1px] border-black pb-[20px]">
              <label className="block">Category</label>
              <select name="category" id="">
                {categories.map((category, index) => (
                  <option key={index}>{category.name}</option>
                ))}
              </select>
            </div>

            <div className="mt-[20px] mb-[20px] border-b-[1px] border-black pb-[20px]">
              <label className="block">Ingredients</label>
              <InputMappingInCreate
                item={ingredient}
                setItem={setIngredient}
                inputText={inputIng}
                setInputText={setInputIng}
              />
            </div>

            <div className="mt-[20px] mb-[20px] border-b-[1px] border-black pb-[20px]">
              <label className="block">Instructions</label>
              <InputMappingInCreate
                item={how}
                setItem={setHow}
                inputText={inputIns}
                setInputText={setInputIns}
              />
            </div>

            <div className="w-3/4 flex justify-between mt-[20px] mb-[20px]">
              <label className="block">Photo or image</label>
              <input
                type="file"
                name="imageUrl"
                className="bg-slate-400 w-52"
              />
            </div>
            <div className="w-3/4 flex justify-between mb-[20px]">
              <label className="block">Tutorial video</label>
              <input
                type="text"
                name="videoUrl"
                className="bg-slate-400 w-52 rounded"
              />
            </div>
            <div className="w-3/4 flex justify-between mb-[20px]">
              <label>Alcoholic or nonalcoholic</label>
              <input
                onClick={() => setCheck(!check)}
                type="checkbox"
                value={`${check}`}
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
                className="h-[40px] rounded-md bg-green-600 px-3 text-sm text-white shadow-sm hover:bg-green-500">
                Create
                {spinner == "loading" && <Spinner className="" size="xs" />}
              </button>
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
