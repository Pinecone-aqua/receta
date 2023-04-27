import axios from "axios";
import { useEffect, useState } from "react";
import CanvasRecipe from "./CanvasRecipe";
import CanvasCateg from "./CanvasCateg";
import CanvasTools from "./CanvasTools";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { TabPanel } from "primereact/tabview";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

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

  // const imageBodyTemplate = (products: any) => (
  //   <picture>
  //     <img
  //       src={`${products.image_url}`}
  //       alt={products.image_url}
  //       className="w-[80px] shadow border-round"
  //     />
  //   </picture>
  // );

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
                      <Th>ID</Th>
                      <Th>Image</Th>
                      <Th>Options</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {recipes.map((recipe, index) => (
                      <Tr key={index}>
                        <Td>{recipe.name}</Td>
                        <Td>{recipe.collection_id}</Td>
                        <Td>{recipe._id}</Td>
                        <img width="100px" src={recipe.image_url} />
                        <Td>
                          <DeleteRecipe
                            onClick={console.log(recipe._id)}
                            recipe={recipe}
                          />
                          <EditRecipe />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>

              {/* <DataTable value={recipes} tableStyle={{ minWidth: "50rem" }}>
                <Column field="name" header="Name" />
                <Column field="collection_id" header="Collection" />
                <Column field="categories_id.name" header="Categories" />
                <Column field="alcohol" header="Alcoholic" />
                <Column
                  field="image_url"
                  header="Image"
                  body={imageBodyRecipe}
                />
                
              </DataTable> */}
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
