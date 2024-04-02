"use client";
import { useState } from "react";
// import HtmlToPdf from "../../../helpers/htmlToPdf";
import generatePdfDocument from "../../../helpers/generatePdfDocument";
import { useRouter } from "next/navigation";
// import dynamic from "next/dynamic";
// const PDFDownloadLink = dynamic(
//   () => import("@react-pdf/renderer").then((mod) => mod. PDFDownloadLink),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   },
// );

export default function EditForm({ item }) {
  const router = useRouter();
  const [power, setPower] = useState("");
  const [power2, setPower2] = useState("");
  const [fan, setFan] = useState("");
  const [rackmount, setRackmount] = useState("");

  console.log(power, fan, rackmount);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // generatePdfDocument({
    //   title: "Cisco PDF",
    //   heading: "Cisco PDF",
    //   content: `The item is ${item.ciscopn} with the following options: Power: ${power}, Power 2: ${power2}, Fan: ${fan}, Rackmount: ${rackmount}`,
    //   file: "cisco.pdf",
    // }); 

    generatePdfDocument(power, power2, fan, rackmount, item.ciscopn, item.description, item.weight, item.dims);
    // router.push("/");
    
    
  };

  // IMPORTANT!! I need to check how many powers the unit uses. maybe I can add a row in the table to show the power and fan quantities.

  return (
    <form
      className="flex flex-col gap-4 w-2/3  mx-auto mt-8 p-4 border-2 border-gray-300 rounded-md bg-gray-200"
      onSubmit={handleSubmit}
    >
      {/* CISCO PN */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold pb-2">Cisco PN </h1>
        <p className="text-xl text-blue-700 pb-3 border-slate-600 border-b-2 ">
          {item.ciscopn}
        </p>
      </div>
      {/* DESCRIPTION */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold pb-2">Description </h1>
        <p className="text-xl text-blue-700 pb-3 border-slate-600 border-b-2 ">
          {item.description}
        </p>
      </div>
      {/* Rackmounts This can change if I need new table for rackmounts.*/}
      {Object.keys(item.rackmounts).length > 0 && (
        <div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold pb-2">Rackmount</h1>
            <select
              value={rackmount}
              onChange={(e) => setRackmount(e.target.value)}
            >
              <option value="none">Select Rackmount</option>
              <option value="No Rackmount"> No Rackmount</option>
              <option value={item.rackmounts.rackpn}>
                {item.rackmounts.rackpn}
              </option>
            </select>
          </div>
        </div>
      )}
      {/* Power */}
      {Object.keys(item.ciscopowers).length > 0 && (
        <div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold pb-2">Power</h1>
            <select value={power} onChange={(e) => setPower(e.target.value)}>
              <option value="none">Select Power</option>
              <option value="No Power"> No Power</option>
              {item.ciscopowers.map((power, index) => {
                return (
                  <option key={index} value={power.powers.power_pn}>
                    {power.powers.power_pn}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      )}
      {/* Second power */}
      {/* Power */}
      {Object.keys(item.ciscopowers).length > 0 && (
        <div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold pb-2">Second Power</h1>
            <select value={power2} onChange={(e) => setPower2(e.target.value)}>
              <option value="none">Select Power 2</option>
              <option value="No Power"> No Power</option>
              {item.ciscopowers.map((power, index) => {
                return (
                  <option key={index} value={power.powers.power_pn}>
                    {power.powers.power_pn}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      )}
      {/* Fans */}
      {Object.keys(item.ciscofans).length > 0 && (
        <div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold pb-2">Fan</h1>
            <select value={fan} onChange={(e) => setFan(e.target.value)}>
              <option value="none">Select Fan</option>
              <option value="No Fan"> No Fan</option>
              {item.ciscofans.map((fan, index) => {
                return (
                  <option key={index} value={fan.fans.fan_pn}>
                    {fan.fans.fan_pn}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      )}
      <button className="btn1 mt-16">Generate PDF</button>
    </form>
  );
}

{
  /* <div>
    <select>
      {Object.keys(item).map((key) => {
        return <option key={key} value={key}>{key}</option>
      })}
    </select>
   </div> */
}
