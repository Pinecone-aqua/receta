import Sidebar from "../components/subcomps/Sidebar";

type childrenType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any;
}

export default function Layout({children}: childrenType): JSX.Element {
  return (
    <div className="w-screen h-auto flex flex-row justify-start">
        <Sidebar />
        <div className="flex-1 p-4 text-black">{children}</div>
      </div>
  );
}
