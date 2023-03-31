import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../FormElements/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { MobileNavModal } from "../Modals/MobileNavModal";

export function NavBar() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const router = useRouter();

  return (
    <>
      {<MobileNavModal openModal={openModal} setOpenModal={setOpenModal} />}
      <header
        className="py-[13px] px-[31px] md:px-[99px] flex items-center gap-x-[5%] top-0 justify-between fixed w-full border-b-1 nav-bar md:bg-white overflow-hidden bg-[#F1F1F1]"
        style={{ zIndex: 50 }}
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
        <ul className="hidden sm:flex items-center gap-x-[76px]">
          <li
            className="text-[20px]"
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
        <Link href={"/login"} className="hidden sm:block">
          <Button
            text="Log In"
            border="2px solid #004AAD"
            width="200px"
            className="py-[10px]"
          />
        </Link>
        <div className="sm:hidden" onClick={() => setOpenModal((val) => !val)}>
          <RxHamburgerMenu className="text-[50px] cursor-pointer" />
        </div>
      </header>
    </>
  );
}
