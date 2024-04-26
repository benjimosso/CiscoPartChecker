'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

export default function PaginationControls({hasNextPage, hasPrevPage, dataLength}) {
    const router = useRouter()
    const searchParams = useSearchParams()
  
    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '10'
    
  
    return (
      <div className='flex gap-2 m-6'>
        <button
          className='bg-blue-500 text-white p-1'
          disabled={!hasPrevPage}
          onClick={() => {
            router.push(`rackmounts/?page=${Number(page) - 1}&per_page=${per_page}`)
          }}>
            <GrFormPreviousLink />
        </button>
  
        <div>
          {page} / {Math.ceil(dataLength / Number(per_page))}
          
        </div>
  
        <button
          className='bg-blue-500 text-white p-1'
          disabled={!hasNextPage}
          onClick={() => {
            router.push(`rackmounts/?page=${Number(page) + 1}&per_page=${per_page}`)
          }}>
          <GrFormNextLink />
        </button>
      </div>
    )
}
