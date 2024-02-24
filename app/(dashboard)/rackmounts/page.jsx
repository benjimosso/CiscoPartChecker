
import supabase from "@/app/config/supabaseClient"
import RackmountList from "./RackmountList"

export default async function page() {

    const { data, error } = await supabase.from('rackmounts').select('rackpn, cisco(ciscopn)');
    console.log(data);
    if (error) {
        console.error(error);
    }
  return (
    <div className="flex flex-1 justify-center">
      <RackmountList data={data} />
    </div>
  )
}
