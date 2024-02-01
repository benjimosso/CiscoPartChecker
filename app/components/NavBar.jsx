import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";

export default function NavBar() {
  return (
    <nav className="text-right max-w-28 bg-orange-300">
      <div className="flex justify-between items-center">
        <h1 className="font-bold uppercase p-4 border-b border-gray-100">
          <a href="/" className="hover:text-gray-700">
            DHD Part Checker
          </a>
        </h1>
      </div>
      <ul className="text-sm mt-6 hidden md:block" id="menu">
        <li className="text-gray-700 font-bold py-5">
          <Link
            href="/"
            className=" px-4 flex  justify-end border-r-4 border-primary"
          >
            <span>Home</span>
            <IoMdHome className="w-6 h-6" />
          </Link>
        </li>
        <li className="py-1">
          <Link
            href="/about"
            className=" px-4 flex justify-end border-r-4 border-white"
          >
            <span>About</span>
            <IoMdInformationCircle className="w-6 h-6" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
