import { AuthLayout, Button } from "@/components";
import Link from "next/link";
import { setuid } from "process";
import React, { useState } from "react";

export default function SignupDetail() {
  const [userDetails, setUserDetails] = useState({
    gender: "",
    purpose: "",
  });

  return (
    <AuthLayout>
      <div>
        <h1 className="font-semibold text-center sm:text-left text-[24px] sm:text-[40px]">
          About you
        </h1>
        <p className="font-medium text-center sm:text-left text-[16px] sm:text-[20px]">
          Tell us a little bit about yourself
        </p>
        <div className="mt-[44px]">
          <p className="font-medium text-[16px] sm:text-[24px]">Gender</p>
          <div className="mt-[10px] flex items-center gap-x-[20px] flex-wrap gap-y-[10px]">
            <p
              className="px-[20px] py-[18px] bg-transparent text-mine hover:text-white hover:bg-mine font-medium text-[14px] sm:text-[20px] rounded-[15px] w-fit cursor-pointer"
              style={
                userDetails.gender === "Male"
                  ? {
                      backgroundColor: "#004AAD",
                      border: "2px solid #004AAD",
                      color: "white",
                    }
                  : { border: "2px solid #004AAD" }
              }
              onClick={() =>
                setUserDetails((val) => {
                  return { ...val, gender: "Male" };
                })
              }
            >
              Male
            </p>
            <p
              className="px-[20px] py-[18px] bg-transparent text-mine hover:text-white hover:bg-mine font-medium text-[14px] sm:text-[20px] rounded-[15px] w-fit cursor-pointer"
              style={
                userDetails.gender === "Female"
                  ? {
                      backgroundColor: "#004AAD",
                      border: "2px solid #004AAD",
                      color: "white",
                    }
                  : { border: "2px solid #004AAD" }
              }
              onClick={() =>
                setUserDetails((val) => {
                  return { ...val, gender: "Female" };
                })
              }
            >
              Female
            </p>
            <p
              className="px-[20px] py-[18px] bg-transparent text-mine hover:text-white hover:bg-mine font-medium text-[14px] sm:text-[20px] rounded-[15px] w-fit cursor-pointer"
              style={
                userDetails.gender === "None"
                  ? {
                      backgroundColor: "#004AAD",
                      border: "2px solid #004AAD",
                      color: "white",
                    }
                  : { border: "2px solid #004AAD" }
              }
              onClick={() =>
                setUserDetails((val) => {
                  return { ...val, gender: "None" };
                })
              }
            >
              Prefer not to say
            </p>
          </div>
        </div>
        <div className="mt-[34px]">
          <p className="font-medium text-[16px] sm:text-[24px]">
            Why are you on DALA?
          </p>
          <div className="mt-[10px]">
            <p
              className="px-[20px] py-[18px] bg-transparent text-mine hover:text-white hover:bg-mine font-medium text-[14px] sm:text-[20px] rounded-[15px] cursor-pointer"
              style={
                userDetails.purpose === "New"
                  ? {
                      backgroundColor: "#004AAD",
                      border: "2px solid #004AAD",
                      color: "white",
                    }
                  : { border: "2px solid #004AAD" }
              }
              onClick={() =>
                setUserDetails((val) => {
                  return { ...val, purpose: "New" };
                })
              }
            >
              Learn something new
            </p>
            <p
              className="px-[20px] py-[18px] bg-transparent text-mine hover:text-white hover:bg-mine font-medium text-[14px] sm:text-[20px] rounded-[15px] mt-[10px] cursor-pointer"
              style={
                userDetails.purpose === "Advance"
                  ? {
                      backgroundColor: "#004AAD",
                      border: "2px solid #004AAD",
                      color: "white",
                    }
                  : { border: "2px solid #004AAD" }
              }
              onClick={() =>
                setUserDetails((val) => {
                  return { ...val, purpose: "Advance" };
                })
              }
            >
              Advance in my current field
            </p>
          </div>
        </div>
        <p className="font-medium text-[16px] sm:text-[24px] mt-[44px]">
          Take your first course on us
        </p>
        <div className="justify-between mt-[44px] hidden sm:flex">
          <Link href={"/signup/verify"}>
            <Button
              text="Back"
              size="24px"
              weight={500}
              className="px-[52px] py-[18px] bg-mine text-white"
            />
          </Link>
          <Link href={"/signup/courses"}>
            <Button
              text="Next"
              size="24px"
              weight={500}
              className="px-[52px] py-[18px] bg-mine text-white"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-y-[20px] mt-[44px] sm:hidden">
          <Link href={"/signup/verify"}>
            <Button
              text="Back"
              size="24px"
              weight={500}
              className="px-[52px] py-[18px] bg-transparent text-mine hover:bg-mine hover:text-white"
              border="2px solid #004AAD"
              width="100%"
            />
          </Link>
          <Link href={"/signup/courses"}>
            <Button
              text="Next"
              size="24px"
              weight={500}
              className="px-[52px] py-[18px] bg-transparent text-mine hover:bg-mine hover:text-white"
              border="2px solid #004AAD"
              width="100%"
            />
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
