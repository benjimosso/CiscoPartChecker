"use client";
import { useEffect, useState } from "react";
// Shadcn
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import AddComment from "./addcomment";
import { Comments as Comentarios } from "@/app/lib/interfaces";
import DeleteComment from "./deletecomment";
// supabase handlers.
import { createClient } from "@/utils/supabase/client";

// TODO HERE!
// FIND A WAY TO SORT THE COMMENTS BY DATE
// AND SHOW THE LATEST FIRST
// possible solution: sort((a, b) => Number(a.created_at) - Number(b.created_at)).

export default function Comments({
  id,
  profile_id,
  Servernotes,
}: {
  id: number;
  profile_id: string;
  Servernotes: Comentarios[];
}) {
  // supabase handlers.
  const supabase = createClient();
  // get comments

  const [notes, setNotes] = useState(Servernotes);
  
  useEffect(() => {
    const channel = supabase
      .channel("realtime notes Insert")
      .on(
        "postgres_changes",
        {
          event: "INSERT", // INSERT
          schema: "public",
          table: "comments",
        },
        (payload) => {
          // console.log("Change received!", payload);
          setNotes([...notes, payload.new as Comentarios]);
        }
      )
      .subscribe();

      const channelDelete = supabase
      .channel("realtime notes Delete")
      .on(
        "postgres_changes",
        {
          event: "DELETE", // DELETE
          schema: "public",
          table: "comments",
        },
        (payload) => {
          // console.log("Change received!", payload);
          setNotes(notes.filter((note) => note.id !== payload.old.id));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
      supabase.removeChannel(channelDelete);
    };
  }, [supabase, notes, setNotes]);

  return (
    <div className="mt-16">
      <Card className="bg-slate-100 ">
        <CardHeader>
          <CardTitle>Notes</CardTitle>
          <CardDescription>This can be seen by your Teammates</CardDescription>
        </CardHeader>
        <div className="grid grid-cols-4 gap-9 p-8">
          {notes &&
            notes.map((note: Comentarios) => (
              <Card key={note.id} className="shadow-md">
                <CardHeader>
                  <CardTitle>{note.title}</CardTitle>

                  <CardDescription>
                    {note.first_name} {note.last_name}
                  </CardDescription>

                  <CardDescription>
                    {new Date(note.created_at).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{note.payload}</p>
                </CardContent>
                {profile_id === note.profile_id && (
                  <CardFooter className=" p-0">
                    <DeleteComment noteid={note.id} profile_id={profile_id} />
                  </CardFooter>
                )}
              </Card>
            ))}
        </div>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
