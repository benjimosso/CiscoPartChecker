"use client";
// components
import SearchBar from "../components/SearchBar";
import SingleItem from "../components/SingleItem";
import EditButton from "../components/EditButton";
// hooks
import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

export default function Home() {
  const [CiscoId, setCiscoId] = useState(null);
  const [data, setData] = useState([]);
  const [ciscoSingle, setCiscoSingle] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("Cisco").select();
      if (error) console.log("Error fetching data from Supabase: ", error);
      setData(null);
      if (data) {
        setData(data);
      }
    };
    getData();
  }, []);

  const fetchDataForId = async (id) => {
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
