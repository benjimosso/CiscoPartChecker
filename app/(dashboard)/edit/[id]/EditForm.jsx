'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '../../../config/supabaseClient';

export default function  EditForm({ item }) {
  const router = useRouter();
  
  const [ciscoPN, setCiscoPN] = useState(item.ciscopn);
  const [description, setDescription] = useState(item.description);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('cisco')
      .update({ ciscopn: ciscoPN, description: description })
      .eq('id', item.id);

    if (error) {
      console.error(error);
    } 
    if (!error) {
      router.refresh();
    }
  }
  


  return (
   <form 
   className="flex flex-col gap-4 w-2/3  mx-auto mt-8 p-4 border-2 border-gray-300 rounded-md bg-gray-200"
   onSubmit={handleSubmit}
   >
    {/* CISCO PN */}
    <label className='flex flex-col justify-center items-center '>
      <span className='font-bold text-2xl'>Cisco PN</span>
      <div className='flex items-center'>
      <span>Current Value: </span>
      <p className='font-bold text-lg pl-3 text-blue-700'>{`${item.ciscopn}`}</p>
      </div>
      <input 
      className="input-form"
      type="text" 
      onChange={(e) => setCiscoPN(e.target.value)}
      value={ciscoPN}
      // placeholder={`${item.ciscopn}`}
      />
      {/* DESCRIPTION */}
    </label>
    <label className='flex flex-col justify-center items-center'>
      <span className='font-bold text-2xl'>Description</span>
      <div className='flex items-center'>
      <span>Current Value: </span>
      <p className='font-bold text-lg pl-3 text-blue-700'>{`${item.description}`}</p>
      </div>
      <input 
      className="input-form"
      type="text" 
      onChange={(e) => setDescription(e.target.value)}
      value={description}
      // placeholder={`${item.ciscopn}`}
      />
    </label>
    <button className='btn1'>Update</button>
   </form>
 
  )
}


  {/* <div>
    <select>
      {Object.keys(item).map((key) => {
        return <option key={key} value={key}>{key}</option>
      })}
    </select>
   </div> */}