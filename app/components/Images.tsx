"use client";
import React, { useState, MouseEvent } from "react";
import Image from "next/image";

// Constants for magnifier size and zoom level
const MAGNIFIER_SIZE = 250;
const ZOOM_LEVEL = 2.5;


const Images = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const [zoomable, setZoomable] = useState(true);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 100, y: 100, mouseX: 0, mouseY: 0 });

  // handle the click event on the thumbnail
  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

   // Event handlers
   const handleMouseEnter = (e: MouseEvent) => {
    let element = e.currentTarget;
    let { width, height } = element.getBoundingClientRect();
    setImageSize({ width, height });
    setZoomable(true);
    updatePosition(e);
};

const handleMouseLeave = (e: MouseEvent) => {
    setZoomable(false);
    updatePosition(e);
};

const handleMouseMove = (e: MouseEvent) => {
    updatePosition(e);
};

const updatePosition = (e: MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - left;
    let y = e.clientY - top;
    setPosition({
        x: -x * ZOOM_LEVEL + (MAGNIFIER_SIZE / 2),
        y: -y * ZOOM_LEVEL + (MAGNIFIER_SIZE / 2),
        mouseX: x - (MAGNIFIER_SIZE / 2),
        mouseY: y - (MAGNIFIER_SIZE / 2),
    });
};
  // work in progress modal
  //   const handleModal = (selectedImage) => {
  //     console.log("Image clicked", selectedImage)
  //   };

  return (
    <div className="">
      <div 
      // className="flex justify-center overflow-hidden h-64"
      className="flex justify-center w-auto h-72 relative overflow-hidden"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      >
        {/* Render the larger image */}
        {selectedImage && (
          <Image
            src={selectedImage}
            alt={`image`}
            priority={true}
            height="400"
            width="400"
            className="z-10"
          />
        )}
        <div
          style={{
            backgroundPosition: `${position.x}px ${position.y}px`,
            backgroundImage: `url(${selectedImage})`,
            backgroundSize: `${imageSize.width * ZOOM_LEVEL}px ${imageSize.height * ZOOM_LEVEL}px`,
            backgroundRepeat: 'no-repeat',
            display: zoomable ? 'block' : 'none',
            top: `${position.mouseY}px`,
            left: `${position.mouseX}px`,
            width: `${MAGNIFIER_SIZE}px`,
            height: `${MAGNIFIER_SIZE}px`,
          }}
          className={`z-50  rounded-full pointer-events-none absolute border-gray-500`}
        />
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
