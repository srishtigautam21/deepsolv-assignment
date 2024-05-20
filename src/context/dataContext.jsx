import { useContext, createContext, useState, useEffect } from "react";
import userJSONData from "../data.json";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  //   const getUsers = async () => {
  //     const response = await fetch(
  //       "https://job-portal-backend-drab.vercel.app/jobs"
  //     );
  //     const data = await response.json();

  //     setJobList(data.jobs);
  //   };
  useEffect(() => {
    if (userJSONData && userJSONData.results) setUserData(userJSONData.results);
  }, []);

  return (
    <DataContext.Provider value={{ userData, setUserData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);
export { DataProvider, useData };
