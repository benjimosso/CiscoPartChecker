"use client";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import SingleItem from "./components/SingleItem";
import { useState, useEffect } from "react";

export default function Home() {

  const [CiscoId, setCiscoId] = useState(null);
  const [data, setData] = useState([]);
  const [ciscoSingle, setCiscoSingle] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("api/Cisco");
      const cisco = await response.json();
      setData(cisco);
    };
    getData();
  }, []);

  const fetchDataForId = async (id) => {
    console.log("Fetching data for CiscoID: ", id);
    const response = await fetch(`http://localhost:4000/Cisco/${id}`)
    const single = await response.json();
    setCiscoSingle(single)
    
  };

  return (
    <main className="grid grid-cols-9 min-h-screen">
      <NavBar/>
      <div className="col-span-8">
      {data && (
        <SearchBar
          ciscoData={data}
          CiscoId={CiscoId}
          setCiscoId={setCiscoId}
          fetchDataForId={fetchDataForId}
        />
      )}

      {ciscoSingle !== null && (
        <SingleItem single={ciscoSingle}/>
      )}
      </div>
    </main>
  );
}
