import CreateRecipe from "../recipe/CreateRecipe";
// import Sorting from "./functions/Sorting";
import RecipeTableRow from "./RecipeTableRow";
// import { useCocktail } from "@/src/context/CocktailContext";
import { useState } from "react";
import {
  CategoryType,
  // CocktailType,
  CollectionType,
  ToolsType,
} from "../../util/Types";
import {
  TableContainer,
  TabPanel,
  Tbody,
  Th,
  Thead,
  Tr,
  Table,
} from "@chakra-ui/react";
import Sorting from "./functions/Sorting";

interface RecipeTablePropType {
  categories: CategoryType[];
  collections: CollectionType[];
  tools: ToolsType[];
}

export default function RecipeTable({
  categories,
  collections,
  tools,
}: RecipeTablePropType) {
  const [sorted, setSorted] = useState();
  // const { recipes } = useCocktail();
  // const [selectedCategory, setSelectedCategory] = useState<string>();
  // const [selectedCollection, setSelectedCollection] = useState<string>();
  // console.log(selectedCategory);
  // console.log(recipes);
  // console.log("d", selectedCollection);
  // const filteredRecipesByCategory = recipes.filter(
  //   (recipe) => recipe.categories_id[0].name === selectedCategory
  // );
  // const filteredRecipesByCollection = recipes.filter(
  //   (recipe) => recipe.collection_id === selectedCollection
  // );

  return (
    <TabPanel className="">
      <div className="flex justify-between items-center">
        <CreateRecipe collections={collections} tools={tools} />
        <Sorting
          sorted={sorted}
          setSorted={setSorted}
          collections={collections}
        />
      </div>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th className="">Name</Th>
              <Th className="">Collection</Th>
              <Th className="">Image</Th>
              <Th className="">Alcoholic</Th>
              <Th className="">Options</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* {recipes
              .map((recipe: CocktailType) => (
                <RecipeTableRow
                  categories={categories}
                  tools={tools}
                  collections={collections}
                  recipe={recipe}
                  key={recipe._id}
                />
              ))
              .reverse()} */}
          </Tbody>
        </Table>
      </TableContainer>
    </TabPanel>
  );
}
