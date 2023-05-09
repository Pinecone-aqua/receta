import * as React from "react";
import { motion } from "framer-motion";
import { Pages } from "../../../util/constVariables";
import Link from "next/link";
import { useOthers } from "../../../context/OthersContext";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = () => {
  const { setActivePage } = useOthers();
  return (
    <motion.li
      variants={variants}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col gap-5"
    >
      <h1 className="text-[26px] border-b p-3">receta.</h1>
      {Pages.map((page, index) => (
        <Link
          href={page.url}
          key={index}
          onClick={() => {
            localStorage.setItem("page", page.name);
            setActivePage(page.name);
          }}
          className="cursor-pointer py-2 hover:bg-[#DFDFDF] p-3 duration-200"
        >
          {page.name}
        </Link>
      ))}
    </motion.li>
  );
};
