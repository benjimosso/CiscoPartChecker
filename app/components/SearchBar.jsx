"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";

export default function SearchBar({
  ciscoData,
  CiscoId,
  setCiscoId,
  fetchDataForId,
}) {
  const [activeSearch, setActiveSearch] = useState([]);
  const [placeholder, setPlaceholder] = useState("");

  const handleSubmit = (e) => {
    setPlaceholder(e.target.value);
    if (e.target.value === "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      ciscoData
        .map((c) => c.CiscoPN)
        .filter((c) => c.includes(e.target.value.toUpperCase()))
        .slice(0, 8)
    );
  };

  const handleClick = async (e, s) => {
    e.preventDefault();
    ciscoData.forEach((c) => {
      if (c.CiscoPN === s) {
        setCiscoId(c.id);
        setActiveSearch([]);
        fetchDataForId(c.id);
        setPlaceholder(c.CiscoPN);
      }
    });
  };

  return (
    <div className="flex flex-col items-center">
      <Image
        className="pt-7 pb-0"
        src={logo}
        alt="dhd logo"
        width={100}
        height={100}
      />

      <form className="w-[500px] relative pt-8 ">
        <div className="">
          <input
            onChange={(e) => handleSubmit(e)}
            type="search"
            placeholder="Type here"
            className="w-full p-4 rounded-full bg-slate-300 text-black border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            value={placeholder}
          />
        </div>

        {activeSearch.length > 0 && (
          <div className=" mt-1 p-4 bg-slate-300 text-black w-full rounded-xl left-1/2-translate-x-1/2 flex flex-col gap-2 overflow-auto">
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
    </div>
  );
}
