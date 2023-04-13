import { Sidebar } from "flowbite-react";
import Dashboard from "./sub/Dashboard";
import Recipe from "./sub/Recipe";
import Category from "./sub/Category";
import User from "./sub/User";

export default function SideBar(): JSX.Element {
  return (
    <div className="w-fit h-[98vh]">
      <Sidebar
        className="dark:bg-[rgb(21,32,43)]"
        aria-label="Sidebar with content separator example"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {pages.map((page, index) => (
              <Sidebar.Item
                key={index}
                href={page.url}
                onClick={() => localStorage.setItem("btn", page.name)}
              >
                {page.name}
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">Upgrade to Pro</Sidebar.Item>
            <Sidebar.Item href="#">Documentation</Sidebar.Item>
            <Sidebar.Item href="#">Help</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
interface PageType {
  name: string;
  url: string;
  comp: JSX.Element;
}
export const pages: PageType[] = [
  {
    url: "../dashboard",
    name: "Dashboard",
    comp: <Dashboard />,
  },
  {
    url: "../recipe",
    comp: <Recipe />,
    name: "Recipe",
  },
  {
    url: "../category",
    comp: <Category />,
    name: "Category",
  },
  {
    url: "../user",
    comp: <User />,
    name: "User",
  },
];
