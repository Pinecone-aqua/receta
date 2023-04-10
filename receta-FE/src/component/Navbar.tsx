import Login from "./Login";

export default function Navbar(): JSX.Element {
  return (
    <header className="bg-red-300">
      <ul className="list-none flex  justify-between container mx-auto p-1">
        <li>receta.</li>
        <li>search</li>
        <Login />
      </ul>
    </header>
  );
}
