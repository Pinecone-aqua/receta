import { createContext, useContext, useEffect, useState } from "react";
import { NewsType, OthersContextType, PropType } from "../util/Types";

const othersContext = createContext<OthersContextType>({} as OthersContextType);
export const useOthers = () => useContext(othersContext);

export default function OthersProvider({ children }: PropType) {
  const [activePage, setActivePage] = useState<string | null>("");
  const [news, setNews] = useState<NewsType[]>([]);

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
        news,
        setNews,
      }}
    >
      {children}
    </othersContext.Provider>
  );
}
