import { createContext, useContext, useEffect, useState } from "react";
import { OthersContextType, PropType } from "../util/Types";

const othersContext = createContext<OthersContextType>({} as OthersContextType);
export const useOthers = () => useContext(othersContext);

export default function OthersProvider({ children }: PropType) {
  const [activePage, setActivePage] = useState<string | null>("");

  useEffect(() => {
    localStorage.getItem("page")
      ? setActivePage(localStorage.getItem("page"))
      : setActivePage("Dashboard");
  }, []);

  return (
    <othersContext.Provider
      value={{
        activePage,
        setActivePage,
      }}
    >
      {children}
    </othersContext.Provider>
  );
}
