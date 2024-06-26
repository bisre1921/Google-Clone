"use client";

import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const PaginationButtons = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;

  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:gap-44 sm:px-0">
      {startIndex >= 10 && (
        <Link href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <IoChevronBackSharp className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <IoChevronForward  className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  )
}

export default PaginationButtons