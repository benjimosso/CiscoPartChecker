// 'use client'
import SearchBar from "./components/SearchBar";
// import {useState, useEffect} from "react"

export default async function Home() {

  const response = await fetch('http://localhost:4000/Cisco')
  const ciscoData = await response.json()

  // const [data, setData] = useState([])

  // useEffect(() => {
  //     const getData = async () => {
  //         const response = await fetch('api/Cisco')
  //         const cisco = await response.json()
  //         setData(cisco)
  //     }
  //     getData()
  // }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {
        ciscoData && (
          <SearchBar ciscoData={ciscoData}/>
        )
      }
      
    </main>
  );
}
