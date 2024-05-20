import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useSearch } from "../context/searchContext";

const Navbar = () => {
  const { searchInput, setSearchInput, handleSearch } = useSearch();

  return (
    <div className='bg-navbar h-[80px] p-7 flex items-center justify-between'>
      <div className=' text-white text-xl'>User Directory</div>
      <div className='flex items-center justify-center w-[400px] h-[45px] bg-userlist rounded-[10px]'>
        <input
          type='text'
          className='bg-userlist text-white p-1 outline-none w-full m-2'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : "")}
          placeholder='Search'
        />
        <IoSearchOutline
          color='gray'
          cursor='pointer'
          className='m-2'
          onClick={() => handleSearch()}
        />
      </div>
    </div>
  );
};

export default Navbar;
