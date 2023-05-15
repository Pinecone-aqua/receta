import axios from "axios";
import CanvasCateg from "../components/category/CreateCategory";
import CanvasTools from "../components/tool/CreateTool";
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
import {
  CategoryType,
  CocktailType,
  CollectionType,
  ToolsType,
} from "../util/Types";
import Layout from "../components/Layout";
import RecipeTable from "../components/recipe/tables/RecipeTable";
import { useEffect } from "react";
import { useCocktail } from "../context/CocktailContext";
import { useOthers } from "../context/OthersContext";
import DeleteAlert from "../components/category/DeleteCategory";
import Delete from "../components/tool/DeleteTool";

interface RecipePropType {
  categoriesData: CategoryType[];
  collections: CollectionType[];
  recipes: CocktailType[];
  toolsData: ToolsType[];
}

export default function Recipe({
  categoriesData,
  collections,
  recipes,
  toolsData,
}: RecipePropType): JSX.Element {
  const { setRecipes } = useCocktail();
  const { setTools, tools, setCategories, categories } = useOthers();

  useEffect(() => {
    setRecipes(recipes);
    setTools(toolsData);
    setCategories(categoriesData);
  }, []);
  return (
    <Layout>
      <div className="mt-[40px]">
        <Tabs>
          <TabList className="mb-[20px] border-none" style={{ border: "none" }}>
            <Tab style={{ color: "teal" }}>Recipes</Tab>
            <Tab style={{ color: "teal" }}>Categories</Tab>
            <Tab style={{ color: "teal" }}>Tools</Tab>
          </TabList>

          <TabPanels className="border rounded-md ps-[20px]">
            <RecipeTable
              collections={collections}
              categories={categoriesData}
              tools={tools}
            />
            <TabPanel>
              <CanvasCateg collections={collections} />
              <TableContainer>
                <Table size="md">
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Collection</Th>
                      <Th>ID</Th>
                      <Th>Option</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {categories
                      .map((categ, index) => (
                        <Tr key={index}>
                          <Td>{categ.name}</Td>
                          <Td>{categ.collection_name}</Td>
                          <Td>{categ._id}</Td>
                          <Td className="text-center">
                            <DeleteAlert category={categ} />
                          </Td>
                        </Tr>
                      ))
                      .reverse()}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <CanvasTools />
              <TableContainer>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Image</Th>
                      <Th>ID</Th>
                      <Th>Option</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {tools
                      .map((tool, index) => (
                        <Tr key={index}>
                          <Td>{tool.name}</Td>
                          <Td>
                            <img
                              className="w-[80px] drop-shadow-2xl"
                              src={tool.image_url}
                            />
                          </Td>
                          <Td>{tool._id}</Td>
                          <Td className="text-center ps-4">
                            <Delete tool={tool} />
                          </Td>
                        </Tr>
                      ))
                      .reverse()}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const categoriesData = await axios
    .get(`http://localhost:3003/categories/get`)
    .then((res) => res.data);

  const collections = await axios
    .get("http://localhost:3003/collections/get")
    .then((res) => res.data);

  const recipes = await axios
    .get("http://localhost:3003/recipes/all")
    .then((res) => res.data);

  const toolsData = await axios
    .get("http://localhost:3003/tools/get")
    .then((res) => res.data);

  return {
    props: {
      categoriesData,
      collections,
      recipes,
      toolsData,
    },
  };
}
