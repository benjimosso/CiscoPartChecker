"use client";
import React, { useState } from "react";
import Image from "next/image";

const Images = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  // work in progress modal
  //   const handleModal = (selectedImage) => {
  //     console.log("Image clicked", selectedImage)
  //   };

  return (
    <div className="flex">
      <div className="flex flex-col justify-center pr-6">
        {/* Render small thumbnail images */}
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            height={150}
            width={150}
            onClick={() => handleThumbnailClick(image)}
            className="m-2 border-2 border-indigo-200 hover:border-indigo-500 cursor-pointer rounded-3xl"
          />
        ))}
      </div>
      <div className="flex justify-center mt-3 max-h-[340px] overflow-hidden">
        {/* Render the larger image */}
        {selectedImage && (
          <Image src={selectedImage} alt={`image`} height={500} width={500} className="rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default Images;
