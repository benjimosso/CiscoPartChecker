"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

// idea: add searchbar to the navbar component, this will allow the user to search for items from any page.

export default function SearchBar({
  ciscoData,
  // CiscoId,
  // setCiscoId,
  // fetchDataForId,
}) {
  const router = useRouter();
  const [activeSearch, setActiveSearch] = useState([]);
  const [placeholder, setPlaceholder] = useState("");

  const handleSubmit = async (e) => {
    setPlaceholder(e.target.value);
    if (e.target.value === "") {
      setActiveSearch([]);
      return false;
    }

    // fetch data from the Supabase
    const supabase = createClient();
    const { data, error } = await supabase
      .from("cisco")
      .select("ciscopn")
      .ilike("ciscopn", `%${e.target.value.toUpperCase()}%`)
      .limit(8);

    if (error) {
      console.error(error);
    }

    setActiveSearch(
      // ciscoData
      data.map((c) => c.ciscopn)
      // .filter((c) => c.includes(e.target.value.toUpperCase()))
      // .slice(0, 8)
    );
  };

  const handleClick = async (e, s) => {
    e.preventDefault();
    ciscoData.forEach((c) => {
      if (c.ciscopn === s) {
        // setCiscoId(c.id);
        setActiveSearch([]);
        // fetchDataForId(c.id);
        setPlaceholder(c.ciscopn);
        router.push(`/item/${c.id}`);
      }
    });
  };

  return (
    <div className="flex flex-col justify-center">
      <form className="w-[400px] relative pt-8 ">
        <div className="">
          <input
            onChange={(e) => handleSubmit(e)}
            type="search"
            placeholder="Type here"
            className="w-full p-2 rounded-sm bg-white text-black border border-border focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            value={placeholder}
          />
        </div>

        {activeSearch.length > 0 && (
          <div className="absolute  p-2 bg-slate-50 text-black w-full  left-1/2-translate-x-1/2 flex flex-col gap-2 overflow-auto z-50">
            {activeSearch.map((s, i) => (
              <button
                onClick={(e) => handleClick(e, s)}
                className=" border-2 p-2 rounded-sm hover:bg-slate-400 "
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
