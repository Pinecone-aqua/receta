import { useState } from "react";
import { ToolsType } from "@/src/util/Types";
import { Input, TabPanel } from "@chakra-ui/react";
import CreateTools from "@/src/components/tool/CreateTool";
import ToolsTable from "../tables/ToolsTable";

interface ToolsPropType {
  tools: ToolsType[];
}

export default function ToolsMain({
  tools
}: ToolsPropType): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSort(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  const filteredData = tools.filter((one: { name: string }) =>
    one.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedData = filteredData.sort(
    (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));

  return (
    <TabPanel className="">
      <div className="w-full flex justify-between items-center">
        <CreateTools />
        <Input onChange={handleSort}
          type="text"
          name="search"
          width="300px"
          className="pl-[10px] focus:outline-none h-[30px] border-b bg-[#fff] text-[#454ADE] text-md mr-[20px]"
          placeholder="search" size='sm' />
        {/* <input
          onChange={handleSort}
          type="text"
          name="search"
          className="w-1/4 pl-[10px] focus:outline-none h-[30px] border-b placeholder-[#454ADE] bg-[#fff] text-[#454ADE] text-md mr-[20px]"
          placeholder="search"
        /> */}
      </div>
        <ToolsTable sortedData={sortedData}/>
    </TabPanel>
  );
}
