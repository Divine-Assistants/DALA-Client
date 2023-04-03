import { Button } from "@/components/FormElements/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function DALATutors() {
  return (
    <div className="py-[20px] px-[23px] bg-white rounded-[15px]">
      <div className="rounded-[15px] overflow-hidden">
        <Image
          src="/images/tutor-picture.svg"
          alt="tutor"
          className="w-full h-full object-cover"
          width={447}
          height={318}
        />
      </div>
      <div className="text-[#000000]">
        <p className="font-semibold text-[20px] sm:text-[32px] text-mine mt-[15px]">
          Gratta Orji
        </p>
        <p className="font-semibold text-[13px] sm:text-[20px] mt-[5px]">
          Business Analyst & Specialist
        </p>
        <div className="flex gap-x-[30px] items-center mt-[19px]">
          <img src="/images/star-outline-black.svg" alt="star"></img>
          <p className="text-[14px] sm:text-[20px] font-medium">
            4 Star Rating{" "}
          </p>
        </div>
        <div className="flex gap-x-[30px] items-center mt-[5px]">
          <img src="/images/Comments-black.svg" alt="star"></img>
          <p className="text-[14px] sm:text-[20px] font-medium">
            11,467 Reviews
          </p>
        </div>
        <div className="flex gap-x-[30px] items-center mt-[5px]">
          <img src="/images/courses-black.svg" alt="star"></img>
          <p className="text-[14px] sm:text-[20px] font-medium">76 Courses</p>
        </div>
      </div>
      <Link href={"/courses/tutors/1"}>
        <Button
          text="Learn More"
          width="100%"
          className="bg-mine text-white py-[18px]"
          mt="19px"
        />
      </Link>
    </div>
  );
}
