import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";

const HomeSearch = () => {
  return (
    <>
        <form className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
            <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
            <input type="text" className='flex-grow focus:outline-none' />
            <FaMicrophone className='text-lg' />
        </form>
        <div className='flex flex-col gap-4 sm:flex-row justify-center mt-8'>
            <button className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-1 hover:ring-gray-200 focus:outline-none active:ring-gray-200 hover:shadow-md w-36 h-10 transition-shadow'>Google Search</button>
            <button className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-1 hover:ring-gray-200 focus:outline-none active:ring-gray-200 hover:shadow-md w-36 h-10 transition-shadow'>I am Feeling Lucky</button>
        </div>
    </>
  )
}

export default HomeSearch