"use client";

import { RxCross2 } from "react-icons/rx";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {
    const searchParams = useSearchParams();
    const router  = useRouter();

    const searchTerm = searchParams.get("searchTerm" || "");
    const [term , setTerm] = useState(searchTerm || "");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(!term) {
            return;
        } else {
            router.push(`/search/web?searchTerm=${term}`)
        }
    }
  return (
    <form 
        className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
        onSubmit={handleFormSubmit}
    >
        <input 
            type="text" 
            value={term} 
            className="w-full focus:outline-none"
            onChange={(event) => setTerm(event.target.value)}

        />
        <RxCross2 
            className="text-2xl text-gray-500 cursor-pointer sm:mr-2" 
            onClick={() => setTerm("")}
        />
        <FaMicrophone className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
        <AiOutlineSearch 
            className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer" 
            onClick={handleFormSubmit}
        />

    </form>
  )
}

export default SearchBox