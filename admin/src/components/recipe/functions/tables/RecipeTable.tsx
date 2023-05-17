import {
  CategoryType,
  CocktailType,
  CollectionType,
  ToolsType,
} from "../../../../util/Types";
import { TableContainer, Tbody, Th, Thead, Tr, Table } from "@chakra-ui/react";
import RecipeTableRow from "./RecipeTableRow";

interface RecipeTablePropType {
  categories: CategoryType[];
  collections: CollectionType[];
  tools: ToolsType[];
  sortedData: CocktailType[];
}

export default function RecipeTable({
  categories,
  collections,
  tools,
  sortedData,
}: RecipeTablePropType) {
  return (
    <TableContainer className="mt-[20px]">
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
          {sortedData.map((recipe: CocktailType) => (
            <RecipeTableRow
              categories={categories}
              tools={tools}
              collections={collections}
              recipe={recipe}
              key={recipe._id}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
