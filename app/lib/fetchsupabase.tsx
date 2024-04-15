import supabase from "../config/supabaseClient";
import { Fans, Rackmounts } from "./interfaces";

export async function getFans({
  query,
  page = 1,
  limit = 10,
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
  limit = 10,
}: {
  query?: string;
  page?: number;
  limit?: number;
}) {
  if (!query) {
    let { data: rackmounts, error } = await supabase
      .from("rackmounts")
      .select("*")
      .order("id", { ascending: true })
      .range((page - 1) * limit, page * limit - 1)
      .limit(limit);
    if (error) console.log("error", error);
    return (rackmounts as Rackmounts[]) || [];
  } else {
    let { data: rackmounts, error } = await supabase
      .from("rackmounts")
      .select("*")
      .order("id", { ascending: true })
      .range((page - 1) * limit, page * limit - 1)
      .limit(limit)
      .ilike("rackpn", `%${query}%`);
    if (error) console.log("error", error);
    return (rackmounts as Rackmounts[]) || [];
  }
}