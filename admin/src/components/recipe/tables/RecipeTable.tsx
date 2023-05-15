import {
  CategoryType,
  CocktailType,
  CollectionType,
  ToolsType,
} from "../../../util/Types";
import {
  TableContainer,
  TabPanel,
  Tbody,
  Th,
  Thead,
  Tr,
  Table,
} from "@chakra-ui/react";

import CanvasRecipe from "../CreateRecipe";
import RecipeTableRow from "./RecipeTableRow";
import { useCocktail } from "@/src/context/CocktailContext";
import SearchFunc from "../functions/SearchFunc";
import { useState } from "react";

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
  const { recipes } = useCocktail();
  const [sortedRecipe, setSortedRecipe] = useState(recipes);
  return (
    <TabPanel className="">
      <div className="w-full flex justify-between items-center">
        <CanvasRecipe collections={collections} tools={tools} />
        <SearchFunc
          sortedRecipe={sortedRecipe}
          setSortedRecipe={setSortedRecipe}
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
            {sortedRecipe
              ?.map((recipe: CocktailType) => (
                <RecipeTableRow
                  categories={categories}
                  tools={tools}
                  collections={collections}
                  recipe={recipe}
                  key={recipe._id}
                />
              ))
              .reverse()}
          </Tbody>
        </Table>
      </TableContainer>
    </TabPanel>
  );
}
