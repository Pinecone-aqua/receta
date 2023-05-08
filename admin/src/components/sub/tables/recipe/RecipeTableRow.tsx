import { Td, Tr } from "@chakra-ui/react";
import { ConfirmPopup } from "primereact/confirmpopup";
import CanvasEditButton from "../../editing/EditRecipe";
import {
  CategoryType,
  CocktailType,
  CollectionType,
  ToolsType,
} from "@/src/types/types";
import axios from "axios";
import { toast } from "react-toastify";

// const toast = useToast();

interface RecipeTableRowPropType {
  categories: CategoryType[];
  collections: CollectionType[];
  tools: ToolsType[];
  recipe: CocktailType;
}

export default function RecipeTableRow({
  categories,
  collections,
  tools,
  recipe,
}: RecipeTableRowPropType) {
  function deleteHandler() {
    axios
      .delete(`http://localhost:3003/recipes/delete?id=${recipe._id}`)
      .then(
        (res) => res.statusText == "ok" && toast.info("Амжилттай устгалаа")
      );
  }

  return (
    <>
      <Tr>
        <Td>{recipe.name}</Td>
        <Td>{recipe.collection_id}</Td>
        <Td className="p-0 flex justify-center" width="200px">
          <img width="100px" src={recipe.image_url} />
        </Td>
        <Td>
          {recipe.alcohol ? <div>alcoholic</div> : <div>non alcoholic</div>}
        </Td>
        <Td>
          <ConfirmPopup />
          <div className="flex flex-col gap-3">
            <CanvasEditButton
              key={recipe._id}
              recipe={recipe}
              collections={collections}
              categories={categories}
              tools={tools}
            />
            <button
              onClick={deleteHandler}
              className="focus:outline-none text-white p-1 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Delete
            </button>
          </div>
        </Td>
      </Tr>
    </>
  );
}
