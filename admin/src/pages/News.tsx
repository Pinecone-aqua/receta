import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import Layout from "../components/Layout";
import CreateNews from "../components/new/CreateNewsCanvas";
import { useOthers } from "../context/OthersContext";
import { NewsType } from "../util/Types";

export default function News({
  newsData,
}: {
  newsData: NewsType[];
}): JSX.Element {
  const { news, setNews } = useOthers();
  useEffect(() => {
    setNews(newsData);
  }, []);
  return (
    <Layout>
      <div>
        <CreateNews />
        <TableContainer>
          <Table size="md">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Sub title</Th>
                <Th>Name</Th>
                <Th>Description</Th>
                <Th>Category</Th>
              </Tr>
            </Thead>
            <Tbody>
              {news?.map((categ, index) => (
                <Tr key={index}>
                  <Td>{categ.title}</Td>
                  <Td>{categ.subTitle}</Td>
                  <Td>{categ.name}</Td>
                  <Td>{categ.description}</Td>
                  <Td>{categ.category}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}

interface Props {
  newsData: NewsType[];
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const newsData = await axios
    .get(`http://localhost:3003/news/all`)
    .then((res) => res.data);

  return {
    props: {
      newsData: newsData,
    },
  };
};
