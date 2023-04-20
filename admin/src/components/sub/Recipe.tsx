import axios from "axios";
import { useEffect, useState } from "react";
import ModalRecipe from "./ModalRecipe";
import CategCanvas from "./CategCanvas";
import ModalTools from "./ModalTools";

export default function Recipe(): JSX.Element {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3003/collection/get")
      .then((res) => setCollections(res.data));
  }, []);
  console.log(collections);
  return (
    <div>
      <ModalRecipe collections={collections} />
      <CategCanvas collections={collections} />
      <ModalTools />
    </div>
  );
}
