import { AuthLayout, Button } from "@/components";
import React from "react";
import Link from "next/link";

export default function Verify() {
  return (
    <AuthLayout>
      <div>
        <h1 className="font-semibold text-center sm:text-left text-[24px] sm:text-[40px]">
          Enter verification code
        </h1>
        <p className="font-medium text-center sm:text-left text-[16px] sm:text-[20px]">
          A four digit code has been sent to your email, please enter the code
          below
        </p>

        <form>
          <div className="my-[75px] flex gap-x-[20px] justify-center md:justify-left">
            <input
              type={"text"}
              className="p-[15px] font-medium text-[24px] sm:text-[36px] text-mine rounded-[10px] w-[60px] md:w-[100px] text-center focus:outline-none"
              style={{ border: "2px solid gray" }}
            ></input>
            <input
              type={"text"}
              className="p-[15px] font-medium text-[24px] sm:text-[36px]  text-mine rounded-[10px] w-[60px] md:w-[100px] text-center focus:outline-none"
              style={{ border: "2px solid gray" }}
            ></input>
            <input
              type={"text"}
              className="p-[15px] font-medium text-[24px] sm:text-[36px] text-mine rounded-[10px] w-[60px] md:w-[100px] text-center focus:outline-none"
              style={{ border: "2px solid gray" }}
            ></input>
            <input
              type={"text"}
              className="p-[15px] font-medium text-[24px] sm:text-[36px] text-mine rounded-[10px] w-[60px] md:w-[100px] text-center focus:outline-none"
              style={{ border: "2px solid gray" }}
            ></input>
          </div>
          <p className="font-medium text-[15px] sm:text-[20px] text-[#959595] text-center">
            Didnt get the code yet?
            <Link href="/resend" className="text-mine">
              {" "}
              Re-send
            </Link>
          </p>
          <div>
            <Button
              text="Submit"
              className="py-[18px] text-mine bg-white hover:text-white hover:bg-mine"
              border="2px solid #004AAD"
              width="100%"
              size="24px"
              weight={500}
              mt="40px"
            />
          </div>
          <div>
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
        </form>
      </div>
    </AuthLayout>
  );
}
