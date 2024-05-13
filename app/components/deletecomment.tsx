"use client";
import React from "react";
// icons
import { FaRegTrashAlt } from "react-icons/fa";
// supabase handlers.
import { createClient } from "@/utils/supabase/client";

export default function DeleteComment({
  noteid,
  profile_id,
}: {
  noteid: number;
  profile_id: string;
}) {
  // handle the data to delete.
  const handleDelete = async () => {
    const supabase = createClient();

    const { error } = await supabase.from("comments").delete().eq("id", noteid);
    // .eq("profile_id", profile_id);
    if (error) console.log("error", error);
  };

  return (
    <div>
      <button
        onClick={async () => {
          await handleDelete();
          alert("Note deleted");
        }}
      >
        <FaRegTrashAlt />
      </button>
    </div>
  );
}
