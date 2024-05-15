import { Fans, Rackmounts, PowerSupplies, Comments, CiscoPn, Cisco } from "./interfaces";
import { createClient } from "@/utils/supabase/server";



export async function getFans({
  query,
  page = 1,
  limit = 9,
}: {
  query?: string;
  page?: number;
  limit?: number;
}) {
  const supabase = createClient();
  if (!query) {
    let { data: fans, error } = await supabase
      .from("fans")
      .select("*")
      .range((page - 1) * limit, page * limit - 1)
      .limit(limit)
      .order("fan_pn", { ascending: true });

    if (error) console.log("error", error);
    return (fans as Fans[]) || [];
  } else {
    let { data: fans, error } = await supabase
      .from("fans")
      .select("*")
      .range((page - 1) * limit, page * limit - 1)
      .limit(limit)
      .ilike("fan_pn", `%${query}%`);
    if (error) console.log("error", error);
    return (fans as Fans[]) || [];
  }
}

export async function getFan(id: number) {
  const supabase = createClient();
  let { data: fans, error } = await supabase
    .from("fans")
    .select("*")
    .eq("id", id);
  if (error) console.log("error", error);
  return (fans as Fans[]) || [];
}

export async function getRackmounts({
  query,
  page = 1,
  limit = 9,
}: {
  query?: string;
  page?: number;
  limit?: number;
}) {
  const supabase = createClient();
  if (!query) {
    let { data: rackmounts, error } = await supabase
      .from("rackmounts")
      .select("*")
      .order("rackpn", { ascending: true })
      .range((page - 1) * limit, page * limit - 1)
      .limit(limit);

    if (error) console.log("error", error);
    return (rackmounts as Rackmounts[]) || [];
  } else {
    let { data: rackmounts, error } = await supabase
      .from("rackmounts")
      .select("*")
      .order("rackpn", { ascending: true })
      .range((page - 1) * limit, page * limit - 1)
      .limit(limit)
      .ilike("rackpn", `%${query}%`);
    if (error) console.log("error", error);
    return (rackmounts as Rackmounts[]) || [];
  }
}

export async function getPowers({
  query,
  page = 1,
  limit = 9,
}: {
  query?: string;
  page?: number;
  limit?: number;
}) {
  const supabase = createClient();
  if (!query) {
    let { data: powers, error } = await supabase
      .from("powers")
      .select("*")
      .order("power_pn", { ascending: true })
      .range((page - 1) * limit, page * limit - 1)
      .limit(limit);

    if (error) console.log("error", error);
    return (powers as PowerSupplies[]) || [];
  } else {
    let { data: powers, error } = await supabase
      .from("powers")
      .select("*")
      .order("power_pn", { ascending: true })
      .range((page - 1) * limit, page * limit - 1)
      .limit(limit)
      .ilike("power_pn", `%${query}%`);
    if (error) console.log("error", error);
    return (powers as PowerSupplies[]) || [];
  }
}

// Cisco Switches
export async function getSwitches({
  query,
  page = 1,
  limit = 9,
}: {
  query?: string;
  page?: number;
  limit?: number;
}) {
  const supabase = createClient();
  if (!query) {
    let { data: ciscoSwitch, error } = await supabase
      .from("cisco")
      .select("ciscopn, images, id")
      .order("ciscopn", { ascending: true })
      .range((page - 1) * limit, page * limit - 1)
      .limit(limit)
      .eq("devicetype", "Switch");

    if (error) console.log("error", error);
    return (ciscoSwitch as unknown) as CiscoPn[] || [];
  } else {
    let { data: ciscoSwitch, error } = await supabase
      .from("cisco")
      .select("ciscopn, images, id")
      .order("ciscopn", { ascending: true })
      .range((page - 1) * limit, page * limit - 1)
      .limit(limit)
      .ilike("ciscopn", `%${query}%`)
      .eq("devicetype", "Switch");
    if (error) console.log("error", error);
    return (ciscoSwitch as unknown) as CiscoPn[] || []; // Convert the expression to 'unknown' first
  }
}

// get Routers
export async function getRouters({
  query,
  page = 1,
  limit = 9,
}: {
  query?: string;
  page?: number;
  limit?: number;
}) {
  const supabase = createClient();
  if (!query) {
    let { data: ciscoRouter, error } = await supabase
      .from("cisco")
      .select("ciscopn, images, id")
      .order("ciscopn", { ascending: true })
      .range((page - 1) * limit, page * limit - 1)
      .limit(limit)
      .eq("devicetype", "Router");

    if (error) console.log("error", error);
    return (ciscoRouter as unknown) as CiscoPn[] || [];
  } else {
    let { data: ciscoRouter, error } = await supabase
      .from("cisco")
      .select("ciscopn, images, id")
      .order("ciscopn", { ascending: true })
      .range((page - 1) * limit, page * limit - 1)
      .limit(limit)
      .ilike("ciscopn", `%${query}%`)
      .eq("devicetype", "Router");
    if (error) console.log("error", error);
    return (ciscoRouter as unknown) as CiscoPn[] || []; // Convert the expression to 'unknown' first
  }
}

// export async function insertComment (payload: string, profile_id: number, user_id: string) {
//   let { data, error } = await supabase
//     .from("comments")
//     .insert([{ payload: payload, profile_id: profile_id, user_id: user_id}]);
//   if (error) console.log("error", error);
//   return data;
// }

// export async function getComments() {
//   let { data: comments, error } = await supabase
//     .from("comments")
//     .select("*")
//     .order("created_at", { ascending: true });
//   if (error) console.log("error", error);
//   return (comments as Comments[]) || [];
// }
