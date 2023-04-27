import { useProduct } from "@/context/ProductContext";
import Link from "next/link";
import Collection from "./Collection";

export default function SideBar(): JSX.Element {
  const { activePage, setActivePage } = useProduct();
  return (
    <ul className="flex-col justify-around my-auto border-s text-white text-md h-[50vh] sm:hidden md:flex lg:flex ps-3">
      {Pages.map((page, index) => (
        <Link
          key={index}
          href={page.url}
          onClick={() => {
            setActivePage(page.name),
              localStorage.setItem("page", `${page.name}`);
          }}
          className={
            activePage == page.name
              ? "text-[35px] w-[150px]"
              : "text=[10px w-[80px]"
          }
        >
          {page.name}
        </Link>
      ))}
    </ul>
  );
}
export const Pages = [
  { name: "Main", url: "../", subPage: <Collection /> },
  { name: "Our Story", url: "./our" },
  { name: "Advice", url: "../advice" },
  { name: "Shop", url: "../shop" },
];
