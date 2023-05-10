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
import CreateNews from "../components/news/CreateNewsCanvas";
import DeleteAlert from "../components/news/DeleteNews";
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
      <div className="border p-4 rounded-md">
        <CreateNews />
        <TableContainer className="mt-5">
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Name</Th>
                <Th>Category</Th>
                <Th>Image</Th>
                <Th>Option</Th>
              </Tr>
            </Thead>
            <Tbody>
              {news
                .map((newsData, index) => (
                  <Tr key={index}>
                    <Td>{newsData.title}</Td>
                    <Td>{newsData.name}</Td>
                    <Td>{newsData.category}</Td>
                    <Td>
                      <img className="h-[80px]" src={newsData.image_url} />
                    </Td>
                    <Td>
                      <DeleteAlert newsData={newsData} />
                    </Td>
                  </Tr>
                ))
                .reverse()}
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
