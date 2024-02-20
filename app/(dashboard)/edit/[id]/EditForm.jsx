'use client'
import { useState } from 'react';

export default function EditForm({ item }) {

  
  

  const [ciscoPN, setCiscoPN] = useState(item.item.CiscoPN);
  console.log("Item from EditForm: ", item)


  return (
    <>
   <form >
    <label >
      <span>Cisco PN: {}</span>
      <input 
      className="border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
      type="text" 
      onChange={(e) => setCiscoPN(e.target.value)}
      value={ciscoPN}
      // placeholder={`${item.item.CiscoPN}`}
      />
    </label>
   </form>
   <div>
    <select>
      {Object.keys(item.item).map((key) => {
        return <option key={key} value={key}>{key}</option>
      })}
    </select>
   </div>
   </>
  )
}
