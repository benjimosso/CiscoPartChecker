import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
// components
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data: session } = await supabase.auth.getSession();
  const { data, error } = await supabase.from('cisco').select('id, ciscopn');
  
  if (error) {
    console.error(error);
  }
  return (
    <div className="flex flex-col h-screen bg-slate-200 overflow-auto">
      {/* if a user is logged in, send credentials, otherwhise do not. */}
      {session.session ? <Navbar user={session.session.user} ciscoData={data}/> 
      : <Navbar ciscoData={data}/>}
      {children}
      <Footer />
    </div>
  );
}

