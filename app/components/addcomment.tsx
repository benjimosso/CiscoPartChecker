"use client";
import React from "react";
//shadocn
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";

// supabase handlers.
import { createClient } from "@/utils/supabase/client";

export default function AddComment({
  profile_id,
  id,
  first_name,
  last_name,
  team_id,
}: {
  profile_id: string;
  id: number;
  first_name: string;
  last_name: string;
  team_id: number;
}) {
  // state to handle the data.
  const supabase = createClient();

  const [note, setNote] = React.useState("");
  const [title, setTitle] = React.useState("");

  // handle the data to insert.
  const handleSubmit = async (
    e: React.FormEvent,
    note: string,
    title: string
  ) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("comments")
      .insert([
        {
          item_id: id,
          payload: note,
          title: title,
          profile_id,
          first_name,
          last_name,
          team_id,
        },
      ]);
    if (error) console.log("error", error);
    if (data) console.log("data", data);
    setNote("");
    setTitle("");
  };

  return (
    <div className="">
      <Drawer>
        <DrawerTrigger>
          <div className="bg-primary p-2 rounded-md text-white">Add Note</div>
        </DrawerTrigger>
        <DrawerContent className="items-center p-5">
          <form
            onSubmit={async (e) => {
              await handleSubmit(e, note, title);
              alert("Note added");
            }}
          >
            <DrawerHeader>
              <DrawerTitle>Title</DrawerTitle>
              <DrawerDescription>
                <Input
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </DrawerDescription>
              <DrawerTitle>Note</DrawerTitle>
              <DrawerDescription>
                <Textarea
                  placeholder="Note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  required
                />
              </DrawerDescription>

              <Button type="submit" className="btn btn-primary">
                Save
              </Button>
            </DrawerHeader>
            <DrawerFooter className="">
              <DrawerClose>
                <div className="bg-primary p-2 rounded-md text-white">
                  Close
                </div>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

{
  /* <form onSubmit={(e) => handleSubmit(e, note, title)}>
          <Label>Title</Label>
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Label>Note</Label>
          <Textarea
            placeholder="Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <Button type="submit">Save</Button>
          <DrawerClose>
            <div className="bg-primary p-2 rounded-md text-white">Close</div>
          </DrawerClose>
        </form> */
}
