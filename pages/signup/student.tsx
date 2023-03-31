import { AuthLayout, Button } from "@/components";
import Link from "next/link";
import React from "react";

export default function StudentSignup() {
  return (
    <AuthLayout>
      <div>
        <h1 className="font-semibold text-center sm:text-left text-[24px] sm:text-[40px]">
          Create a student account
        </h1>
        <p className="font-medium text-center sm:text-left text-[16px] sm:text-[20px]">
          Sign up and start learning on DALA
        </p>
        <form>
          <div className="mt-[28px] flex flex-col gap-x-[40px] sm:grid grid-cols-2 gap-y-[40px]">
            <div>
              <label className="font-medium text-[16px] sm:text-[20px]">
                First Name
              </label>
              <input
                type={"text"}
                placeholder="Enter First Name"
                className="block mt-[10px] sm:mt-[15px] p-[15px] bg-transparent rounded-[10px] font-medium text-[16px] w-full sm:text-[20px] placeholder:text-[#9C9C9C] focus:outline-none"
                style={{ border: "2px solid gray" }}
              ></input>
            </div>
            <div>
              <label className="font-medium text-[16px] sm:text-[20px]">
                Last Name
              </label>
              <input
                type={"text"}
                placeholder="Enter Last Name"
                className="block mt-[10px] sm:mt-[15px] p-[15px] bg-transparent rounded-[10px] font-medium text-[16px] w-full sm:text-[20px] placeholder:text-[#9C9C9C] focus:outline-none"
                style={{ border: "2px solid gray" }}
              ></input>
            </div>
          </div>
          <div className="mt-[40px]">
            <label className="font-medium text-[16px] sm:text-[20px]">
              Email
            </label>
            <input
              type={"email"}
              placeholder="Enter Last Name"
              className="block mt-[15px] p-[15px] bg-transparent rounded-[10px] w-full font-medium text-[16px] sm:text-[20px] placeholder:text-[#9C9C9C] focus:outline-none"
              style={{ border: "2px solid gray" }}
            ></input>
          </div>
          <div className="mt-[40px]">
            <label className="font-medium text-[16px] sm:text-[20px]">
              Password
            </label>
            <input
              type={"password"}
              placeholder="Enter Last Name"
              className="block mt-[15px] p-[15px] bg-transparent rounded-[10px] w-full font-medium text-[16px] sm:text-[20px] placeholder:text-[#9C9C9C] focus:outline-none"
              style={{ border: "2px solid gray" }}
            ></input>
          </div>
          <p className="font-medium text-[13px] text-center sm:text-left sm:text-[15px] mt-[40px]">
            By signing up, you agree to our{" "}
            <Link href={"/terms-of-service"} className="text-mine">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href={"/privacy"} className="text-mine">
              Privacy Policy
            </Link>
          </p>
          <Button
            text="Next"
            size="24px"
            weight={500}
            className="py-[18px] bg-transparent hover:bg-mine text-mine hover:text-white"
            border="2px solid #004AAD"
            width="100%"
            mt="26px"
          />
          <p className="font-medium text-[15px] sm:text-[20px] mt-[20px] sm:mt-[37px] text-center">
            Already have an account?{" "}
            <Link href={"/login"} className="text-mine">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}
