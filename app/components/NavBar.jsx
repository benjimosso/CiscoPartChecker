import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";

export default function NavBar() {

  console.log("NavBar: Nooo! I am not working!")

  return (
    <nav className="bg-neutral-500 text-neutral-100 p-4">
      <ul className="flex justify-between items-center">
        <li>
          <Link href="/" >
            <div className="flex items-center">
              <IoMdHome />
              <span className="pl-2">Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <div className="flex items-center">
              <IoMdInformationCircle />
              <span className="pl-2">About</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
