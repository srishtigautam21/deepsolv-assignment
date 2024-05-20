import React from "react";
import UserCard from "./UserCard";

import { useData } from "../context/dataContext";

const UserList = () => {
  const { userData } = useData();
  return (
    <div>
      <div className='bg-userlist w-full h-[100%] p-5 flex flex-col items-center justify-center gap-5'>
        {userData?.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
