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

export default function AddComment() {
  const [note, setNote] = React.useState("");
  const [title, setTitle] = React.useState("");

  // handle the data to insert.


  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <Button className="btn btn-primary">Add Note</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Add Comment</DrawerTitle>
            <DrawerDescription>Add a comment to this item</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button className="btn btn-primary">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
