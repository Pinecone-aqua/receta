import { Badge } from "flowbite-react";
import React from "react";
import Layout from "@/component/Layout";

export default function Home(): JSX.Element {
  return (
    <div>
      <Layout>
        <Badge color="gray">3 days ago</Badge>
      </Layout>
    </div>
  );
}
