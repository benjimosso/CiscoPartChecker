"use client";
import { cData } from "@/_data/data";
import { useState, useEffect } from "react";

export default function SearchBar() {
  const [activeSearch, setActiveSearch] = useState([]);
  const handleSubmit = (e) => {
    const words = cData.map(c => c["Cisco PN"])
    if (e.target.value === "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      words.filter((c) => c.includes(e.target.value)).slice(0, 10)
    );
    console.log(activeSearch);
  };

  return (
    <>
      <form className="w-[500px] relative">
        <div className="relative">
          <input
            onChange={(e) => handleSubmit(e)}
            type="search"
            placeholder="Type here"
            className="w-full p-4 rounded-full bg-slate-800 text-white"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-800 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 bg-yellow-50 rounded"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        {activeSearch.length > 0 && (
          <div
            className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2
      -translate-x-1/2 flex flex-col gap-2"
          >
            {activeSearch.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        )}
      </form>
    </>
  );
}
