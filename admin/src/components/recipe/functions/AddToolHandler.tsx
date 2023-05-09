import React, { useState } from "react";
import Image from "next/image";

type Tool = {
  _id: string;
  name: string;
  image_url: string;
};

type ToolProps = {
  tools: Tool[];
  selectTools: string[];
  setSelectTools: string[];
};

const AddToolHandler: React.FC<ToolProps> = ({
  tools,
  selectTools,
  setSelectTools,
}) => {
  //   const [selectTools, setSelectTools] = useState<string[]>([]);

  function addToolHandler(id: string) {
    if (selectTools.includes(id)) {
      setSelectTools(selectTools.filter((tool) => tool !== id));
    } else {
      setSelectTools([...selectTools, id]);
    }
  }

  return (
    <>
      {tools.map((tool, index) => (
        <div
          className={
            selectTools.includes(tool._id)
              ? "w-[170px] py-[10px] border bg-slate-300 flex flex-col items-center"
              : "w-[170px] py-[10px] border flex flex-col items-center"
          }
          key={index}
          onClick={() => addToolHandler(tool._id)}>
          <p className="">{tool.name}</p>
          <Image
            src={tool.image_url}
            alt="Landscape picture"
            height={80}
            width={80}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      ))}
    </>
  );
};

export default AddToolHandler;
