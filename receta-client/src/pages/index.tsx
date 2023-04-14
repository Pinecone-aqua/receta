import Navbar from "../component/Navbar";
import Category from "../component/sub/Category";
import { Badge } from "flowbite-react";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <div>
      <Navbar />
      <Category />
      <Badge color="gray">3 days ago</Badge>
    </div>
  );
}
