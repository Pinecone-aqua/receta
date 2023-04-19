export default function RecipeCard(): JSX.Element {
  return (
    <div className="min-w-[180px] w-[17%] mb-10 max-h-[340px] bg-white">
      <picture>
        <img
          src="../Rectangle.png"
          className="w-full h-[83%] object-cover"
          alt=""
        />
      </picture>
      <p>GIN</p>
      <p>Gin & Tonic</p>
    </div>
  );
}
