import React from "react";
// Shadcn
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddComment from "./addcomment";
import { Comments as Comentarios } from "@/app/lib/interfaces";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Comments({ id }) {
  // supabase handlers.
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase
    .from("comments")
    .select("*, profiles(first_name, last_name, avatar)")
    .order("created_at", { ascending: false })
    .eq("item_id", id);
  if (error) console.log("error", error);
  if (data)
    console.log(
      data.map((note: Comentarios) =>
        new Date(note.created_at).toLocaleDateString()
      )
    );

    // handle the data to insert.
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('e.target', e.target)

    }



  return (
    <div className="mt-16">
      <Card className="bg-slate-100">
        <CardHeader>
          <CardTitle>Notes</CardTitle>
          <CardDescription>This can be seen by your Teammates</CardDescription>
        </CardHeader>
        <div className="grid grid-cols-4 gap-9 p-8">
          {data &&
            data.map((note: Comentarios) => (
              <Card key={note.id} className="shadow-md">
                <CardHeader>
                  <CardTitle>
                    {note.title}
                  </CardTitle>
                  <CardDescription>
                    {note.profiles.first_name} {note.profiles.last_name}
                  </CardDescription>
                  <CardDescription>
                    {new Date(note.created_at).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription>{note.payload}</CardDescription>
                </CardContent>
              </Card>
            ))}
        </div>
        <CardFooter>
          <AddComment />
        </CardFooter>
      </Card>
     
    </div>
  );
}

// const [comment, setComment] = React.useState('')

// const changeHandeler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setComment(e.target.value)
// }

// const  submitHandeler = async (e: React.FormEvent<HTMLFormElement>)  => {
//     e.preventDefault()
// }
