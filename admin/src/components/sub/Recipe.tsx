import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CanvasRecipe from "./CanvasRecipe";
import CanvasCateg from "./CanvasCateg";
import CanvasTools from "./CanvasTools";
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
  Tabs,
  TabList,
  Tab,
  TabPanels,
} from "@chakra-ui/react";
import { CocktailType } from "@/src/types/types";
import { Toast } from "primereact/toast";
import { ConfirmPopup } from "primereact/confirmpopup";
import { Button } from "primereact/button";

export default function Recipe(): JSX.Element {
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

  const toast = useRef<null | any>(null);

  const confirm2 = (recipe: CocktailType) => {
    toast.current.show({
      severity: "info",
      sticky: true,

      content: (
        <div
          className="flex flex-column align-items-center"
          style={{ flex: "1" }}
        >
          <div className="text-center">
            <i
              className="pi pi-exclamation-triangle"
              style={{ fontSize: "3rem" }}
            ></i>
            <div className="font-bold text-xl my-3">
              Та {recipe.name}-г устгахдаа итгэлтэй байна у?
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => {
                axios
                  .delete(
                    `http://localhost:3003/recipes/delete?id=${recipe._id}`
                  )
                  .then(
                    (res) =>
                      res.statusText == "ok" &&
                      toast.current.show({
                        severity: "success",
                      })
                  );
                toast.current.clear();
              }}
              type="button"
              label="Confirm"
              className="p-button-success w-6rem"
            />
            <Button
              onClick={() => toast.current.clear()}
              type="button"
              label="Cancel"
              className="p-button-warning w-6rem"
            />
          </div>
        </div>
      ),
    });
  };

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
            <TabPanels>
              <CanvasRecipe collections={collections} tools={tools} />
              <TableContainer>
                <Table size="lg">
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Collection</Th>
                      <Th>Image</Th>
                      <Th>Options</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {recipes.map((recipe, index) => (
                      <Tr key={index}>
                        <Td>{recipe.name}</Td>
                        <Td>{recipe.collection_id}</Td>
                        <Td>
                          <img width="100px" src={recipe.image_url} />
                        </Td>
                        <Td>
                          <Toast ref={toast} />
                          <ConfirmPopup />
                          <div className="">
                            <Button
                              onClick={() => {
                                confirm2(recipe);
                              }}
                              label="Delete"
                              className="p-button-danger p-button-outlined"
                            ></Button>
                          </div>
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
            </TabPanels>
            <TabPanels>
              <CanvasCateg collections={collections} />
              <DataTable value={categories} tableStyle={{ minWidth: "50rem" }}>
                <Column field="name" header="Name" />
                <Column field="collection_name" header="Collection" />
                <Column field="_id" header="ID" />
              </DataTable>
            </TabPanels>
            <TabPanels>
              <CanvasTools />
              <DataTable value={tools} tableStyle={{ minWidth: "50rem" }}>
                <Column field="name" header="Name" />
                {/* <Column
                  field="image_url"
                  header="Collection"
                  body={imageBodyTemplate}
                /> */}
                <Column field="_id" header="ID" />
              </DataTable>
            </TabPanels>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
