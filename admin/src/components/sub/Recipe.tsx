import axios from "axios";
import { useEffect, useState } from "react";
import CanvasRecipe from "./CanvasRecipe";
import CanvasCateg from "./CanvasCateg";
import CanvasTools from "./CanvasTools";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
// import { Column } from "primereact/column";

export default function Recipe(): JSX.Element {
  const [collections, setCollections] = useState([]);
  const [tools, setTools] = useState([]);
  const [recipes, setRecipes] = useState([]);
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
  // console.log("col", collections);
  // console.log("tool", tools);
  // console.log("res", recipes);
  // console.log("cat", categories);

  const imageBodyTemplate = (tools: { image_url: string }) => (
    <img src={`${tools.image_url}`} className="w-[100px] shadow border-round" />
  );

  const imageBodyRecipe = (recipes: { image_url: string }) => (
    <img
      src={`${recipes.image_url}`}
      className="w-[100px] shadow border-round"
    />
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
              <DataTable value={recipes} tableStyle={{ minWidth: "50rem" }}>
                <Column field="name" header="Name" />
                <Column field="collection_id" header="Collection" />
                <Column field="categories_id.name" header="Categories" />
                <Column field="alcohol" header="Alcoholic" />
                <Column
                  field="image_url"
                  header="Image"
                  body={imageBodyRecipe}
                />
              </DataTable>
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
