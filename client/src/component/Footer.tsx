import { BsArrowRightShort } from "react-icons/bs";

export default function Footer(): JSX.Element {
  return (
    <footer className="flex place-content-center bg-[#1e1e1e] text-center p-[80px] text-white">
      <div className="motion-div">
        <h2 className="text-[32px] font-bold cursor-pointer pb-[40px]">
          receta.
        </h2>
        <h5 className="text-lg pb-5">Сүүлийн үеийн мэдээлэл авч байх</h5>
        <div className="relative mb-3">
          <input
            type="email"
            className="peer border  min-h-[auto] min-w-[400px] rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          />
          <BsArrowRightShort className="absolute top-[4px] right-0 w-[30px] h-[30px]" />
          <label
            htmlFor="exampleFormControlInputEmail"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Email input
          </label>
        </div>
        <input
          type="checkbox"
          className="text-[#267F40] border-gray-200 rounded"
        />
        <label className="ms-3 text-[#267F40]" htmlFor="">
          Би нууцлалын нөхцлийг зөвшөөрч байна
        </label>
      </div>
    </footer>
  );
}
