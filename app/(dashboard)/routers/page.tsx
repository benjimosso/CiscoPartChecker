import Link from "next/link";
import { getRouters } from "../../lib/fetchsupabase";
import Search from "../../components/searchfilter";
import Datalist from "@/app/components/datalist";
// shadcn
import { Button } from "@/components/ui/button";

export default async function Routers(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 9;
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const routers = await getRouters({ page, limit, query: search });
  const mainpath: string = "/routers";

  return (
    <div className=" flex flex-1 flex-col mt-6 align-center items-center justify-center">
      <div className="relative flex flex-col items-center mb-10 gap-10">
        <h1 className="text-3xl font-mono">Routers</h1>

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
          {routers.length < limit ? null : (
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
        {routers.length === 0 ? <h1>No Routers</h1> : null}
        {routers.map((routerItem) => (
            <Link href={`item/${routerItem.id}`} key={routerItem.id}>
                <Datalist
                    key={routerItem.id}
                    pn={routerItem.ciscopn}
                    
                    image={routerItem.images ? routerItem.images[0] : null} // Access the first element of the array or return null
                    id={routerItem.id}
                />
            </Link>
        ))}
    </div>
    </div>
  );
}
