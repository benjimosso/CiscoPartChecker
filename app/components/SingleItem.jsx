import Link from "next/link";

export default function SingleItem({ single }) {
 
  return (
    <div className="mt-7 p-10 grid grid-cols-2 gap-5 border-4 border-indigo-200">
      {single.CiscoPN && (
        <div className="flex ">
          <h1 className="font-bold">Part Number: </h1>
          <p className="pl-1">{single.CiscoPN}</p>
        </div>
      )}

      {single.Description && (
        <div className="flex">
          <h1 className="font-bold">Description: </h1>
          <p>{single.Description}</p>
        </div>
      )}

      {single.DeviceType && (
        <div className="flex">
          <h1 className="font-bold">Device Type: </h1>
          <p>{single.DeviceType}</p>
        </div>
      )}

      {single.FixedModular && (
        <div className="flex">
          <h1 className="font-bold">Fixed/Modular: </h1>
          <p>{single.FixedModular}</p>
        </div>
      )}

      {single.Rackmount && (
        <div className="flex">
          <h1 className="font-bold">Rackmount: </h1>
          <Link className="text-blue-700 pl-2" target="blank" href={`https://www.google.com/search?q=${single.Rackmount}`}>
            {single.Rackmount}
          </Link>
        </div>
      )}

      {single.Powers && (
        <div className="flex">
          <h1 className="font-bold">Power: </h1>
          <p>{single.Powers}</p>
        </div>
      )}

      {single.P2 && (
        <div className="flex">
          <h1 className="font-bold">Power 2: </h1>
          <p>{single.P2}</p>
        </div>
      )}

      {single.Fans && (
        <div className="flex">
          <h1 className="font-bold">Fans: </h1>
          <p>{single.Fans}</p>
        </div>
      )}

      {single.Accesories && (
        <div className="flex">
          <h1 className="font-bold">Accesories: </h1>
          <p>{single.Accesories}</p>
        </div>
      )}

      {single.Blank && (
        <div className="flex justify-between">
          <h1 className="font-bold">Blank: </h1>
          <p>{single.Blank}</p>
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
          <p>{single.ConsoleOut}</p>
        </div>
      )}

      {single.DIMS && (
        <div className="flex">
          <h1 className="font-bold">DIMS: </h1>
          <p>{single.DIMS}</p>
        </div>
      )}

      {single.Weight && (
        <div className="flex">
          <h1 className="font-bold">Weight: </h1>
          <p className="justify-end">{single.Weight} LBS</p>
        </div>
      )}
    </div>
  );
}
