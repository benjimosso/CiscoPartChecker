import supabase from "../config/supabaseClient";
import { Fans, Rackmounts, PowerSupplies, Comments } from "./interfaces";

// problem about fetching data like this, when I use supabase from 
// /configsupabaseclient I do not include the user access token.
// I use instead the api key as the barrier token in the http request.

export async function getFans({
  query,
  page = 1,
  limit = 9,
}: {
  query?: string;
  page?: number;
  limit?: number;
}) {

  console  
  if (!query) {
    let { data: fans, error } = await supabase
      .from("fans")
      .select("*")
      .range((page - 1) * limit, page * limit - 1)
      .limit(limit)
      .order("fan_pn", { ascending: true })
      
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
  if (!query) {
    let { data: rackmounts, error } = await supabase
      .from("rackmounts")
      .select("*")
      .order("rackpn", { ascending: true })
      .range((page - 1) * limit, page * limit - 1)
      .limit(limit)
      
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
  if (!query) {
    let { data: powers, error } = await supabase
      .from("powers")
      .select("*")
      .order("power_pn", { ascending: true })
      .range((page - 1) * limit, page * limit - 1)
      .limit(limit)
      
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


export async function insertComment (payload: string, profile_id: number, user_id: string) {
  let { data, error } = await supabase
    .from("comments")
    .insert([{ payload: payload, profile_id: profile_id, user_id: user_id}]);
  if (error) console.log("error", error);
  return data;
}


export async function getComments() {
  let { data: comments, error } = await supabase
    .from("comments")
    .select("*")
    .order("created_at", { ascending: true });
  if (error) console.log("error", error);
  return (comments as Comments[]) || [];
}