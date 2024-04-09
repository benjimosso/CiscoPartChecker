import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";
// components
import LogouButton from "./LogouButton";
import SearchBar from "./SearchBar";
import LowerNav from "./LowerNav";
//shadcn components
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


export default function NavBar({ user, ciscoData }) {
  if (user) {
    const re = new RegExp("^.+?(?=@)");
    const username = user.email.match(re);
  }
  return (
    <>
      <nav className="bg-white text-black p-4 flex justify-between items-baseline border-solid border-b-4 border-slate-300 ">
        <ul className="flex items-center pl-8">
          <li className="pl-4 pr-4">
            {/* TO CHECK, NEED THE HOME PAGE BUTTON TO REFRESH THE PAGE... */}
            <Link href="/">
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
        {/* It could be an idea to put the searchbar here...  */}
        <SearchBar ciscoData={ciscoData} />
        {user ? (
          <div className="flex items-center">
            <p className="pr-4">Hi, </p>
            <Avatar>
              <AvatarImage
                src="https://avatars.dicebear.com/api/human/123.svg"
                alt="avatar"
                
              />
              {/* <AvatarFallback>DM</AvatarFallback>   */}
            </Avatar>
            <LogouButton />
          </div>
        ) : (
          <ul className="flex items-center pr-8">
            <li className="pr-4">
              <Link href="/login">
                <p className="font-bold">Login</p>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <p className="font-bold">Signup</p>
              </Link>
            </li>
          </ul>
        )}
      </nav>
      <LowerNav />
    </>
  );
}
