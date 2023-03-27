import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { Button } from "../FormElements/Button";
import { RxHamburgerMenu } from "react-icons/rx";

export function NavBar() {
  const router = useRouter();

  return (
    <header
      className="py-[13px] px-[31px] md:px-[99px] flex items-center gap-x-[5%] justify-between fixed w-full bg-white overflow-hidden"
      style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)", zIndex: 100 }}
    >
      <Link href={"/"}>
        <div className="h-[94px] w-[79px]">
          <img
            src="/images/Logo1.svg"
            className="w-full h-full"
            alt="logo"
          ></img>
        </div>
      </Link>
      <ul className="hidden md:flex items-center gap-x-[76px]">
        <li
          className="text-[24px]"
          style={router.pathname === "/" ? { color: "#004AAD" } : {}}
        >
          <Link href={"/"}>Home</Link>
        </li>
        <li
          className="text-[20px]"
          style={router.pathname === "/about" ? { color: "#004AAD" } : {}}
        >
          <Link href={"/about"}>About</Link>
        </li>
        <li
          className="text-[20px]"
          style={router.pathname === "/news" ? { color: "#004AAD" } : {}}
        >
          <Link href={"/news"}>News/Blogs</Link>
        </li>
        <li
          className="text-[20px]"
          style={router.pathname === "/courses" ? { color: "#004AAD" } : {}}
        >
          <Link href={"/courses"}>Courses</Link>
        </li>
        <li
          className="text-[20px]"
          style={router.pathname === "/contact" ? { color: "#004AAD" } : {}}
        >
          <Link href={"/contact"}>Contact Us</Link>
        </li>
      </ul>
      <div className="hidden md:block">
        <Button text="Log In" border="2px solid #004AAD" width="200px" />
      </div>
      <div className="md:hidden">
        <RxHamburgerMenu className="text-[50px] cursor-pointer" />
      </div>
    </header>
  );
}
