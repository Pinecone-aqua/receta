import Link from "next/link";
import SideBarLine from "../../../public/SideBarLine";

export default function SideBar(): JSX.Element {
  return (
    <div className="flex my-auto">
      <SideBarLine />
      <ul className="flex-col my-auto justify-around text-currentColor text-md h-[50vh] sm:hidden md:flex lg:flex ps-3">
        <Link href="/">Main</Link>
        <Link href="/">Our story</Link>
        <Link href="/">Advice</Link>
        <Link href="/">Journal</Link>
        <Link href="/">Membership</Link>
        <Link href="/">Shop</Link>
      </ul>
    </div>
  );
}
