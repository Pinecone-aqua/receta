import { CategoryType, CollectionType } from "@/src/types/types";
import { TabPanel, TableContainer, Tbody, Td, Th, Thead, Tr, Table } from "@chakra-ui/react";
import React from 'react'
import CreateCategory from "../../creating/CreateCategory";

interface CategoryTablePropType {
  categories: CategoryType[];
  collections: CollectionType[];
}

export default function CategoryTable({categories, collections}: CategoryTablePropType) {
  return (
    <TabPanel>
      <CreateCategory collections={collections} />
        <TableContainer>
          <Table size="lg">
             <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Collection</Th>
                <Th>ID</Th>
              </Tr>
              </Thead>
              <Tbody>
                {categories.map((categ, index) => (
                  <Tr key={index}>
                    <Td>{categ.name}</Td>
                    <Td>{categ.collection_name}</Td>
                    <Td>{categ._id}</Td>
                  </Tr>
                  ))}
              </Tbody>
          </Table>
        </TableContainer>
    </TabPanel>
  )
}
