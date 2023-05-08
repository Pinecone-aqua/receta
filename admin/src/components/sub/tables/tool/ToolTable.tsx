import React from 'react'
import CreateTools from "../../creating/CreateTool";
import { ToolsType } from "@/src/types/types";
import { TabPanel, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

interface ToolTablePropType {
  tools: ToolsType[];
}

export default function ToolTable({tools}: ToolTablePropType) {
  return (
    <TabPanel>
        <CreateTools />
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
            {tools.map((tool: any, index: number) => (
              <Tr key={index}>
                <Td>{tool.name}</Td>
                <Td>
                  <img
                    className="w-[150px] drop-shadow-2xl"
                    src={tool.image_url}
                  />
                </Td>
                <Td>{tool._id}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </TabPanel>
  )
}
