'use client'
import { useState } from 'react';

export default function EditForm({ item }) {

  
  const [ciscoPN, setCiscoPN] = useState(item.item.ciscopn);
  const [description, setDescription] = useState(item.item.description);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ciscoPN);
  }
  


  return (
   <form 
   className="flex flex-col gap-4 w-1/2 mx-auto mt-8 max-w-3xl p-4 border-2 border-gray-300 rounded-md bg-gray-200"
   onSubmit={handleSubmit}
   >
    {/* CISCO PN */}
    <label className='flex flex-col justify-center items-center'>
      <span className='font-bold text-2xl'>Cisco PN</span>
      <div className='flex items-center'>
      <span>Current Value: </span>
      <p className='font-bold text-lg pl-3 text-blue-700'>{`${item.item.ciscopn}`}</p>
      </div>
      <input 
      className="border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent font-bold"
      type="text" 
      onChange={(e) => setCiscoPN(e.target.value)}
      value={ciscoPN}
      // placeholder={`${item.item.ciscopn}`}
      />
      {/* DESCRIPTION */}
    </label>
    <label className='flex flex-col justify-center items-center'>
      <span className='font-bold text-2xl'>Description</span>
      <div className='flex items-center'>
      <span>Current Value: </span>
      <p className='font-bold text-lg pl-3 text-blue-700'>{`${item.item.description}`}</p>
      </div>
      <input 
      className="border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent font-bold"
      type="text" 
      onChange={(e) => setDescription(e.target.value)}
      value={description}
      // placeholder={`${item.item.ciscopn}`}
      />
    </label>
    <button className='bg-indigo-500 text-white px-4 py-2 rounded-md'>Update</button>
   </form>
 
  )
}


  {/* <div>
    <select>
      {Object.keys(item.item).map((key) => {
        return <option key={key} value={key}>{key}</option>
      })}
    </select>
   </div> */}