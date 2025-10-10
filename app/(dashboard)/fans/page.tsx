import Link from "next/link";
import { getFans } from "../../lib/fetchsupabase";
import Search from "../../components/searchfilter";
import Datalist from "@/app/components/datalist";
// shadcn
import { Button } from "@/components/ui/button";

export default async function Fans(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 9;
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const fans = await getFans({ page, limit, query: search });
  const mainpath: string = "/fans";

  return (
    <div className=" flex flex-1 flex-col mt-6 align-center items-center justify-center">
      <div className="relative flex flex-col items-center mb-10 gap-10">
        <h1 className="text-3xl font-mono">Fans</h1>

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
            <Button>Previous</Button>
          </Link>
          {fans.length < limit ? null : (
            <Link
              href={{
                pathname: mainpath,
                query: {
                  ...(search ? { search } : {}),
                  page: page + 1,
                },
              }}
            >
              <Button>Next</Button>
            </Link>
          )}
        </div>
      </div>
      <div className="relative grid grid-cols-3 gap-5 w-2/3 m-6">
        {fans.length === 0 ? <h1>No fans found</h1> : null}
        {fans.map((fan) => (
        <Link href={`/fans/${fan.id}`}  key={fan.id}>
          <Datalist
            key={fan.id}
            pn={fan.fan_pn}
            image={fan.image}
            id={fan.id}
          />
          </Link>
        ))}
      </div>
    </div>
  );
}

// href={`/fans?page=${page > 1 ? page - 1 : 1}`}

//NEXT
//href={`/fans?page=${page + 1}`} className="btn"
