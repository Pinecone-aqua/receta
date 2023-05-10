import AddInputButton from "./sub/AddInputButton";
import RemoveButton from "./sub/RemoveInputButton";

interface ItemProps {
  item: string[];
  setItem: React.Dispatch<React.SetStateAction<string[]>>;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const InputMapping: React.FC<ItemProps> = ({
  item,
  setItem,
  inputText,
  setInputText,
}) => (
  <>
    {" "}
    <div className="flex flex-col gap-2 pt-[20px] pb-[20px]">
      {item.map((single, index) => (
        <div
          key={`input-container-${index}`}
          className="h-full flex items-center"
        >
          <p className="w-[200px] m-0 bg-gray-400">{single}</p>
          <RemoveButton
            ingredient={item}
            setIngredient={setItem}
            index={index}
          />
        </div>
      ))}
    </div>
    <AddInputButton
      text={inputText}
      name="addIngredient"
      setInput={setInputText}
      func={() => {
        setItem([...item, inputText]);
        setInputText("");
      }}
    />
  </>
);

export default InputMapping;
