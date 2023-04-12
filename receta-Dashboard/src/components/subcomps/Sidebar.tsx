import { useRouter } from "next/navigation";

export default function Sidebar(): JSX.Element {
  const router = useRouter();

  return (
    <div className="w-72 min-h-screen bg-black pt-48">
      <div className="my-10 flex justify-center">
        <button
          onClick={(): void => router.push("/category")}
          className="bg-amber-500 text-black w-28 h-10"
        >
          Category
        </button>
      </div>
      <div className="my-10 flex justify-center">
        <button
          onClick={(): void => router.push("/collection")}
          className="bg-amber-500 text-black w-28 h-10"
        >
          Collection
        </button>
      </div>
      <div className="my-10 flex justify-center">
        <button
          onClick={(): void => router.push("/comment")}
          className="bg-amber-500 text-black w-28 h-10"
        >
          Comment
        </button>
      </div>
      <div className="my-10 flex justify-center">
        <button
          onClick={(): void => router.push("/recipe")}
          className="bg-amber-500 text-black w-28 h-10"
        >
          Recipe
        </button>
      </div>
      <div className="my-10 flex justify-center">
        <button
          onClick={(): void => router.push("/user")}
          className="bg-amber-500 text-black w-28 h-10"
        >
          User
        </button>
      </div>
    </div>
  );
}
