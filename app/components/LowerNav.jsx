import Link from "next/link";

export default function LowerNav() {
  return (
    <div className="flex justify-start items-center w-full bg-slate-500 h-12">
      <ul className="text-white flex justify-start gap-6 pl-4">
        <li>switches</li>
        <li className="hover:border-b hover:border-white hover:translate-x-4 transition-all duration-400 ease-in  ">routers</li>
        <li className="hover:border-b hover:border-white hover:translate-x-4 transition-all duration-400 ease-in  ">
          <Link href='/rackmounts'>rackmounts</Link>
        </li>
      </ul>
    </div>
  );
}
