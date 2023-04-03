import { AuthLayout, Button } from "@/components";
import Link from "next/link";
import React from "react";

export default function StudentSignup() {
  return (
    <AuthLayout>
      <div className="w-full">
        <h1 className="font-semibold text-center sm:text-left text-[24px] sm:text-[40px]">
          Reset Password
        </h1>
        <p className="font-medium text-center sm:text-left text-[16px] sm:text-[20px]">
          Please reset your password on DALA
        </p>
        <form>
          <div className="mt-[50px]">
            <label className="font-medium text-[16px] sm:text-[20px]">
              Password
            </label>
            <input
              type={"password"}
              placeholder="Enter New Password"
              className="block mt-[15px] p-[15px] bg-transparent rounded-[10px] w-full font-medium text-[16px] sm:text-[20px] placeholder:text-[#9C9C9C] focus:outline-none"
              style={{ border: "2px solid gray" }}
            ></input>
          </div>
          <div className="mt-[40px]">
            <label className="font-medium text-[16px] sm:text-[20px]">
              Confirm Password
            </label>
            <input
              type={"password"}
              placeholder="Confirm New Password"
              className="block mt-[15px] p-[15px] bg-transparent rounded-[10px] w-full font-medium text-[16px] sm:text-[20px] placeholder:text-[#9C9C9C] focus:outline-none"
              style={{ border: "2px solid gray" }}
            ></input>
          </div>
          <div className="hidden sm:block">
            <Link href={"/password/resetSuccess"}>
              <Button
                text="Submit"
                size="24px"
                weight={500}
                className="py-[18px] bg-mine text-white"
                border="2px solid #004AAD"
                width="100%"
                mt="67px"
              />
            </Link>
          </div>
          <div className="sm:hidden">
            <Link href={"/password/resetSuccess"}>
              <Button
                text="Submit"
                size="24px"
                weight={500}
                className="py-[18px] bg-mine text-white"
                border="2px solid #004AAD"
                width="100%"
                mt="140px"
              />
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
