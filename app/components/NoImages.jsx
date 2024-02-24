import React from 'react'
import Image from "next/image";

export default function NoImages() {

    const noImage = 'https://opqkqhhqloevwevuydcs.supabase.co/storage/v1/object/sign/Pictures/No%20Image/no-image-available.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQaWN0dXJlcy9ObyBJbWFnZS9uby1pbWFnZS1hdmFpbGFibGUuanBnIiwiaWF0IjoxNzA4NzI5MTI4LCJleHAiOjE3NDAyNjUxMjh9.HTBeRe8AGqdig8RNP44Mj-8YH5XLfi97vwIY9m-IV3M&t=2024-02-23T22%3A58%3A48.185Z'

  return (
    <div className="flex flex-col">
    <div className="flex   overflow-hidden w-96 h-96">
      {/* Render the larger image */}
    
        <Image src={noImage} 
        alt={`image`} 
        height='400'
        width='400'
        priority={true}
        className="rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer w-96" />
    </div>
    <div className="h-32 w-32 ">
      {/* Render small thumbnail images */}
        <Image
          key={1}
          src={noImage}
          alt='no image available'
          priority={true}
          height='150'
          width='150'
          className="border-2 border-gray-500 hover:border-indigo-500 cursor-pointer  "
        />
    </div>
  </div>
  )
}
