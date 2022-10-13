import Link from "next/link";
import React from "react";
import { GrMoney } from "react-icons/gr";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

function Navbar() {
  const { status } = useSession();
  const router = useRouter();
  return (
    <div className="flex justify-between px-28 py-2 z-50 sticky top-0">
      <div className="flex gap-3">
        {/* <img src="/img/logo.png" alt="" className='h-14 w-20'/> */}
        <div className="flex justify-center items-center">
          <GrMoney className="h-7 w-7 text-yellow-500" />
        </div>
        <div>
          <h1 className="abril  text-xl">
            cash<span className="abril">Track</span>
          </h1>
        </div>
      </div>
      <div>
        <ul className="flex gap-4 font-bold text-gray-400">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/overview">
              <a>Overview</a>
            </Link>
          </li>
          <li>
            <Link href="daily">
              <a>Daily</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <Link href="/login">
          {status === "authenticated" ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-indigo-500 py-1 text-center px-5 text-white rounded-md outline-none font-bold text-lg"
            >
              sign out{" "}
            </button>
          ) : (
            <button className="bg-indigo-500 py-1 text-center px-5 text-white rounded-md outline-none font-bold text-lg">
              sign in{" "}
            </button>
          )}
        </Link>
      </div>
      {/* <div className='w-[75%] h-2 bg-indigo-500' style={{borderBottom: "solid 1px rgb(99 102 241)"}}></div> */}
    </div>
  );
}

export default Navbar;
