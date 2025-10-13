'use client'
import React from 'react'
import { createClient } from "@/utils/supabase/client";
import Image from 'next/image';
import { useState } from 'react';

export default function Test() {

  const [avatarURL, setAvatarURL] = useState('')


  const uploadPicture = async () => {
    const supabase = createClient()

    const { data } = supabase.storage.from('Avatars').getPublicUrl('private/AvatarExample.png')

    if (data) {
      setAvatarURL(data.publicUrl)
      console.log(data.publicUrl)
    }
    else {
      "Something Went Wrong."
    }

  }

  return (
    <div>
      <h1>
        TEST PAGE
      </h1>
      <p className='font-serif text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, laborum maxime ut optio expedita molestias at est provident sunt omnis, blanditiis dignissimos quod exercitationem consequuntur harum porro vitae aut pariatur.</p>

      <button className='font-bold text-white bg-slate-400' onClick={uploadPicture}> ClickMe!</button>

      {avatarURL ? (
          <Image src={avatarURL} alt='avatar' width={200} height={200}></Image>
        ) : (
          <p>No image to dispay yet</p>
        )}
    </div>

  )
}


//   const { data } = supabase.storage.from('Avatars').getPublicUrl('AvatarExample.png')

//   if (data) {
//     setAvatarURL(data.publicUrl)
//     console.log(data)
//   }
//   else {
//     "Something Went Wrong."
//   }
