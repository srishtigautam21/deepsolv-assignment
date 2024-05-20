import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className='bg-userCard w-[840px] min-h-[110px] rounded-xl'>
      <div className='flex gap-5 p-4 items-center justify-between'>
        <div className='flex gap-5 items-center justify-center'>
          <img
            src={user.picture.medium}
            alt='user'
            style={{ objectFit: "cover", width: "90px", height: "90px" }}
          />
          <div>
            <div className='font-bold text-gray-200'>
              {user.name.first} {user.name.last}
            </div>
            <div className='flex flex-col'>
              <span className='text-gray-200'>
                {user.location.state}, {user.location.country}
              </span>
              <span className='text-gray-200'>{user.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
