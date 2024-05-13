import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from './SearchHeaderOptions';

const SearchHeader = () => {
  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex w-full p-6 items-center justify-between '>
            <Link href={"/"}>
                <Image 
                    width="120" 
                    height="40"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkgOhlTHPFvrSOLnM-BMQ7JQUyPd_6pvvW-GpnWJO1A&s"
                >

                </Image>
            </Link>
            <div className='flex-1'>
                <SearchBox />
            </div>
            <div className='hidden md:inline-flex gap-2 '>
                <RiSettings3Line className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer " />
                <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer " />
            </div>
            <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2'>
                Sign in
            </button>
        </div>
        <SearchHeaderOptions />
    </header>
  )
}

export default SearchHeader