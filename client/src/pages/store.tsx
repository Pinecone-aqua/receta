import Layout from "@/component/Layout";
import { useOthers } from "@/context/OthersContext";
import SearchIcon from "@/icons/SearchIcon";
import { ToolType } from "@/util/Types";
import axios from "axios";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Shop({ tools }: { tools: ToolType[] }): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const { setActivePage } = useOthers();

  function handleSort(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTools = filteredTools.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );
  return (
    <Layout>
      <div className="w-screen flex flex-col justify-center">
        <div className="w-full h-auto relative flex flex-col items-center justify-center">
          <img src="/Rectangle.png" className="w-full relative store-img" />
          <div className="w-full flex flex-col justify-center items-center absolute">
            <h5 className="font-bold text-white text-8xl font-poppins">
              STORE
            </h5>
            <div className="w-[608px] store-search-input h-[56px] flex items-center border border-[#424242] px-[23px] py-2 mt-[50px]">
              <input
                type="text"
                onChange={handleSort}
                placeholder="search tools"
                className="w-full italic placeholder-black focus:outline-none bg-transparent mr-[20px]"
              />
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center border-b border-[#dadada]">
          <div className="w-[1120px] flex flex-wrap gap-6 py-[50px] border-s-[0.5px] border-[#dadada] justify-center">
            {sortedTools.length > 0 ? (
              sortedTools.map((tool, index) => (
                <div
                  onClick={() => {
                    router.push(`../store/${tool._id}`);
                    localStorage.setItem("page", "");
                    setActivePage("");
                  }}
                  key={index}
                  className="w-[256px] h-[400px] cursor-pointer hover:drop-shadow-2xl "
                >
                  <img
                    className="w-full hover:bg-violet-600"
                    src={tool.image_url}
                  />
                  <div className="flex justify-center mt-[12px] text-lg">
                    <p>{tool.name}</p>
                  </div>
                  <div className="flex justify-center">
                    <p className="font-bold">price soon $</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-[1100px] text-center">
                <p className="text-[24px]">No tools found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

interface Props {
  tools: ToolType[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const tools = await axios
    .get(`http://localhost:3003/tools/get`)
    .then((res) => res.data);

  return {
    props: {
      tools: tools,
    },
  };
};
