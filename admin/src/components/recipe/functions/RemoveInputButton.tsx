import React from "react";

interface RemoveButtonProps {
  index: number;
  onClick: (index: number) => void;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ index, onClick }) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <input
      value="Remove"
      className="px-[10px] bg-red-500"
      onClick={handleClick}
      type="button"
    />
  );
};

export default RemoveButton;
