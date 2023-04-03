import { AuthLayout, Button } from "@/components";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [userCategory, setUserCategory] = useState<"student" | "tutor" | "">(
    ""
  );

  return (
    <AuthLayout>
      <div className="w-full">
        <h1 className="font-semibold text-[24px] sm:text-[40px] text-center sm:text-left">
          How are you logging?
        </h1>
        <p className="font-medium text-[16px] sm:text-[20px] mt-[5px] sm:mt-0 text-center sm:text-left">
          Choose how you prefer to log into DivineAssistants Learning Academy
        </p>
        <div className="mt-[40px] xs:grid grid-cols-2 gap-x-[30px] flex flex-col gap-y-[20px]">
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
                I am logging into DivineAssistants Lerning Academy as a student{" "}
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
                src={
                  userCategory === "tutor"
                    ? "/images/tutor-cap-blue.svg"
                    : "/images/tutor-cap-black.svg"
                }
                alt="student"
                width={50}
                height={50}
              />
              <p className="font-semibold text-[16px] sm:text-[26px] my-[24px]">
                Tutor
              </p>
              <p className="font-medium text-[13px] sm:text-[20px]">
                I am logging into DivineAssistants Lerning Academy as a student{" "}
              </p>
            </div>
          </div>
        </div>
        <p className="font-medium text-[20px] mt-[40px] hidden sm:block">
          Dont have an account?{" "}
          <Link href="signup" className="text-mine">
            Sign Up
          </Link>
        </p>
        <Link
          href={
            userCategory === "student"
              ? "/login/welcome"
              : userCategory === "tutor"
              ? "/login/tutor"
              : "/"
          }
        >
          <Button
            text={userCategory ? "Next" : "Back"}
            className="py-[18px] text-mine bg-transparent hover:text-white hover:bg-mine"
            border="2px solid #004AAD"
            width="100%"
            size="24px"
            weight={500}
            mt="40px"
          />
        </Link>
        <div style={userCategory ? { display: "block" } : { display: "none" }}>
          <Button
            text={"Back"}
            className="py-[18px] text-mine bg-transparent hover:text-white hover:bg-mine"
            border="2px solid #004AAD"
            width="100%"
            size="24px"
            weight={500}
            mt="20px"
          />
        </div>
      </div>
    </AuthLayout>
  );
}
