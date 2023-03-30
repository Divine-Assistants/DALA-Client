import { NavBar } from "@/components";
import Image from "next/image";
import React from "react";

export default function SigninMethod() {
  return (
    <>
      <NavBar />
      <div
        className="lg:grid mt-[124px] px-[28px] xl:px-[95px] py-[80px] gap-x-[20px] xl:gap-x-[50px]"
        style={{ gridTemplateColumns: "1fr 2fr" }}
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
                className="py-[25px] px-[15px] rounded-[15px] w-fit mt-[15px]"
                style={{ border: "2px solid gray" }}
              >
                <Image
                  src={"/images/student-cap-black.svg"}
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
                className="py-[25px] px-[15px] rounded-[15px] w-fit mt-[15px]"
                style={{ border: "2px solid gray" }}
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
        </div>
      </div>
    </>
  );
}
