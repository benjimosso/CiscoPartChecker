
import React from "react";
import { createClient } from "@/utils/supabase/server";
// components
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import LowerNav from "../components/LowerNav";

async function FetchData() {
  const supabase = await createClient();
  // I may have to still check the session here, for now we won't use it.
  
  const { data: userSession } = await supabase.auth.getUser();
  
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
  return { profile, data, userSession};
}

export default async function DashboardLayout({ children }) {
  const {data, profile, userSession} = await FetchData();
  
  
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
