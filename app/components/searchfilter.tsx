"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { useDebounce } from "use-debounce";

export default function Search({ mainpath, search }: { mainpath: string, search?: string}) {
  const router = useRouter();
  const [text, setText] = useState(search); // this gives me Warning: A component is changing an uncontrolled input to be controlled. (IN FIREFOX)
  const [query] = useDebounce(text, 750);
  const initialRender = useRef(true);
  
    
  useEffect(() => {
    // not sure if this is working... 
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!query) {
      router.push(`${mainpath}`);
    } else {
      router.push(`${mainpath}?search=${query}`);
    }
  }, [query, router, mainpath]);

  return (
    <div className="relative rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <IoSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Search..."
        className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
}
