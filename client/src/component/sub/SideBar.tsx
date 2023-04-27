import Link from "next/link";

export default function SideBar(): JSX.Element {
  return (
    <ul className="flex-col justify-around my-auto border-s text-currentColor text-md h-[50vh] sm:hidden md:flex lg:flex ps-3">
      <Link href="/">Main</Link>
      <Link href="/">Our story</Link>
      <Link href="/">Advice</Link>
      <Link href="/">Journal</Link>
      <Link href="/">Membership</Link>
      <Link href="/">Shop</Link>
    </ul>
  );
}
