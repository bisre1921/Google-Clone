import Link from 'next/link'
import React from 'react'
import PaginationButtons from './PaginationButtons'

const ImageSearchResult = ({results}) => {
  return (
    <div className='pb-40 sm:pb-24 pt-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 gap-4'>
            {results.items.map((result) => (
                <div className='mb-8 ' key={result.link}>
                    <div className='group'>
                        <Link className='' href={result.image.contextLink}>
                            <img 
                                src={result.link} 
                                alt={result.title} 
                                className='h-60 group-hover:shadow-xl w-full object-cover transition-shadow '
                            />
                        </Link>
                        <Link href={result.image.contextLink}>
                           <h2 className='group-hover:underline truncate text-xl '>{result.title}</h2>
                        </Link>
                        <Link href={result.image.contextLink}>
                            <p className='group-hover:underline text-gray-600'>{result.displayLink}</p>                        </Link>
                    </div>
                </div> 
                
            ))}
        </div>
        <div className='ml-16 '>
            <PaginationButtons />
        </div>
    </div>
  )
}

export default ImageSearchResult