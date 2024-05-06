import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import noImage from "../../../assets/images/no-image-available.jpg";
import Images from "../../../components/Images";
import Image from "next/image";
import { Fans } from "@/app/lib/interfaces";



async function getSingleFan({ id }: { id: string }) : Promise<Fans | null> {
  const supabase = createServerComponentClient({ cookies });
  let { data: fan, error } = await supabase
    .from("fans")
    .select("*, ciscofans(cisco(ciscopn, id))")
    .eq("id", id)
    .single();
    
  if (error) console.log("error", error);
  return (fan as Fans) || null;
  // I need to figuere out how to pass the error to the client
}

export default async function singlePower({params}: {params: {id: string}}) {
    const fan = await getSingleFan({id: params.id});
    
   
   
    return (
        <div className="flex flex-1 flex-col items-center justify-center">
      <div className="flex justify-normal   bg-white w-3/4 h-auto p-6 m-6 rounded-md ">
        <div className="border-r-2  border-slate-300 pr-4">
          {fan.image ? (
            <Image
              src={fan.image}
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
          {fan.fan_pn && (
            <div className="">
              <p className=" font-bold text-xl pb-4 pt-6">{fan.fan_pn}</p>
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
          {fan.ciscofans.map((c, index) => (
            <Link
              href={`/item/${c.cisco.id}`}
              key={index}
              className="flex p-2 text-sm font-semibold border-r-2 border-b-2 border-slate-300 shadow-md m-2 hover:bg-primary hover:text-white"
            >
              {c.cisco.ciscopn}
            </Link>
          ))}
        </div>
      </div>
    </div>
    )
}


