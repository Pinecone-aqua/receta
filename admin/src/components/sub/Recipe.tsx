import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CanvasRecipe from "./CanvasRecipe";
import CanvasCateg from "./CanvasCateg";
import CanvasTools from "./CanvasTools";
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
  TabPanel,
} from "@chakra-ui/react";
import { CocktailType, ToolsType, CategoryType } from "@/src/types/types";
import { Toast } from "primereact/toast";
import { ConfirmPopup } from "primereact/confirmpopup";
import { Button } from "primereact/button";
import CanvasEditButton from "./CanvasEditButton";

export default function Recipe(): JSX.Element {
  const [collections, setCollections] = useState([]);
  const [tools, setTools] = useState<ToolsType[]>([]);
  const [recipes, setRecipes] = useState<CocktailType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);

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
  console.log(tools);

  const confirm2 = (recipe: CocktailType) => {
    toast.current.show({
      severity: "info",
      sticky: true,

      content: (
        <div
          className="flex flex-column align-items-center "
          style={{ flex: "1" }}>
          <div className="text-center">
            <i
              className="pi pi-exclamation-triangle"
              style={{ fontSize: "3rem" }}
            />
            <div className="font-bold text-xl my-3">
              Та {recipe.name}-г устгахдаа итгэлтэй байна уу?
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
    <div className="w-full flex justify-center gap-3 ml-[10px]">
      <div className="w-3/5 ml-[10px] mt-[20px]">
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
                      <Th className="">Name</Th>
                      <Th className="">Collection</Th>
                      <Th className="">Image</Th>
                      <Th className="">Alcoholic</Th>
                      <Th className="">Options</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {recipes.map((recipe, index) => (
                      <Tr className="" key={index}>
                        <Td>{recipe.name}</Td>
                        <Td>{recipe.collection_id}</Td>
                        <Td className="p-0 flex justify-center" width="200px">
                          <img width="100px" src={recipe.image_url} />
                        </Td>
                        <Td>
                          {recipe.alcohol ? (
                            <div>alcoholic</div>
                          ) : (
                            <div>non alcoholic</div>
                          )}
                        </Td>
                        <Td>
                          <Toast ref={toast} />
                          <ConfirmPopup />
                          <div className="flex flex-col gap-3">
                            <CanvasEditButton
                              key={recipe._id}
                              recipe={recipe}
                              collections={collections}
                              categories={categories}
                              tools={tools}
                            />
                            <Button
                              onClick={() => {
                                confirm2(recipe);
                              }}
                              label="Delete"
                              className="p-button-danger h-[30px] p-button-outlined"
                            />
                          </div>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <TabPanel>
                <CanvasCateg collections={collections} />
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
            </TabPanel>
            <TabPanel>
              <CanvasTools />
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
                    {tools.map((tool, index) => (
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
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
