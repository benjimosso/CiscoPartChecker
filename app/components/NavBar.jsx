import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";

export default function NavBar() {
  return (
    <nav className="bg-neutral-500 text-neutral-100 p-4">
      <ul className="flex justify-between items-center">
        <li>
          <Link href="/">
            <a className="flex items-center">
              <IoMdHome />
              <span className="pl-2">Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="flex items-center">
              <IoMdInformationCircle />
              <span className="pl-2">About</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
