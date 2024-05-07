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


export default function Comments({profile}) {

    const [comment, setComment] = React.useState('') // comment state
    console.log(profile)  
    
    const changeHandeler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value)
    }

    const submitHandeler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(comment)
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
