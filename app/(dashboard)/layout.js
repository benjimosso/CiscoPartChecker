import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
// components
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import LowerNav from "../components/LowerNav";

async function FetchData() {
  const supabase = createServerComponentClient({ cookies });
  // const { data: session } = await supabase.auth.getSession();
  const { data, error } = await supabase
  .from("cisco")
  .select("id, ciscopn");

  // fetch profile data (this has row level security, so it will only return the data that the user has access to)
  const { data: profile, error: profileError } = await supabase
  .from("profiles")
  .select("first_name, last_name")
  .single();
  // if (session.session) {
  //   const { data: user } = await supabase
  //     .from("users")
  //     .select("name, lastname")
  //     .eq("id", session.session.user.id)
  //     .single();
  //   return { session, data, user };
  // }
  if (error || profileError) {
    console.error(error || profileError);
  }
  return { profile, data };
}

export default async function DashboardLayout({ children }) {
  const { session, data, profile } = await FetchData();
  console.log(profile.first_name, profile.last_name)
 
  return (
    <div className="flex flex-col h-screen bg-slate-150 overflow-auto">
      {/* if a user is logged in, send credentials, otherwhise do not. */}
      {profile ? (
        <Navbar user={profile} ciscoData={data} />
      ) : (
        <Navbar ciscoData={data} />
      )}
      <LowerNav />
      {children}
      <Footer />
    </div>
  );
}
