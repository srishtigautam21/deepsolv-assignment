import React from "react";
// import companyImg from "../assets/appleimg.png";

const UserCard = ({ user }) => {
  // console.log(user.picture.thumbnail);
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

      {/* <div className='bg-cardFooter h-[60px] p-3 rounded-bl-xl rounded-br-xl flex items-center justify-between'>
        <div className='text-gray-200'>
          <span>Posted {job.datePosted} | </span>
          <span> 10 applicants</span>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <button className='w-[150px] h-[36px] bg-teal-600 text-white rounded-2xl hover:cursor-pointer hover:bg-teal-400'>
            Apply now
          </button>
          <BsBookmark className='w-8 h-8 text-white' />
        </div>
      </div> */}
    </div>
  );
};

export default UserCard;
