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
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AddComment({ profile, id }) {
  // state to handle the data.
  const supabase = createClientComponentClient();
  
  const [note, setNote] = React.useState("");
  const [title, setTitle] = React.useState("");
  
  // handle the data to insert.
  const handleSubmit = async (e: React.FormEvent, note: string, title:string) => {
    e.preventDefault();
    console.log("note", note);
    console.log("title", title);  
    
    const { data, error } = await supabase
      .from("comments")
      .insert([
        { item_id: id, payload: note, title: title, profile_id: profile.id },
      ]);
    if (error) console.log("error", error);
    if (data) console.log("data", data);
  };

  return (
    <div className="">
     
   
        {/* <DrawerTrigger>
          <div className="bg-primary p-2 rounded-md text-white">Add Note</div>
        </DrawerTrigger> */}
        <form onSubmit={(e) => handleSubmit(e, note, title)}>
          <Label >Title</Label>
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
          <Button type="submit">
            Save
          </Button>
        </form>

    </div>
  );
}


{/* <DrawerContent className="items-center p-5">
<DrawerHeader>
  <DrawerTitle>Title</DrawerTitle>
  <DrawerDescription>
    <Input
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
     
    />
  </DrawerDescription>
  <DrawerTitle>Note</DrawerTitle>
  <DrawerDescription>
    <Textarea
      placeholder="Note"
      value={note}
      onChange={(e) => setNote(e.target.value)}
     
    />
  </DrawerDescription>
  
  <Button onClick={async (e) => {
    await handleSubmit(e, title, note)
    alert('Note added')
  }} className="btn btn-primary">
    Save
  </Button>
  
  {/* <div className="bg-primary p-2 rounded-md text-white" >Save</div> */}
// </DrawerHeader>
// <DrawerFooter className="">
  
//   <DrawerClose>
//     {/* <Button className="btn btn-primary">Close</Button> */}
//     <div className="bg-primary p-2 rounded-md text-white">Close</div>
//   </DrawerClose>
// </DrawerFooter>
// </DrawerContent> 