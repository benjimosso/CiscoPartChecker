import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
// components
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  // console.log("Data from layout: ", data);
  // if (!data.session) {
  //   redirect("/login");
  // }

  return (
    <div className="flex flex-col h-screen">
      {/* if a user is logged in, send credentials, otherwhise do not. */}
      {data.session ? <Navbar user={data.session.user} /> : <Navbar />}
      {children}
      <Footer />
    </div>
  );
}

