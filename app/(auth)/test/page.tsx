import React from 'react'
import { createClient } from "@/utils/supabase/client";

export default async function Test() {

  const supabase = createClient()
  const {data: test1, error: testError} = await supabase.auth.getUser()
  if (testError) {
    console.log("no user found: " + testError)
  }
  else {
    console.log(test1)
  }


  return (
    <div>
      <h1>
        TEST PAGE
      </h1>
      <p className='font-serif text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, laborum maxime ut optio expedita molestias at est provident sunt omnis, blanditiis dignissimos quod exercitationem consequuntur harum porro vitae aut pariatur.</p>
    </div>
  )
}
