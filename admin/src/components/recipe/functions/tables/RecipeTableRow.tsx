import { Td, Tr } from "@chakra-ui/react";
import { ConfirmPopup } from "primereact/confirmpopup";
import CanvasEditButton from "../../EditRecipe";
import Image from "next/image";
import {
  CategoryType,
  CocktailType,
  CollectionType,
  ToolsType,
} from "../../../../util/Types";
import DeleteAlert from "../../DeleteRecipe";

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
        <Td className="">
          <Image
            width={70}
            height={200}
            className="drop-shadow-2xl"
            src={recipe.image_url}
            alt="recipe image"
          />
        </Td>
        <Td>
          {recipe.alcohol ? <div>alcoholic</div> : <div>non alcoholic</div>}
        </Td>
        <Td>
          <ConfirmPopup />
          <div className="flex gap-3">
            <CanvasEditButton
              key={recipe._id}
              recipe={recipe}
              collections={collections}
              categories={categories}
              tools={tools}
            />
            <DeleteAlert recipe={recipe} />
          </div>
        </Td>
      </Tr>
    </>
  );
}
