import { useContext, createContext, useState } from "react";
import { useData } from "./dataContext";

const SearchContext = createContext({});

const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  const { userData, setUserData } = useData();
  let tempData = [];

  const handleSearch = () => {
    // let formattedSearchInput = "";
    // if (searchInput[0] === "s" || searchInput[0] === "S") {
    //   formattedSearchInput = searchInput.split(" ").join("").toLowerCase();
    // } else {
    //   formattedSearchInput = searchInput.toLowerCase();
    // }
    tempData = userData.filter((item) => {
      const { first, last } = item.name;
      console.log([first, last].join(" "), "hgvhg");
      let name = [first, last].join(" ");

      return name.toLowerCase().includes(searchInput);
    });

    if (tempData.length === 0) return;
    else {
      setUserData(tempData);
    }
  };
  return (
    <SearchContext.Provider
      value={{ searchInput, setSearchInput, handleSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);
export { SearchProvider, useSearch };
