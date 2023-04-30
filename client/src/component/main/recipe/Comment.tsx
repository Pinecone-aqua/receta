import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
import axios from "axios";
import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { CommentType } from "@/util/Types";
import moment from "moment";
import { MdOutlineDoNotDisturbAlt } from "react-icons/md";

export default function Comment({
  comments,
  recipe_id,
}: {
  recipe_id: string;
  comments: CommentType[];
}): JSX.Element {
  const [emoji, setEmoji] = useState<any>("");
  const [commentsArr, setCommentsArr] = useState<CommentType[]>(comments);
  const [showComment, setShowComment] = useState<boolean>(false);
  const { user } = useUser();

  function CommentHandler(e: any) {
    e.preventDefault();

    const data = {
      comment: e.target.comment.value,
      writer: { picture: user?.picture, name: user?.name },
      recipe_id: recipe_id,
      created_at: moment().format("l"),
    };

    axios.post("http://localhost:3003/comments/create", data).then((res) => {
      res.statusText === "Created"
        ? setCommentsArr([...commentsArr, data])
        : alert(res.data);
    });
    setEmoji("");
  }

  // function Moment() {
  //   const time = Number(moment().format("l"));
  //   console.log(time + 1 / 9 / 0);

  //   // commentsArr.map((data) =>
  //   //   console.log(Number(data.created_at) - time.splice("-"))
  //   // );
  // }

  // Moment();

  return (
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
            Comment
          </MenuButton>
          <MenuList className="p-10 lg:w-[900px] sm:w-[500px] absolute bottom-[56px]">
            {" "}
            <h2 className="border-b-2 py-[10px] text-[24px] font-medium">
              Comment
            </h2>
            {commentsArr.length == 0 && (
              <div className="flex text-gray-500">
                <MdOutlineDoNotDisturbAlt className="w-[25px] h-[25px] mt-[2px]" />{" "}
                empty
              </div>
            )}
            {commentsArr.map((data, index) => (
              <div className="" key={index}>
                <div key={index} className="flex py-4">
                  <img
                    className="rounded-[25px] w-[32px] h-[32px]"
                    src={data.writer.picture}
                  />
                  <p className="ms-[10px]"> {data.writer.name}</p>
                  <p className="ms-[10px] mt-1 text-[16px] text-gray-400">
                    {data.created_at}
                  </p>
                </div>
                <div className="ms-[40px] bg-slate-100 w-[80%] p-3 rounded-md">
                  {data.comment}
                </div>
              </div>
            ))}
            <div className="relative">
              <form className="flex w-full mt-[40px]" onSubmit={CommentHandler}>
                <div className="relative flex">
                  <picture className="absolute top-0 left-0 mt-[8px] ms-2 rounded-[25px]">
                    <img
                      className="w-[32px] h-[32px] rounded-[25px]"
                      src={user?.picture}
                      alt=""
                    />
                  </picture>

                  <input
                    type="text"
                    name="comment"
                    className={
                      emoji
                        ? `border border-gray-500 ps-[45px] p-[8px] w-[695px] rounded-[20px] w-[100%]`
                        : `border border-gray-500 ps-[45px] p-[8px] w-[300px] rounded-[20px] w-[100%]`
                    }
                    placeholder="write a comment"
                    value={emoji}
                    onChange={(e) => setEmoji(e.target.value)}
                  />
                  <GrEmoji
                    onClick={() => setShowComment(!showComment)}
                    className="hover:bg-gray-100 rounded-[25px] absolute cursor-pointer w-[30px] h-[30px] right-3 top-[8px]"
                  />
                </div>
                {showComment && (
                  <div className={`absolute z-10 top-12`}>
                    <Picker
                      data={data}
                      onEmojiSelect={(e: any) => {
                        setEmoji(emoji.concat(e.native));
                      }}
                    />
                  </div>
                )}

                {emoji ? (
                  <button type="submit">
                    <IoMdSend className="hover:bg-gray-100 cursor-pointer mt-[1px] ms-3 w-[30px] text-[#1e1e1e] h-[30px]" />
                  </button>
                ) : (
                  <IoMdSend className="text-gray-300 mt-[10px] ms-3 w-[30px] h-[30px]" />
                )}
              </form>
            </div>
          </MenuList>
        </>
      )}
    </Menu>
  );
}
