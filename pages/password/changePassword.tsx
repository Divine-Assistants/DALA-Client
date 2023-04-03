import { AuthLayout, Button } from "@/components";
import React from "react";

export default function RegistrationSuccess() {
  return (
    <AuthLayout>
      <div className="grid place-items-center h-[80%]">
        <div>
          <div className="px-[36px] rounded-[15px] bg-[#004AAD36] pt-[56px] pb-[36px]">
            <h1 className="font-semibold text-[20px] sm:text-[28px] text-center">
              Reset password email sent
            </h1>
            <p className="font-medium text-[16px] sm:text-[20px] mt-[12px] sm:mt-[7px] text-center">
              You should soon receive an email allowing you to reset your
              password. Please make sure to check your spam and trash if you
              can't find the email.
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
