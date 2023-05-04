import { Td, Tr } from "@chakra-ui/react";
import { Button } from "flowbite-react";
import { ConfirmPopup } from "primereact/confirmpopup";
import CanvasEditButton from "../CanvasEditButton";
import {
  CategoryType,
  CocktailType,
  CollectionType,
  ToolsType,
} from "@/src/types/types";
import axios from "axios";
import { toast } from "react-toastify";

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
          <Button
            onClick={deleteHandler}
            label="Delete"
            className="p-button-danger h-[30px] p-button-outlined"
          />
        </div>
      </Td>
    </Tr>
  );
}
