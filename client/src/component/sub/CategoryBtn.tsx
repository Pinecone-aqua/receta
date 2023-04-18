export default function CategoryBtn(props: {
  category: string;
  class: string;
}): JSX.Element {
  return (
    <button
      className={
        props.class == "active"
          ? `p-[5px] px-[20px] rounded-[25px] font-light text-currentColor bg-white border border-1`
          : `p-[5px] px-[20px] rounded-[25px] font-light text-white border border-1`
      }
    >
      {props.category}
    </button>
  );
}
