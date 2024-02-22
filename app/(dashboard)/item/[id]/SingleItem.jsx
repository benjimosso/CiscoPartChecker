import Link from "next/link";
import Images from "../../../components/Images";
import EditButton from "../../../components/EditButton";

export default function SingleItem({ single }) {
    


  // Object.keys(single).map((item) => {
  //   console.log(item, single[item])
  // }) OPTION TO RENDER THINGS IN A LOOP

  return (
    <div className="flex flex-col items-center pb-8">
      {single.ciscopn && (
        <div className=" ">
          <p className=" font-bold mt-16 text-2xl">{single.ciscopn}</p>
        </div>
      )}
      <div>
        {single.images && <Images images={single.images} />}

        <div className="mt-1 p-6 grid grid-cols-2 gap-10 max-w-[900px] border-4 border-indigo-200">
          {single.description && (
            <div className="flex">
              <h1 className="font-bold">Description: </h1>
              <p className="pl-2">{single.description}</p>
            </div>
          )}

          {single.devicetype && (
            <div className="flex">
              <h1 className="font-bold">Device Type: </h1>
              <p className="pl-2">{single.devicetype}</p>
            </div>
          )}

          {single.fixedmodular && (
            <div className="flex">
              <h1 className="font-bold">Fixed/Modular: </h1>
              <p className="pl-2">{single.fixedmodular}</p>
            </div>
          )}

          {single.rackmount && (
            <div className="flex">
              <h1 className="font-bold">Rackmount: </h1>
              <Link
                className="text-blue-700 pl-2"
                target="blanks"
                href={`https://www.google.com/search?q=${single.rackmount}`}
              >
                {single.rackmount}
              </Link>
            </div>
          )}

          {single.powers && (
            <div className="flex">
              <h1 className="font-bold">Power: </h1>
              <p className="pl-2">{single.powers}</p>
            </div>
          )}

          {single.p2 && (
            <div className="flex">
              <h1 className="font-bold">Power 2: </h1>
              <p className="pl-2">{single.p2}</p>
            </div>
          )}

          {single.fans && (
            <div className="flex">
              <h1 className="font-bold">Fans: </h1>
              <p className="pl-2">{single.fans}</p>
            </div>
          )}

          {single.accesories && (
            <div className="flex">
              <h1 className="font-bold">Accesories: </h1>
              <p className="pl-2">{single.accesories}</p>
            </div>
          )}

          {single.blanks && (
            <div className="flex ">
              <h1 className="font-bold">Blanks: </h1>
              <p className="pr-2 pl-1">{single.blanks}</p>
              {single.b2 ||
                (single.b3 && (
                  <p>
                    {single.b2}, {single.b3}
                  </p>
                ))}
            </div>
          )}

          {single.console && (
            <div className="flex">
              <h1 className="font-bold">Console: </h1>
              <p className="pl-2">{single.console}</p>
            </div>
          )}

          {single.dims && (
            <div className="flex">
              <h1 className="font-bold">DIMS: </h1>
              <p className="pl-2">{single.dims}</p>
            </div>
          )}

          {single.weight && (
            <div className="flex">
              <h1 className="font-bold">Weight: </h1>
              <p className="justify-end pl-2">{single.weight} LBS</p>
            </div>
          )}
        </div>
      </div>
      <p className="pt-1 flex justify-center text-sm font-sans font-bold">
        ***some part numbers may not be correct ***
      </p>
      <EditButton id={single.id}/>
    </div>
  );
}
