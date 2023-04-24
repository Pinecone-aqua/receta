import axios from "axios";
import { useEffect, useState } from "react";
import CanvasRecipe from "./CanvasRecipe";
import CanvasCateg from "./CanvasCateg";
import CanvasTools from "./CanvasTools";

export default function Recipe(): JSX.Element {
  const [collections, setCollections] = useState([]);
  const [tools, setTools] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3003/collections/get")
      .then((res) => setCollections(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3003/tools/get")
      .then((res) => setTools(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3003/categories/get")
      .then((res) => setCategories(res.data));
  }, []);
  console.log("categories", categories);
  return (
    <div>
      <div className="flex gap-3 ml-[10px]">
        <CanvasRecipe collections={collections} tools={tools} />
        <CanvasCateg collections={collections} />
        <CanvasTools />
      </div>
    </div>
  );
}
