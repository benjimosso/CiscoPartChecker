'use client'
import { useState } from 'react';


export default function RackmountList({data}) {

    const [selectedrackmount, setSelectedRackmount] = useState(null);

    const handleSubmit = (e) => {
        console.log(e.target.value);
    }

  return (
    <div className='bg-white w-1/2 text-black'>
        <h1 className='text-2xl  text-black pb-8'>Rackmounts</h1>
        <ul>
            {data.slice(0,10).map((rackmount, index) => {
                return (
                    <li 
                    key={index} 
                    className='border-b-2 border-slate-300 p-4 hover:bg-slate-200'
                    
                    >
                        <button 
                        className=''>{rackmount.rackpn}
                        </button>
                        <p>{rackmount.cisco.ciscopn}</p>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
