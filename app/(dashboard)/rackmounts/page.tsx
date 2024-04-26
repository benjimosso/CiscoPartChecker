import Link from "next/link";
import { getRackmounts } from "../../lib/fetchsupabase";
import Search from "../../components/searchfilter";
import Datalist from "@/app/components/datalist";
// shadcn
import { Button } from "@/components/ui/button";

export default async function Rackmounts({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 9;
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const rackmounts = await getRackmounts({ page, limit, query: search });
  
  const mainpath: string = "/rackmounts";

  return (
    <div className=" flex flex-1 flex-col mt-6 align-center items-center justify-center">
      <div className="relative flex flex-col items-center mb-10 gap-10">
        <h1 className="text-3xl font-mono">Rackmounts</h1>

        <Search mainpath={mainpath} search={search} />

        <div className="flex gap-8">
          <Link
            href={{
              pathname: mainpath,
              query: {
                ...(search ? { search } : {}),
                page: page > 1 ? page - 1 : 1,
              },
            }}
          >
            <Button className="font-bold">Previous</Button>
          </Link>
          {rackmounts.length < limit ? null : (
            <Link
              href={{
                pathname: mainpath,
                query: {
                  ...(search ? { search } : {}),
                  page: page + 1,
                },
              }}
            >
              <Button className="font-bold">Next</Button>
            </Link>
          )}
        </div>
      </div>
      <div className="relative grid grid-cols-3 gap-5 w-2/3 m-6">
        {rackmounts.length === 0 ? <h1>No fans found</h1> : null}
        {rackmounts.map((rack) => (
        <Link href={`${mainpath}/${rack.id}`}  key={rack.id}>
          <Datalist
            key={rack.id}
            pn={rack.rackpn}
            image={rack.image}
            id={rack.id}
          />
          </Link>
        ))}
      </div>
    </div>
  );
}
