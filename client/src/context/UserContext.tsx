import { PropType, UserContextType, UsersType } from "@/util/Types";
import React, { createContext, useContext, useState } from "react";

const userContext = createContext<UserContextType>({} as UserContextType);
//custom hook
export const useUser = () => useContext(userContext);

export default function UserProvider({ children }: PropType) {
  const [user, setUser] = useState<UsersType | null>();

  // useEffect(() => {
  //   if (localStorage.getItem("currentCollection"))
  //     setActiveBtn(localStorage.getItem("currentCollection"));
  // }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
