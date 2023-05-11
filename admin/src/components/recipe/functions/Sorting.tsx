import { useEffect, useState } from "react";
import { Select } from "@chakra-ui/react";
import axios from "axios";
import { CollectionType } from "@/src/util/Types";
import { useCocktail } from "@/src/context/CocktailContext";

interface CategoryType {
  name: string;
  _id: string;
  collection_name: string;
}

interface itemType {
  collections: CollectionType;
  sorted: any;
  setSorted: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function Sorting({
  collections,
  setSorted,
  sorted,
}: itemType): JSX.Element {
  const { recipes } = useCocktail();

  const [categories, setCategories] = useState<CategoryType>();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [selectedCollection, setSelectedCollection] = useState<string>();

  function filterCate(name: string) {
    axios
      .get(`http://localhost:3003/categories/filter?name=${name}`)
      .then((res) => setCategories(res.data));
  }
  useEffect(() => {
    axios
      .get(
        `http://localhost:3003/categories/filter?name=${localStorage.getItem(
          "currentCollection"
        )}`
      )
      .then((res) => setCategories(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3003/recipes/filter-category?name=${selectedCategory}&limit=8`
      )
      .then((res) => setCategories(res.data));
  }, [selectedCategory]);

  // only one set statement make set names of category and collection then render only one

  function settingCollection(e: any) {
    filterCate(e.target.value);
    setSelectedCollection(e.target.value);
  }
  const filteredRecipesByCategory = recipes.filter(
    (recipe) => recipe.categories_id[0].name === selectedCategory
  );
  const filteredRecipesByCollection = recipes.filter(
    (recipe) => recipe.collection_id === selectedCollection
  );

  return (
    <div className="flex gap-3">
      <Select onChange={(e) => settingCollection(e)} width="250px">
        {collections.map((collection, index) => (
          <option key={index}>{collection.name}</option>
        ))}
      </Select>
      <Select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        width="250px"
        placeholder="Select category"
      >
        {categories &&
          categories.map((category, index) => (
            <option key={index}>{category.name}</option>
          ))}
      </Select>
    </div>
  );
}
