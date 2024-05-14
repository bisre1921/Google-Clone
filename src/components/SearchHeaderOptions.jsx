"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

const SearchHeaderOptions = () => {
    const pathName = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTerm");

    const selectTab = (tab) => {
        router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`);
    }

  return (
    <div className="flex gap-2 select-none border-b-1 w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm ">
        <div 
            className={`flex items-center gap-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathName === "/search/web" && "!text-blue-600 !border-b-blue-600"} `}
            onClick={() => selectTab("All")}
        >
            <AiOutlineSearch className='text-md '/>
            <p>All</p>
        </div>
        <div 
            className={`flex items-center gap-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathName === "/search/image" && "!text-blue-600 !border-b-blue-600"} `}
            onClick={() => selectTab("Images")}
        >
            <AiOutlineCamera className='text-md '/>
            <p>Images</p>
        </div>
    </div>
  )
}

export default SearchHeaderOptions