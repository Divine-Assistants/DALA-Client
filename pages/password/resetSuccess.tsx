import { AuthLayout, Button } from "@/components";
import Link from "next/link";
import React from "react";

export default function RegistrationSuccess() {
  return (
    <AuthLayout>
      <div className="grid place-items-center h-[80%]">
        <div>
          <div className="px-[36px] rounded-[15px] bg-[#004AAD36] pt-[56px] pb-[36px]">
            <h1 className="font-semibold text-[20px] sm:text-[28px] text-center">
              Password reset successful
            </h1>
            <p className="font-medium text-[16px] sm:text-[20px] mt-[12px] sm:mt-[7px] text-center">
              Congratulations, you have successfully reset your password. Kindly
              log in to resume your seamless learning on DALA
            </p>
          </div>
          <Link href="/login/welcome">
            <Button
              text="Log In"
              className="font-semibold text-[16px] sm:text-[24px] bg-mine text-white py-[18px]"
              width="100%"
              mt="38px"
            />
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
