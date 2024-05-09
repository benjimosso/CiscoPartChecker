import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
// components
import NoImages from "../../../components/NoImages";
import Images from "../../../components/Images";
import EditButton from "../../../components/EditButton";
import Comments from "@/app/components/comments";

// shadcn components
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const dynamicParams = true;

async function getSingleItem(id) {
  // idea: get ebays api to get the price of the item
  // get single item from the database
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase
    .from("cisco")
    .select(
      "*, rackmounts(rackpn, image, id), ciscofans(fans(*)), ciscopowers(powers(*))"
    )
    .eq("id", id)
    .single();

    // get user's profile. 
    const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .single();
    // I may still have to get the session!
  if (error) {
    console.error(error);
  }
  return { data, error, profile };
}

export default async function SingleItemShow({ params }) {
  const { data: single, error, profile } = await getSingleItem(params.id);
  // console.log(single)
  
  return (
    <div className="flex flex-1 flex-col items-center pb-8 ">
      <div className="flex justify-normal  bg-white w-3/4 p-6 m-6 rounded-md overflow-auto">
        <div className="border-r-2  border-slate-300 pr-4">
          {single?.images ? <Images images={single.images} /> : <NoImages />}
        </div>
        <div className="flex flex-col gap-4 pl-6">
          {single.ciscopn && (
            <div className="">
              <p className=" font-bold text-xl pb-4 pt-6 border-b-2 border-slate-300">
                {single.ciscopn}
              </p>
            </div>
          )}
          {single.description && (
            <div className="flex pt-4">
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
          {single.rackmounts && (
            <div className="flex">
              <h1 className="font-bold">Rackmount: </h1>
              <HoverCard>
                <HoverCardTrigger>
                  <p className="ml-3 cursor-pointer">
                    {single.rackmounts.rackpn}
                  </p>
                </HoverCardTrigger>

                <HoverCardContent className="bg-slate-100 p-3">
                  <a
                    className="text-blue-500"
                    href={`/rackmounts/${single.rackmounts.id}`}
                  >
                    {single.rackmounts.rackpn}
                  </a>
                  {single.rackmounts.image && (
                    <Image
                      src={single.rackmounts.image}
                      width={200}
                      height={200}
                      alt="rackmount Image"
                      priority={true}
                      style={{ width: "auto", height: "auto" }}
                      className="rounded-md, mt-4"
                    />
                  )}
                </HoverCardContent>
              </HoverCard>
            </div>
          )}

          {Object.keys(single.ciscopowers).length > 0 && (
            <div className="">
              <h1 className="font-bold">Power: </h1>
              {single.ciscopowers.map((item, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger>
                    <p className="ml-3 cursor-pointer">
                      {item.powers.power_pn}
                    </p>
                  </HoverCardTrigger>

                  <HoverCardContent className="bg-slate-100 p-3">
                    <a
                      className="text-blue-500"
                      href={`/powers/${item.powers.id}`}
                    >
                      {item.powers.power_pn}
                    </a>
                    {item.powers.image && (
                      <Image
                        src={item.powers.image}
                        width={200}
                        height={200}
                        alt="rackmount Image"
                        priority={true}
                        style={{ width: "auto", height: "auto" }}
                        className="rounded-md, mt-4"
                      />
                    )}
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          )}

          {/* {single.p2 && (
            <div className="flex">
              <h1 className="font-bold">Power 2: </h1>
              <p className="pl-2">{single.p2}</p>
            </div>
          )} */}

          {Object.keys(single.ciscofans).length > 0 && (
            <div className="">
              <h1 className="font-bold">Fans: </h1>
              {single.ciscofans.map((f, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger>
                    <p className="ml-3 cursor-pointer">{f.fans.fan_pn}</p>
                  </HoverCardTrigger>

                  <HoverCardContent className="bg-slate-100 p-3">
                    <a
                      className="text-blue-500"
                      href={`/fans/${f.fans.id}`}
                    >
                      {f.fans.fan_pn}
                    </a>
                    {f.fans.image && (
                      <Image
                        src={f.fans.image}
                        width={200}
                        height={200}
                        alt="rackmount Image"
                        priority={true}
                        style={{ width: "auto", height: "auto" }}
                        className="rounded-md, mt-4"
                      />
                    )}
                  </HoverCardContent>
                </HoverCard>
              ))}
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
      {profile && <EditButton id={single.id} />}
      <div className="m-10">
      {profile && <Comments id={single.id} />}
      </div>
    </div>
  );
}
