import axios from "axios";
import CanvasCateg from "../components/sub/creating/CreateCategory";
import CanvasTools from "../components/sub/creating/CreateTool";
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
} from "@/src/types/types";
import Layout from "../components/Layout";
import RecipeTable from "../components/sub/recipe/RecipeTable";

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
  console.log("categories:", categories);
  console.log("collections:", collections);
  return (
    <Layout>
      <div className="w-full flex justify-center gap-3 ml-[10px]">
        <div className="w-3/5 ml-[10px] mt-[20px]">
          <Tabs>
            <TabList>
              <Tab>Recipes</Tab>
              <Tab>Categories</Tab>
              <Tab>Tools</Tab>
            </TabList>

            <TabPanels>
              <RecipeTable
                collections={collections}
                recipes={recipes}
                categories={categories}
                tools={tools}
              />
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
