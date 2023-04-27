import axios from "axios";
import { useEffect, useState } from "react";
import CanvasRecipe from "./CanvasRecipe";
import CanvasCateg from "./CanvasCateg";
import CanvasTools from "./CanvasTools";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import DeleteRecipe from "./DeleteRecipe";
import EditRecipe from "./EditRecipe";
import { CocktailType } from "@/src/types/types";

export default function Recipe(): JSX.Element {
  const [showDel, setShowDel] = useState<boolean>(true);
  const [collections, setCollections] = useState([]);
  const [tools, setTools] = useState([]);
  const [recipes, setRecipes] = useState<CocktailType[]>([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3003/collections/get")
      .then((res) => setCollections(res.data));

    axios
      .get("http://localhost:3003/categories/get")
      .then((res) => setCategories(res.data));

    axios
      .get("http://localhost:3003/recipes/all")
      .then((res) => setRecipes(res.data));

    axios
      .get("http://localhost:3003/tools/get")
      .then((res) => setTools(res.data));
  }, []);

  const imageBodyTemplate = (tools: { image_url: string }) => (
    <img src={`${tools.image_url}`} className="w-[100px] shadow border-round" />
  );

  return (
    <div className="flex gap-3 ml-[10px]">
      <div className="flex gap-3 ml-[10px] mt-[20px]">
        <Tabs>
          <TabList>
            <Tab>Recipes</Tab>
            <Tab>Categories</Tab>
            <Tab>Tools</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <CanvasRecipe collections={collections} tools={tools} />

              <TableContainer>
                <Table size="lg">
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Collection</Th>
                      <Th>Image</Th>
                      <Th>Category</Th>
                      <Th>Options</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {recipes.map((recipe, index) => (
                      <Tr key={index}>
                        <Td>{recipe.name}</Td>
                        <Td>{recipe.collection_id}</Td>
                        <Td>
                          <img className="w-[100px]" src={recipe.image_url} />
                        </Td>
                        {recipe.categories_id.map((cate, index) => (
                          <Td key={index}>{cate.name}</Td>
                        ))}
                        <Td>
                          <Button
                            onClick={() => {
                              setShowDel(!showDel);
                              return (
                                <DeleteRecipe
                                  recipe={recipe}
                                  showDel={showDel}
                                />
                              );
                            }}
                            className="ml-[10px]"
                          >
                            Delete
                          </Button>

                          <EditRecipe />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <CanvasCateg collections={collections} />
              <DataTable value={categories} tableStyle={{ minWidth: "50rem" }}>
                <Column field="name" header="Name" />
                <Column field="collection_name" header="Collection" />
                <Column field="_id" header="ID" />
              </DataTable>
            </TabPanel>
            <TabPanel>
              <CanvasTools />
              <DataTable value={tools} tableStyle={{ minWidth: "50rem" }}>
                <Column field="name" header="Name" />
                <Column
                  field="image_url"
                  header="Collection"
                  body={imageBodyTemplate}
                />
                <Column field="_id" header="ID" />
              </DataTable>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
