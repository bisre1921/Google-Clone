import ImageSearchResult from "@/components/ImageSearchResult";
import Link from "next/link";

const ImageSearchPage = async ({searchParams}) => {
    const startIndex = searchParams.start || "1";

    await new Promise((resolve) => setTimeout(resolve , 5000));

    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
    );
    if(!response.ok) {
        throw new Error("something went wrong");
    }
    const data = await response.json();
    const results = data.items;
    if(!results) {
        return (
            <div className="flex flex-col justify-center items-center pt-10 ">
                <h1 className="text-3xl mb-4">No results found</h1>
                <p className="text-lg">
                    Try searching something else or go back to home page.
                    <Link className="text-blue-500" href="/">
                            Home
                    </Link>
                </p>
            </div>
        ) 
    }
    return (
        <div>
            {results && 
                <ImageSearchResult results={data} />
            }
        </div>
    )
};

export default ImageSearchPage;
