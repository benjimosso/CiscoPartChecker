"use client";
import SearchBar from "../components/SearchBar";
import SingleItem from "../components/SingleItem";
import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

export default function Home() {
  const [CiscoId, setCiscoId] = useState(null);
  const [data, setData] = useState([]);
  const [ciscoSingle, setCiscoSingle] = useState(null);

  useEffect(() => {
    const getData = async () => {
      // const response = await fetch("api/Cisco");
      // const cisco = await response.json();
      const { data, error } = await supabase.from("Cisco").select();

      if (error) console.log("Error fetching data from Supabase: ", error);
      setData(null);
      if (data) {
        setData(data);
        // console.log("Data from Supabase: ", data);
      }
    };
    getData();
  }, []);

  const fetchDataForId = async (id) => {
    // console.log("Fetching data for CiscoID: ", id);
    // const response = await fetch(`http://localhost:4000/Cisco/${id}`);
    // // const response = await fetch(`http://192.168.20.89:4000/Cisco/${id}`);
    // const single = await response.json();
    const { data: single, error } = await supabase
      .from("Cisco")
      .select()
      .eq("ID", id)
      .single();
    setCiscoSingle(single);
  };

  return (
    <main className="flex-1">
      {data && (
        <SearchBar
          ciscoData={data}
          CiscoId={CiscoId}
          setCiscoId={setCiscoId}
          fetchDataForId={fetchDataForId}
        />
      )}

      {ciscoSingle !== null && <SingleItem single={ciscoSingle} />}
    </main>
  );
}
