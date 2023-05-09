import { useUser } from "@/context/UserContext";
import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Rating } from "primereact/rating";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function RatingComp(): JSX.Element {
  const [value, setValue] = useState<any>(5);
  return (
    <>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              style={{
                backgroundColor: "#1e1e1e",
                color: "#FFFBF1",
                margin: "30px 0",
              }}
              rightIcon={
                isOpen ? (
                  <AiOutlineEye className="w-[25px] h-[25px]" />
                ) : (
                  <AiOutlineEyeInvisible className="w-[25px] h-[25px]" />
                )
              }
            >
              Rating
            </MenuButton>
            <MenuList className="px-[20px] absolute top-[-120px]">
              <Rating
                value={value}
                className="border border-[2px] border-[black] rounded-[20px] w-[180px] p-3"
                onChange={(e) => setValue(e.value)}
              />
            </MenuList>
          </>
        )}
      </Menu>
    </>
  );
}
