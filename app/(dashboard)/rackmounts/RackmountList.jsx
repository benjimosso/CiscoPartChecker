"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
// components
import noImage from "../../assets/images/no-image-available.jpg";
// shadow components
import { Button } from "@/components/ui/button";

export default function RackmountList({ data, entries }) {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState(entries);

  // const handleFilter = (e) => {
  //   e.preventDefault();
  //   // filter the rackmounts
  //   console.log(e)
  //   const filtered = data.filter((r) => r.rackpn.includes(e.target.value));
  //   console.log(filtered)
  //   setFilteredData(filtered);
  // };

  const handleClick = (e, id) => {
    e.preventDefault();
    router.push(`/rackmounts/${id}`);
    console.log(e)
  };

  return (
    <div className="">
      {/* <input type="text" placeholder="Filter RCK" className="border border-slate-400" onChange={(e) => handleFilter(e)}/> */}
      {entries.map((r) => (
        <div
        key={r.id}
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
            <li className=" hover:bg-slate-100 font-bold">{r.rackpn}</li>
            <li className="text-sm">Model# {r.rackpn}</li>
          </ul>
          
        </div>
        <Button onClick={(e) => handleClick(e, r.id)}>Select</Button>
      </div>
      ))}
    </div>
  );
}
