import Recipes from "./Recipes";

export default function Popular(): JSX.Element {
  return (
    <div className="py-[100px] bg-[#FFFBF1]">
      <h2 className="container mx-[11.5%] text-3xl font-bold text-[#124822] mb-[6%]">
        Popular and easy to learn cocktails
      </h2>
      {/* <div className="container mx-auto flex justify-between"></div> */}
      <Recipes />
    </div>
  );
}
