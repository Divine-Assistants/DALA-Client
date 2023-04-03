import { AuthLayout, Button, LoadingModal } from "@/components";
import React, { useRef, useState } from "react";
import Link from "next/link";

export default function Verify() {
  const input1 = useRef<HTMLInputElement>(null);
  const input2 = useRef<HTMLInputElement>(null);
  const input3 = useRef<HTMLInputElement>(null);
  const input4 = useRef<HTMLInputElement>(null);

  const [verificationCode, setVerificationCode] = useState<string>("");
  console.log(verificationCode);

  return (
    <AuthLayout>
      {/* <LoadingModal /> */}
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
              className="p-[15px] font-medium text-[24px] sm:text-[36px] text-mine rounded-[10px] w-[60px] md:w-[100px] text-center verify-input"
              ref={input1}
              onChange={(e) => {
                setVerificationCode((val) => val + e.target.value);
                input2.current?.focus();
              }}
            ></input>
            <input
              type={"text"}
              className="p-[15px] font-medium text-[24px] sm:text-[36px]  text-mine rounded-[10px] w-[60px] md:w-[100px] text-center verify-input"
              ref={input2}
              onChange={(e) => {
                setVerificationCode((val) => val + e.target.value);
                input3.current?.focus();
              }}
            ></input>
            <input
              type={"text"}
              className="p-[15px] font-medium text-[24px] sm:text-[36px] text-mine rounded-[10px] w-[60px] md:w-[100px] text-center verify-input"
              ref={input3}
              onChange={(e) => {
                setVerificationCode((val) => val + e.target.value);
                input4.current?.focus();
              }}
            ></input>
            <input
              type={"text"}
              className="p-[15px] font-medium text-[24px] sm:text-[36px] text-mine rounded-[10px] w-[60px] md:w-[100px] text-center verify-input"
              ref={input4}
              onChange={(e) =>
                setVerificationCode((val) => val + e.target.value)
              }
            ></input>
          </div>
          <p className="font-medium text-[15px] sm:text-[20px] text-[#959595] text-center">
            Didnt get the code yet?
            <Link href="/resend" className="text-mine">
              {" "}
              Re-send
            </Link>
          </p>
          <Link href={"/signup/detail"}>
            <Button
              text="Submit"
              className="py-[18px] text-mine bg-white hover:text-white hover:bg-mine"
              border="2px solid #004AAD"
              width="100%"
              size="24px"
              weight={500}
              mt="40px"
            />
          </Link>
          <Link href={"/signup/student"}>
            <Button
              text={"Back"}
              className="py-[18px] text-mine bg-white hover:text-white hover:bg-mine"
              border="2px solid #004AAD"
              width="100%"
              size="24px"
              weight={500}
              mt="20px"
            />
          </Link>
        </form>
      </div>
    </AuthLayout>
  );
}
