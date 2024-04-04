import EditForm from "./EditForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamicParams = true;
// not sure if this is the right way to do it!!!
async function checkUser() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  if (data.session === null) {
    redirect("/login");
  }
  return data;
}

async function getItem(id) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase
    .from("cisco")
    .select("*, rackmounts(rackpn), ciscofans(fans(*)), ciscopowers(powers(*))")
    .eq("id", id)
    .single();
  if (!data) {
    return { notFound: true };
  }
  return data;
}

export default async function Edit({ params }) {
  const user = await checkUser();
  user.session ? console.log("user is logged in") : console.log("user is not logged in");
  const item = await getItem(params.id);
  if (item.notFound) {
    return <h1>Not found</h1>;
  }

  return (
    <div className="flex flex-1">
      <EditForm item={item} />
    </div>
  );
}
