import Link from "next/link";

export default function SingleItem({ single }) {
  return (
    <div className="">
      {single.CiscoPN && (
        <div className="flex justify-center ">
          <p className=" font-bold mt-16 text-2xl">{single.CiscoPN}</p>
        </div>
      )}
      <div className="mt-1 p-6 grid grid-cols-2 gap-5 max-w-[900px] border-4 border-indigo-200">
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
  );
}
