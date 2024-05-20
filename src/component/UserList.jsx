import React from "react";
import UserCard from "./UserCard";
// import { useFilterHook } from "../utils/useFilterHook";
// import userData from "../data.json";
import { useData } from "../context/dataContext";
// import { RiArrowDropDownLine } from "react-icons/ri";

const UserList = () => {
  const { userData } = useData();
  //   const dateFilterData = useFilterHook();
  console.log(userData, "bcjhdbs");

  return (
    <div>
      {/* <div className='w-[900px] flex items-center justify-between mb-5'>
        <div className='text-white font-semibold'>
          SEARCH RESULTS /
          <span className='text-sm font-thin'> JOBS-2049 results</span>
        </div>
        <div className='flex gap-3 items-center'>
          <span className='text-white'>Sort By</span>
          <div className='w-[100px] h-[35px] flex items-center justify-center gap-2 text-[#333333] bg-gray-200 rounded-sm p-2'>
            <button>Latest</button>
            <RiArrowDropDownLine />
          </div>
        </div>
      </div> */}
      <div className='bg-userlist w-full h-[100%] p-5 flex flex-col items-center justify-center gap-5'>
        {userData?.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
        Hello
      </div>
    </div>
  );
};

export default UserList;
