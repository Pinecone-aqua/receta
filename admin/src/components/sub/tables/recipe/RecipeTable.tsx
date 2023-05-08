import {
  CategoryType,
  CocktailType,
  CollectionType,
  ToolsType,
} from "@/src/types/types";
import {
  TableContainer,
  TabPanel,
  Tbody,
  Th,
  Thead,
  Tr,
  Table,
} from "@chakra-ui/react";

import CreateRecipe from "../../creating/CreateRecipe";
import RecipeTableRow from "./RecipeTableRow";

interface RecipeTablePropType {
  categories: CategoryType[];
  collections: CollectionType[];
  recipes: CocktailType[];
  tools: ToolsType[];
}

export default function RecipeTable({
  categories,
  collections,
  recipes,
  tools,
}: RecipeTablePropType) {
  return (
    <TabPanel>
      <CreateRecipe collections={collections} tools={tools} />
      <TableContainer>
        <Table size="lg">
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
            {recipes.map((recipe: CocktailType) => (
              <RecipeTableRow
                categories={categories}
                tools={tools}
                collections={collections}
                recipe={recipe}
                key={recipe._id}
              />
            )).reverse()}
          </Tbody>
        </Table>
      </TableContainer>
    </TabPanel>
  );
}
