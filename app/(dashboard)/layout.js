import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
// components
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import LowerNav from "../components/LowerNav";

async function FetchData() {
  const supabase = createServerComponentClient({ cookies });
  // I may have to still check the session here, for now we won't use it.
  const { data: session } = await supabase.auth.getSession();
  // this is a test for the comment section
  let { data: comments, error: comentsError } = await supabase
  .from("comments")
  .select("*")
  .order("created_at", { ascending: true });
if (comentsError) console.log("error", comentsError);

  // get all the cisco data
  const { data, error } = await supabase
  .from("cisco")
  .select("id, ciscopn");

  // fetch profile data (this has row level security, so it will only return the data that the user has access to)
  const { data: profile, error: profileError } = await supabase
  .from("profiles")
  .select("*")
  .single();
  if (error) {
    console.error(error);
  }
  if (profileError) {
    console.log( '++++ Here is the Profile error ++++', profileError)
  }
  return { profile, data, session, comments };
}

export default async function DashboardLayout({ children }) {
  const {data, profile, session, comments } = await FetchData();
  console.log(session)
 
  return (
    <div className="flex flex-col h-screen bg-slate-150 overflow-auto">
      {/* if a user is logged in, send credentials, otherwhise do not. */}
      {profile ? (
        <Navbar profile={profile} ciscoData={data} />
      ) : (
        <Navbar ciscoData={data} />
      )}
      <LowerNav />
      {children}
      <Footer />
    </div>
  );
}
