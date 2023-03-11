import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { Button } from "../FormElements/Button";

export function NavBar() {
  const router = useRouter();

  return (
    <header
      className="py-[13px] px-[99px] flex items-center gap-x-[5%] justify-between fixed w-full bg-white overflow-hidden"
      style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)", zIndex: 100 }}
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
        <li className="text-[20px]">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="text-[20px]">
          <Link href={"/blogs"}>News/Blogs</Link>
        </li>
        <li className="text-[20px]">
          <Link href={"/courses"}>Courses</Link>
        </li>
        <li className="text-[20px]">
          <Link href={"/contact"}>Contact Us</Link>
        </li>
      </ul>
      <div>
        <Button text="Log In" border="2px solid #004AAD" />
      </div>
    </header>
  );
}
