import { AuthLayout, Button } from "@/components";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function LoginWelcome() {
  return (
    <AuthLayout>
      <div className="w-full">
        <h1 className="font-semibold text-center sm:text-left text-[24px] sm:text-[40px]">
          Welcome back
        </h1>
        <p className="font-medium text-center sm:text-left text-[16px] sm:text-[20px]">
          Please enter your details
        </p>
        <form>
          <div className="mt-[28px]">
            <label className="font-medium text-[16px] sm:text-[20px]">
              Email
            </label>
            <input
              type={"email"}
              placeholder="Enter Email"
              className="block mt-[15px] p-[15px] bg-transparent rounded-[10px] w-full font-medium text-[16px] sm:text-[20px] placeholder:text-[#9C9C9C] focus:outline-none login-input"
            ></input>
          </div>
          <div className="mt-[30px]">
            <label className="font-medium text-[16px] sm:text-[20px]">
              Password
            </label>
            <input
              type={"password"}
              placeholder="Enter Password"
              className="block mt-[15px] p-[15px] bg-transparent rounded-[10px] w-full font-medium text-[16px] sm:text-[20px] placeholder:text-[#9C9C9C] focus:outline-none login-input"
            ></input>
          </div>
          <div className="font-medium text-[15px] sm:text-[20px] mt-[30px] items-center justify-between hidden sm:flex">
            <p>Dont have an account?</p>
            <Link href={"/signup/student"} className="underline text-mine">
              Sign Up
            </Link>
          </div>
          <div className="font-medium text-[15px] sm:text-[20px] mt-[30px] flex items-center justify-between mt-[5px]">
            <p className="underline text-mine">Forgot Password?</p>
            <Link href={"/signup"} className="underline text-mine">
              Become a DALA tutor
            </Link>
          </div>
          <div className="hidden sm:block">
            <Link href={"/dashboard/1"}>
              <Button
                text="Log In"
                size="24px"
                weight={500}
                className="py-[18px] bg-mine  text-white"
                border="2px solid #004AAD"
                width="100%"
                mt="38px"
              />
            </Link>
          </div>
          <div className="sm:hidden">
            <Link href={"/dashboard/1"}>
              <Button
                text="Log In"
                size="24px"
                weight={500}
                className="py-[18px] bg-mine  text-white"
                border="2px solid #004AAD"
                width="100%"
                mt="93px"
              />
            </Link>
          </div>
          <p className="font-medium text-[16px] sm:text-[20px] my-[14px] text-center">
            or
          </p>
          <Link href={"/signup"}>
            <div className="flex gap-x-[24px] items-center justify-center py-[18px] w-full bg-[#D8D8D8] rounded-[15px]">
              <Image
                src="/images/Google.svg"
                alt="google"
                height={32}
                width={32}
              />
              <p className="font-medium text-[16px] sm:text-[24px]">
                Continue with Google
              </p>
            </div>
          </Link>
          <div className="font-medium text-[15px] sm:text-[20px] mt-[20px] items-center gap-x-[5px] justify-center flex sm:hidden">
            <p>Dont have an account?</p>
            <Link href={"/signup/student"} className="underline text-mine">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
