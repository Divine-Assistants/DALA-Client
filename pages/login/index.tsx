import { Button, NavBar } from "@/components";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function SigninMethod() {
  const [userCategory, setUserCategory] = useState<"student" | "tutor" | "">(
    ""
  );

  return (
    <>
      <NavBar />
      <div
        className="lg:grid mt-[124px] px-[28px] xl:px-[95px] py-[80px] gap-x-[20px] xl:gap-x-[50px]"
        style={{ gridTemplateColumns: "1fr 1.5fr" }}
      >
        <div className="overflow-hidden rounded-[15px] hidden lg:block">
          <Image
            src={"/images/authentication-background.svg"}
            alt="background"
            width={575}
            height={833}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="font-semibold text-[24px] sm:text-[40px] text-center sm:text-left">
            How are you logging?
          </h1>
          <p className="font-medium text-[16px] sm:text-[20px] mt-[5px] sm:mt-0 text-center sm:text-left">
            Choose how you prefer to log into DivineAssistants Learning Academy
          </p>
          <div className="mt-[40px] grid grid-cols-2 gap-x-[30px]">
            <div>
              <p className="font-medium text-[16px] sm:text-[20px]">Student</p>
              <div
                className="py-[25px] px-[15px] rounded-[15px] w-fit mt-[15px] cursor-pointer hover:scale-105"
                style={
                  userCategory === "student"
                    ? {
                        color: "#004AAD",
                        border: "2px solid #004AAD",
                        backgroundColor: "#004AAD0F",
                        transition: "all 0.3s linear",
                      }
                    : {
                        border: "2px solid gray",
                        transition: "all 0.3s linear",
                      }
                }
                onClick={() => setUserCategory("student")}
              >
                <Image
                  src={
                    userCategory === "student"
                      ? "/images/student-cap-blue.svg"
                      : "/images/student-cap-black.svg"
                  }
                  alt="student"
                  width={50}
                  height={50}
                />
                <p className="font-semibold text-[16px] sm:text-[26px] my-[24px]">
                  Student
                </p>
                <p className="font-medium text-[13px] sm:text-[20px]">
                  I am logging into DivineAssistants Lerning Academy as a
                  student{" "}
                </p>
              </div>
            </div>
            <div>
              <p className="font-medium text-[16px] sm:text-[20px]">Tutor</p>
              <div
                onClick={() => setUserCategory("tutor")}
                className="py-[25px] px-[15px] rounded-[15px] w-fit mt-[15px] cursor-pointer hover:scale-105"
                style={
                  userCategory === "tutor"
                    ? {
                        color: "#004AAD",
                        border: "2px solid #004AAD",
                        backgroundColor: "#004AAD0F",
                        transition: "all 0.3s linear",
                      }
                    : {
                        border: "2px solid gray",
                        transition: "all 0.3s linear",
                      }
                }
              >
                <Image
                  src={"/images/tutor-cap-black.svg"}
                  alt="student"
                  width={50}
                  height={50}
                />
                <p className="font-semibold text-[16px] sm:text-[26px] my-[24px]">
                  Tutor
                </p>
                <p className="font-medium text-[13px] sm:text-[20px]">
                  I am logging into DivineAssistants Lerning Academy as a
                  student{" "}
                </p>
              </div>
            </div>
          </div>
          <p className="font-medium text-[20px] mt-[40px]">
            Dont have an account?{" "}
            <Link href="signup" className="text-mine">
              Sign Up
            </Link>
          </p>
          <div>
            <Button
              text={userCategory ? "Next" : "Back"}
              className="py-[18px] text-mine bg-white hover:text-white hover:bg-mine"
              border="2px solid #004AAD"
              width="100%"
              size="24px"
              weight={500}
              mt="40px"
            />
          </div>
          <div
            style={userCategory ? { display: "block" } : { display: "none" }}
          >
            <Button
              text={"Back"}
              className="py-[18px] text-mine bg-white hover:text-white hover:bg-mine"
              border="2px solid #004AAD"
              width="100%"
              size="24px"
              weight={500}
              mt="20px"
            />
          </div>
        </div>
      </div>
    </>
  );
}
