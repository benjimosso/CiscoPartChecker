"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Powers = {
  id: string
  powerpn: string
  image: string
}

export const columns: ColumnDef<Powers>[] = [
  {
    accessorKey: "rackpn",
    header: "Part Number",
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "image",
    header: "Image",
  },
]

