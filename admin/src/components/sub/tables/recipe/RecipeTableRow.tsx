import { Td, Tr } from "@chakra-ui/react";
import { ConfirmPopup } from "primereact/confirmpopup";
import CanvasEditButton from "../../editing/EditRecipe";
import {
  CategoryType,
  CocktailType,
  CollectionType,
  ToolsType,
} from "@/src/types/types";
import DeleteButton from "../../deleting/DeleteButton";

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
            <DeleteButton recipe={recipe} />
          </div>
        </Td>
      </Tr>
    </>
  );
}
