import Link from "next/link";
import { getPowers } from "../../lib/fetchsupabase";
import Search from "../../components/searchfilter";
import Datalist from "@/app/components/datalist";
// shadcn
import { Button } from "@/components/ui/button";

export default async function powers(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 9;
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const powers = await getPowers({ page, limit, query: search });
  
  
  const mainpath: string = "/powers";

  return (
    <div className=" flex flex-col pt-6 items-center justify-center">
      <div className=" flex flex-col items-center mb-10 gap-10">
        <h1 className="text-3xl font-mono">Powers</h1>

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
          {powers.length < limit ? null : (
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
        {powers.length === 0 ? <h1>No Power found</h1> : null}
        {powers.map((power) => (
        <Link href={`${mainpath}/${power.id}`}  key={power.id}>
          <Datalist
            key={power.id}
            pn={power.power_pn}
            image={power.image}
            id={power.id}
          />
          </Link>
        ))}
      </div>
    </div>
  );
}
