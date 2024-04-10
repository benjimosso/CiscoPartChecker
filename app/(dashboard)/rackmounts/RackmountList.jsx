"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
// components
import noImage from "../../assets/images/no-image-available.jpg";
// shadow components
import { Button } from "@/components/ui/button";

export default function RackmountList({ data, key }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/rackmounts/${data.id}`);
  };

  return (
    <div
      key={key}
      className="flex overflow-auto border-b-4 border-slate-200 items-center p-4 hover:bg-slate-100 justify-between"
    >
      <div className="flex items-center">
        {data.image ? (
          <Image
            src={data.image}
            alt="Rackmount Image"
            width={100}
            height={100}
            className="w-20 h-20"
          />
        ) : (
          <Image src={noImage} alt="No Image Available" className="w-20 h-20" />
        )}

        <ul className="flex flex-col pl-3">
          <li className=" hover:bg-slate-100 font-bold">{data.rackpn}</li>
          <li className="text-sm">Model# {data.rackpn}</li>
        </ul>
      </div>
      <Button onClick={(e) => handleClick(e)}>Select</Button>
    </div>
  );
}
