import axios from "axios";
import { useEffect, useState } from "react";
import CanvasRecipe from "./CanvasRecipe";
import CanvasCateg from "./CanvasCateg";
import CanvasTools from "./CanvasTools";
import { TabView } from "primereact/tabview";
import { TabPanel } from "primereact/tabview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Recipe(): JSX.Element {
  const [collections, setCollections] = useState([]);
  const [tools, setTools] = useState([]);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3003/collections/get")
      .then((res) => setCollections(res.data));

    axios
      .get("http://localhost:3003/recipes/all")
      .then((res) => setRecipes(res.data));

    axios
      .get("http://localhost:3003/tools/get")
      .then((res) => setTools(res.data));
  }, []);

  const imageBodyTemplate = (products: any) => (
    <picture>
      <img
        src={`${products.image_url}`}
        alt={products.image_url}
        className="w-[80px] shadow border-round"
      />
    </picture>
  );

  const allowExpansion = (recipes: string | any[]) => recipes.length > 0;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex gap-3 ml-[10px]">
      <div className="flex gap-3 ml-[10px] mt-[20px]">
        <TabView
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        >
          <TabPanel header="Recipes">
            <CanvasRecipe collections={collections} tools={tools} />
            <DataTable value={recipes} tableStyle={{ minWidth: "50rem" }}>
              <Column field="name" header="Name"></Column>
              {/* (<Column header="Image" body={() => imageBodyTemplate} />) */}
              <Column field="category" header="Category"></Column>
              <Column field="quantity" header="Quantity"></Column>
            </DataTable>
          </TabPanel>
          <TabPanel header="Categories">
            <CanvasCateg collections={collections} />
          </TabPanel>
          <TabPanel header="Tools">
            <CanvasTools />
            <DataTable
              value={tools}
              tableStyle={{ minWidth: "20rem" }}
              className="w-full"
            >
              <Column field="name" header="Name" />
              {/* (<Column header="Image" body={imageBodyTemplate} />) */}
              <Column field="quantity" header="Quantity" />
            </DataTable>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}

<TabView className="w-full"></TabView>;
