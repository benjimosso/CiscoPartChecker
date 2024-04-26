import supabase from "../../config/supabaseClient";
import { Powers, columns } from "./columns";
import { DataTable } from "./data-table";

async function getPowers(): Promise<Powers[]> {
  const { data, error } = await supabase
  .from("rackmounts")
  .select("*")
  .limit(10)
  .order("id", { ascending: true });

  if (error) {
    throw error;
  }
  return data || [];
}

export default async function DemoPage() {
  const powers = await getPowers();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={powers} />
    </div>
  );
}
