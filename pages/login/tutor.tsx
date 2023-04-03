import { AuthLayout, Button } from "@/components";
import Link from "next/link";
import React from "react";

export default function LoginTutor() {
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
              Tutor ID
            </label>
            <input
              type={"text"}
              placeholder="Enter Tutor Identification Code"
              className="block mt-[15px] p-[15px] bg-transparent rounded-[10px] w-full font-medium text-[16px] sm:text-[20px] placeholder:text-[#9C9C9C] focus:outline-none login-input"
            ></input>
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
                mt="100px"
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
        </form>
      </div>
    </AuthLayout>
  );
}
