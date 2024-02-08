import React from "react";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full bg-neutral-500">
    <div className="flex justify-center items-center"> 
      <FaCopyright />
      <p className="pl-4">Daniel Mosso</p>
    </div>
    </div>
  );
}
