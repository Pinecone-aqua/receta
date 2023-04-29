import Link from "next/link";
import SideBarLine from "../../public/SideBarLine";
import Collection from "./main/Collection";
import { useProduct } from "@/context/ProductContext";
import { BsDot } from "react-icons/bs";
import SubOur from "./ourStory/SubOur";

export default function SideBar(): JSX.Element {
  const { activePage, setActivePage } = useProduct();
  return (
    <div className="flex my-auto">
      <SideBarLine />
      <ul className="flex-col my-auto justify-around text-currentColor text-md h-[50vh] sm:hidden md:flex lg:flex ps-3">
        {Pages.map((page, index) => (
          <Link
            href={page.url}
            key={index}
            className={activePage == page.name ? "text-[30px]" : ""}
            onClick={() => {
              setActivePage(page.name), localStorage.setItem("page", page.name);
            }}
          >
            <div className="flex">
              {activePage == page.name && <BsDot className="mt-2 ms-[-10px]" />}
              {page.name}
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export const Pages = [
  { name: "Main", subPage: <Collection />, url: "../" },
  { name: "Our Story", url: "../our", subPage: <SubOur /> },
  { name: "Advice", url: "../advice" },
  { name: "Membership", url: "../member" },
  { name: "Shop", url: "../shop" },
];
