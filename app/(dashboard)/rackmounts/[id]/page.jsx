import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
// ebay client
// import { EbayClient } from "../../../config/ebayClient";
// components
import noImage from "../../../assets/images/no-image-available.jpg";
import Images from "../../../components/Images";
import Image from "next/image";

async function getSingleRackmount(id) {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase
    .from("rackmounts")
    .select("*, cisco(ciscopn)")
    .eq("id", id)
    .single();
  return { data, error };
}

export default async function SingleRackmount({ params }) {
  const { data, error } = await getSingleRackmount(params.id);
  if (error) {
    console.error(error);
    return <div>Error</div>;
  }

  // EBAY DATA OPTION
  // const ebayData = await EbayClient({ keyword: data.rackpn });
  // const ebayItem = ebayData.findItemsByKeywordsResponse[0].searchResult[0];
  // console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");
  // console.log(ebayItem);
  // console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="flex justify-normal   bg-white w-3/4 h-auto p-6 m-6 rounded-md ">
        <div className="border-r-2  border-slate-300 pr-4">
          {data.image ? (
            <Image
              src={data.image}
              alt="Rackmount Image"
              width={100}
              height={100}
              className="w-96 h-auto"
            />
          ) : (
            <Image
              src={noImage}
              alt="No Image Available"
              className="w-96 h-auto "
            />
          )}
        </div>
        <div className="flex flex-col pl-6">
          {data.rackpn && (
            <div className="">
              <p className=" font-bold text-xl pb-4 pt-6">{data.rackpn}</p>
            </div>
          )}
          <p> IDEA: use Ebays API to searh for the items price </p>
        </div>
      </div>
      <div className="bg-white m-6  rounded-md">
        <h1 className="flex text-2xl  text-black font-mono p-6">
          Compatible with:
        </h1>
        <div className="grid grid-cols-4 gap-4 m-6">
          {data.cisco.map((c, index) => (
            <p
              key={index}
              className="flex p-2 text-sm font-semibold border-r-2 border-b-2 border-slate-300 shadow-md m-2"
            >
              {c.ciscopn}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
