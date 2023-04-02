import { NavBar } from "@/components";
import Image from "next/image";
import React from "react";

interface AuthProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthProps) {
  return (
    <div
      className="h-[80vh] overflow-hidden mt-[124px]"
      style={{ overflowY: "auto" }}
    >
      <NavBar />
      <div
        className="lg:grid px-[28px] xl:px-[95px] py-[80px] gap-x-[20px] xl:gap-x-[50px]"
        style={{ gridTemplateColumns: "1fr 1.3fr", overflowY: "auto" }}
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
        <div className="">{children}</div>
      </div>
    </div>
  );
}
