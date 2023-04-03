import { AuthLayout, Button } from "@/components";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <div className="w-full">
        <h1 className="font-semibold text-center sm:text-left text-[24px] sm:text-[40px]">
          Forgot password?
        </h1>
        <p className="font-medium text-center sm:text-left text-[16px] sm:text-[20px]">
          Follow these steps to reset your password
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
          <div className="sm:hidden">
            <Link href={"/password/reset"}>
              <Button
                text="Reset Password"
                size="24px"
                weight={500}
                className="py-[18px] bg-mine  text-white"
                border="2px solid #004AAD"
                width="100%"
                mt="140px"
              />
            </Link>
          </div>
          <div className="hidden sm:block">
            <Link href={"/password/changePassword"}>
              <Button
                text="Reset Password"
                size="24px"
                weight={500}
                className="py-[18px] bg-mine  text-white"
                border="2px solid #004AAD"
                width="100%"
                mt="67px"
              />
            </Link>
          </div>
          <p className="font-medium text-[16px] sm:text-[20px] my-[14px] text-center">
            or
          </p>
          <Link href={"/dashboard/1"}>
            <Button
              text="Login"
              size="24px"
              weight={500}
              className="py-[18px] bg-mine  text-white"
              border="2px solid #004AAD"
              width="100%"
            />
          </Link>
        </form>
      </div>
    </AuthLayout>
  );
}
