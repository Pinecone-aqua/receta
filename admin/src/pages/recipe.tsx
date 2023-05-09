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
import RecipeTable from "../components/recipe/RecipeTable";
import { useEffect } from "react";
import { useCocktail } from "../context/CocktailContext";

interface RecipePropType {
  categories: CategoryType[];
  collections: CollectionType[];
  recipes: CocktailType[];
  tools: ToolsType[];
}

export default function Recipe({
  categories,
  collections,
  recipes,
  tools,
}: RecipePropType): JSX.Element {
  const { setRecipes } = useCocktail();

  useEffect(() => {
    setRecipes(recipes);
  }, []);
  return (
    <Layout>
      <div className="mt-[40px]">
        <Tabs>
          <TabList className="mb-[20px] border-none">
            <Tab>Recipes</Tab>
            <Tab>Categories</Tab>
            <Tab>Tools</Tab>
          </TabList>

          <TabPanels className="border rounded-md  ps-[20px]">
            <RecipeTable
              collections={collections}
              categories={categories}
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
            <TabPanel>
              <CanvasTools />
              <TableContainer>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Image</Th>
                      <Th>ID</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {tools.map((tool, index) => (
                      <Tr key={index}>
                        <Td>{tool.name}</Td>
                        <Td>
                          <img
                            className="w-[80px] drop-shadow-2xl"
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
    </Layout>
  );
}

export async function getStaticProps() {
  const categories = await axios
    .get(`http://localhost:3003/categories/get`)
    .then((res) => res.data);

  const collections = await axios
    .get("http://localhost:3003/collections/get")
    .then((res) => res.data);

  const recipes = await axios
    .get("http://localhost:3003/recipes/all")
    .then((res) => res.data);

  const tools = await axios
    .get("http://localhost:3003/tools/get")
    .then((res) => res.data);

  return {
    props: {
      categories,
      collections,
      recipes,
      tools,
    },
  };
}
