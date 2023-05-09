import {
  CategoryType,
  CocktailType,
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

import CanvasRecipe from "../recipe/CreateRecipe";
import RecipeTableRow from "./RecipeTableRow";
import { useCocktail } from "@/src/context/CocktailContext";

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
  return (
    <TabPanel className="">
      <CanvasRecipe collections={collections} tools={tools} />
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
            {recipes
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
