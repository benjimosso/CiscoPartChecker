import supabase from '../../config/supabaseClient';
import RackmountList from "./RackmountList";
import PaginationControls from "./PaginationControls";

export default async function page({searchParams}) {

  const { data, error } = await supabase
    .from("rackmounts")
    .select("*, cisco(ciscopn)")
    .order("id", { ascending: true });
  
  if (error) {
    console.error(error);
  }

  const page = searchParams['page'] ?? '1'
  
  const per_page = searchParams['per_page'] ?? '10'
   // mocked, skipped and limited in the real app
   const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
   const end = start + Number(per_page) // 5, 10, 15 ...
  

   const entries = data.slice(start, end)  

// either here or in the racklist component I need to make a filter searchbar for the rackmounts!!!!

  return (
    <div className="flex flex-col flex-1 justify-center items-center m-6 rounded-md">
      <div className="bg-white w-1/2 text-black">
      <h1 className="flex justify-center text-2xl  text-black p-8 font-mono">Rackmounts</h1>
      <ul>
        {entries.map((r) => (
          <RackmountList key={r.id} data={r} />
        ))}
      </ul>
      </div>
      <PaginationControls
        hasNextPage={end < data.length}
        hasPrevPage={start > 0}
        dataLength={data.length}
      />
    </div>
  );
}
