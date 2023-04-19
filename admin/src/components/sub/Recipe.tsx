import axios from "axios";
import { useEffect, useState } from "react";
import ModalCateg from "./CategCanvas";
import ModalRecipe from "./ModalRecipe";

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
      <ModalCateg collections={collections} />
    </div>
  );
}
