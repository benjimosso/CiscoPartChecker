'use client'
import supabase from "@/app/config/supabaseClient"
import { useRouter } from 'next/navigation'

export const dynamicParams = true;

export default function Edit() {

    const router = useRouter()
    const { id } = router.query
    // const { data, error } = supabase.from('Cisco')
    // .select('*')
    // .eq('ID', id)
    // .single()

    console.log(id)
   

  return (
    <div className='flex flex-1'>
      Hello
    </div>
  )
}
