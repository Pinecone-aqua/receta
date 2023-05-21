import React from "react";
import { motion } from "framer-motion";

/** this is to FPO generate 5 links for the nav **/
const linkList = [{}, {}, {}, {}, {}];

const navStyles = {
  display: "flex",
  position: "fixed",
  alignItems: "center",
  justifyContent: "space-between",
  height: "6rem",
  padding: "0 2rem",
  width: "calc(100vw - 4rem)",
  left: "0",
};

const navLinksWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "50%",
};
