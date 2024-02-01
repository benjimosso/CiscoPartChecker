import React from 'react'
import Navbar from '../components/Navbar'

export default function DashboardLayout({children}) {
    return (
        <div className='grid grid-cols-9 min-h-screen'>
        <Navbar/>
        <div className='col-span-8 items-end'>
        {children}
        </div>
        </div>
      )

}
