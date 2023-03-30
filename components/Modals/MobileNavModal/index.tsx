import { Button } from "@/components/FormElements/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";
import { GrClose } from "react-icons/gr";

interface ModalProp {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openModal: boolean;
}

export function MobileNavModal({ openModal, setOpenModal }: ModalProp) {
  const router = useRouter();
  return (
    <div
      className="bg-white overflow-auto absolute w-full"
      style={
        openModal
          ? { right: "0", transition: "all 0.5s linear", zIndex: 100 }
          : { right: "100%", transition: "all 0.5s linear", zIndex: 100 }
      }
    >
      <header
        className="flex justify-between items-center pb-[13px] px-[28px] sticky top-0 pt-[49px] left-0 bg-white w-full"
        style={{ borderBottom: "1px solid #E2E2E2" }}
      >
        <div className="flex items-center gap-x-[17px]">
          <Image src={"/images/Logo1.svg"} alt="logo" height={68} width={57} />
          <h2 className="font-semibold text-[16px]">
            DIVINEASSISTANT <br /> LEARNING ACADEMY
          </h2>
        </div>
        <div onClick={() => setOpenModal((val) => !val)}>
          <GrClose className="text-[40px] gap-x-[30px]" />
        </div>
      </header>
      <section
        className="px-[28px] h-[100vh] pb-[60px]"
        style={{ overflowY: "scroll" }}
      >
        <h1 className="font-medium text-[15px] mt-[25px]">Navigation</h1>
        <ul className="mt-[10px] flex flex-col gap-y-[10px]">
          <Link
            href={"/"}
            className="py-[15px] px-[24px] flex justify-between items-center bg-[#004AAD1A] rounded-[5px]"
            style={
              router.pathname === "/"
                ? { backgroundColor: "#004AAD", color: "white" }
                : {}
            }
          >
            <p className="text-[20px]"> Home</p>
            <Image
              src={
                router.pathname === "/"
                  ? "/images/arrow-right-white.svg"
                  : "/images/arrow-right-black.svg"
              }
              width={10}
              height={19}
              alt="arrow"
            />
          </Link>
          <Link
            href={"/about"}
            className="py-[15px] px-[24px] flex justify-between items-center bg-[#004AAD1A] rounded-[5px]"
            style={
              router.pathname === "/about"
                ? { backgroundColor: "#004AAD", color: "white" }
                : {}
            }
          >
            <p className="text-[20px]">About</p>
            <Image
              src={
                router.pathname === "about"
                  ? "/images/arrow-right-white.svg"
                  : "/images/arrow-right-black.svg"
              }
              width={10}
              height={19}
              alt="arrow"
            />
          </Link>
          <Link
            href={"/news"}
            className="py-[15px] px-[24px] flex justify-between items-center bg-[#004AAD1A] rounded-[5px]"
            style={
              router.pathname === "/news"
                ? { backgroundColor: "#004AAD", color: "white" }
                : {}
            }
          >
            <p className="text-[20px]">News/Blogs</p>
            <Image
              src={
                router.pathname === "/news"
                  ? "/images/arrow-right-white.svg"
                  : "/images/arrow-right-black.svg"
              }
              width={10}
              height={19}
              alt="arrow"
            />
          </Link>
          <Link
            href={"/courses"}
            className="py-[15px] px-[24px] flex justify-between items-center bg-[#004AAD1A] rounded-[5px]"
            style={
              router.pathname === "/courses"
                ? { backgroundColor: "#004AAD", color: "white" }
                : {}
            }
          >
            <p className="text-[20px]">Courses</p>
            <Image
              src={
                router.pathname === "/courses"
                  ? "/images/arrow-right-white.svg"
                  : "/images/arrow-right-black.svg"
              }
              width={10}
              height={19}
              alt="arrow"
            />
          </Link>
          <Link
            href={"/contact"}
            className="py-[15px] px-[24px] flex justify-between items-center bg-[#004AAD1A] rounded-[5px]"
            style={
              router.pathname === "/contact"
                ? { backgroundColor: "#004AAD", color: "white" }
                : {}
            }
          >
            <p className="text-[20px]">Contact Us</p>
            <Image
              src={
                router.pathname === "/contact"
                  ? "/images/arrow-right-white.svg"
                  : "/images/arrow-right-black.svg"
              }
              width={10}
              height={19}
              alt="arrow"
            />
          </Link>
        </ul>
        <p className="font-medium text-[15px] mt-[47px]">More</p>
        <div className="mt-[10px] flex items-center justify-between">
          <p className="text-[20px] text-mine">Become a DALA Tutor</p>
          <Image
            src={"/images/arrow-right-blue.svg"}
            alt="arrow"
            width={39}
            height={22}
          />
        </div>
        <div
          className="rounded-[10px] flex items-center gap-x-[19px] w-fit p-[15px] mt-[15px]"
          style={{ border: "3px solid black" }}
        >
          <Image
            src={"/images/globe-black.svg"}
            alt="globe"
            height={26}
            width={26}
          />
          <p className="text-[20px]">English</p>
        </div>
        <div>
          <Button
            text="Get Started"
            width="100%"
            className="py-[18px] text-mine hover:bg-mine hover:text-white"
            border="3px solid #004AAD"
            mt="30px"
          />
          <Button
            text="Log In"
            width="100%"
            className="py-[18px] text-mine hover:bg-mine hover:text-white"
            border="3px solid #004AAD"
            mt="10px"
          />
        </div>
      </section>
    </div>
  );
}
