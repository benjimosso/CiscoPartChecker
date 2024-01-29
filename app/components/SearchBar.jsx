"use client";
import { cData } from "@/_data/data";
import { useState, useEffect } from "react";
import SingleItem from "./SingleItem";
import Image from "next/image";
import logo from "../assets/images/logodhd.webp";

export default function SearchBar({
  ciscoData,
  CiscoId,
  setCiscoId,
  fetchDataForId,
}) {
  const [activeSearch, setActiveSearch] = useState([]);

  const handleSubmit = (e) => {
    if (e.target.value === "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      ciscoData
        .map((c) => c.CiscoPN)
        .filter((c) => c.includes(e.target.value))
        .slice(0, 10)
    );
  };

  const handleClick = async (e, s) => {
    e.preventDefault();
    ciscoData.forEach((c) => {
      if (c.CiscoPN === s) {
        setCiscoId(c.id);
        setActiveSearch([]);
        fetchDataForId(c.id);
      }
    });
  };

  return (
    <>
      <div className="">
        <Image src={logo} alt="dhd logo" width={200} height={200} />
      </div>
      <form className="w-[500px] relative pt-8 ">
        <div className="relative">
          <input
            onChange={(e) => handleSubmit(e)}
            type="search"
            placeholder="Type here"
            className="w-full p-4 rounded-full bg-slate-600 text-white"
          />
        </div>

        {activeSearch.length > 0 && (
          <div
            className="absolute top-16 p-4 bg-slate-600 text-white w-full rounded-xl left-1/2
      -translate-x-1/2 flex flex-col gap-2"
          >
            {activeSearch.map((s, i) => (
              <button
                onClick={(e) => handleClick(e, s)}
                className=" border-2 p-2 rounded-full hover:bg-slate-400 "
                key={i}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </form>
    </>
  );
}
