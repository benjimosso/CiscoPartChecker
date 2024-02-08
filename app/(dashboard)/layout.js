import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

// <div className='grid grid-cols-9 min-h-screen'>
//         <Navbar/>
//         <div className='col-span-8 items-end'>
//         {children}
//         <Footer />
//         </div>

//         </div>
