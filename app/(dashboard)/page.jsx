// test
import NavigationMenuDemo from "@/components/ui/test";

export default function Home() {
  return (
    <main className="flex-1 ">
      <div className=" mt-28 ">
        <NavigationMenuDemo/>
        <br />
        <div className="flex flex-col gap-10 justify-center items-center">
      <h1 className="text-pretty text-2xl font-bold">Welcome to the Cisco Part Checker Version 1</h1>
      <h2 className="text-xl font-semibold">Please notice this is a site in progress, Thank you</h2>
      <p className="font-semibold">Daniel</p>
      </div>
      </div>
    </main>
  );
}
