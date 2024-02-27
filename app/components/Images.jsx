"use client";
import React, { useState } from "react";
import Image from "next/image";

const Images = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);


  // handle the click event on the thumbnail
  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  // work in progress modal
  //   const handleModal = (selectedImage) => {
  //     console.log("Image clicked", selectedImage)
  //   };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center overflow-hidden h-64">
        {/* Render the larger image */}
        {selectedImage && (
          <Image
            src={selectedImage}
            alt={`image`}
            priority={true}
            height="400"
            width="400"
            className="rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer w-96"
          />
        )}
      </div>
      <div className="flex  justify-center pr-6">
        {/* Render small thumbnail images */}
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            priority={true}
            alt={`Thumbnail ${index + 1}`}
            height="150"
            width="150"
            onClick={() => handleThumbnailClick(image)}
            className="m-2 border-2 border-gray-500 hover:border-indigo-500 cursor-pointer overflow-auto h-28"
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
