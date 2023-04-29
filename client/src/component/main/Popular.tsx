import Recipes from "./Recipes";

export default function Popular(): JSX.Element {
  return (
    <div className=" bg-[#FFFBF1]">
      <h2 className="container mx-auto text-3xl font-bold text-[#124822] py-[2%]">
        Popular and easy to learn cocktails
      </h2>
      {/* <div className="container mx-auto flex justify-between"></div> */}
      <Recipes />
    </div>
  );
}
