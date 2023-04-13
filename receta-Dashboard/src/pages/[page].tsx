import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { pages } from "../components/SideBar";

export default function Pages(): JSX.Element {
  const router = useRouter();
  const query = router.query.page;

  return (
    <Layout>
      <div>
        {pages.map((page: PageType, index) => (
          <div key={index}>
            {query === page.name.toLocaleLowerCase() && page.comp}
          </div>
        ))}
      </div>
    </Layout>
  );
}
interface PageType {
  name: string;
  url: string;
  comp: JSX.Element;
}
