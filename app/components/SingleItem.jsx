import Link from "next/link";
import Images from "./Images";
import supabase from "../config/supabaseClient";


export default function SingleItem({ single }) {
  
  // Object.keys(single).map((item) => {
  //   console.log(item, single[item])
  // }) OPTION TO RENDER THINGS IN A LOOP

  return (
    <div className="flex flex-col items-center pb-8">
      {single.CiscoPN && (
        <div className=" ">
          <p className=" font-bold mt-16 text-2xl">{single.CiscoPN}</p>
        </div>
      )}
      <div>
        {single.images && <Images images={single.images} />}

        <div className="mt-1 p-6 grid grid-cols-2 gap-10 max-w-[900px] border-4 border-indigo-200">
          {single.Description && (
            <div className="flex">
              <h1 className="font-bold">Description: </h1>
              <p className="pl-2">{single.Description}</p>
            </div>
          )}

          {single.DeviceType && (
            <div className="flex">
              <h1 className="font-bold">Device Type: </h1>
              <p className="pl-2">{single.DeviceType}</p>
            </div>
          )}

          {single.FixedModular && (
            <div className="flex">
              <h1 className="font-bold">Fixed/Modular: </h1>
              <p className="pl-2">{single.FixedModular}</p>
            </div>
          )}

          {single.Rackmount && (
            <div className="flex">
              <h1 className="font-bold">Rackmount: </h1>
              <Link
                className="text-blue-700 pl-2"
                target="blank"
                href={`https://www.google.com/search?q=${single.Rackmount}`}
              >
                {single.Rackmount}
              </Link>
            </div>
          )}

          {single.Powers && (
            <div className="flex">
              <h1 className="font-bold">Power: </h1>
              <p className="pl-2">{single.Powers}</p>
            </div>
          )}

          {single.P2 && (
            <div className="flex">
              <h1 className="font-bold">Power 2: </h1>
              <p className="pl-2">{single.P2}</p>
            </div>
          )}

          {single.Fans && (
            <div className="flex">
              <h1 className="font-bold">Fans: </h1>
              <p className="pl-2">{single.Fans}</p>
            </div>
          )}

          {single.Accesories && (
            <div className="flex">
              <h1 className="font-bold">Accesories: </h1>
              <p className="pl-2">{single.Accesories}</p>
            </div>
          )}

          {single.Blank && (
            <div className="flex ">
              <h1 className="font-bold">Blank: </h1>
              <p className="pr-2 pl-1">{single.Blank}</p>
              {single.B2 ||
                (single.B3 && (
                  <p>
                    {single.B2}, {single.B3}
                  </p>
                ))}
            </div>
          )}

          {single.ConsoleOut && (
            <div className="flex">
              <h1 className="font-bold">ConsoleOut: </h1>
              <p className="pl-2">{single.ConsoleOut}</p>
            </div>
          )}

          {single.DIMS && (
            <div className="flex">
              <h1 className="font-bold">DIMS: </h1>
              <p className="pl-2">{single.DIMS}</p>
            </div>
          )}

          {single.Weight && (
            <div className="flex">
              <h1 className="font-bold">Weight: </h1>
              <p className="justify-end pl-2">{single.Weight} LBS</p>
            </div>
          )}
        </div>
      </div>
      <p className="pt-1 flex justify-center text-sm font-sans font-bold">
        ***some part numbers may not be correct ***
      </p>
        <div className="flex justify-center pt-4">
          <Link href="/edit/[id]" as={`/edit/${single.ID}`}>
            <p className="bg-indigo-500 text-white px-4 py-2 rounded-md">
              Edit
            </p>
          </Link>
        </div>
    </div>
  );
}
