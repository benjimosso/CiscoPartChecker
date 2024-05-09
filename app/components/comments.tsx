'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Comments as Comentarios } from '@/app/lib/interfaces'
import { insertComment, getComments } from '../lib/fetchsupabase'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default function Comments({profile}) {
    const user_id = profile.id
    console.log(user_id)
    const [comment, setComment] = React.useState('') // comment state
      
    
    const changeHandeler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value)
    }

    const  submitHandeler = async (e: React.FormEvent<HTMLFormElement>)  => {
        e.preventDefault()
        // const commentInserted = await insertComment(comment, profile.id, user_id)

     const supabase = createClientComponentClient()
     const { data: comments, error } = await supabase.from('comments').select('*, profiles(*)')
     console.log(comments)

    }

    // the problem with this comments approach is that I would have to
    // create a new table on the DB for each comment section.
    
  return (
    <div className=''>
      <Card>
        <CardHeader>
          <CardTitle>Comments</CardTitle>
        </CardHeader>
        <form onSubmit={submitHandeler}>
        <CardContent>
          
            <input 
            type="text" 
            onChange={changeHandeler}
            placeholder='Add Comment'/>
         
        </CardContent>
        <CardFooter>
          <button>Comment</button>
        </CardFooter>
        </form>
      </Card>
    </div>
  )
}
