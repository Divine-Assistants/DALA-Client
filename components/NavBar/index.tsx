import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export function NavBar() {
  const router = useRouter();

  return (
    <header
      className="py-[13px] px-[99px] flex items-center gap-x-[5%] justify-between fixed w-full"
      style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)" }}
    >
      <Link href={"/"}>
        <img src="./images/Logo1.svg" alt="logo"></img>
      </Link>
      <ul className="flex items-center gap-x-[76px]">
        <li
          className="text-[24px]"
          style={router.pathname === "/" ? { color: "#004AAD" } : {}}
        >
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blogs"}>News/Blogs</Link>
        </li>
        <li>
          <Link href={"/courses"}>Courses</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact Us</Link>
        </li>
      </ul>
      <div>
        <button>Log In</button>
      </div>
    </header>
  );
}
