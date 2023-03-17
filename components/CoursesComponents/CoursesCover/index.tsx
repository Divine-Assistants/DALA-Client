import { Input } from "@/components";
import React from "react";

export function CoursesCover() {
  return (
    <section className="px-[28px] xl:px-[95px] py-[236px] xl:py-[76px]">
      <div className="relative overflow-hidden hidden rounded-[15px] w-full h-full md:grid place-items-center">
        <img
          src="/images/blue-background.svg"
          alt="background"
          className="w-full h-full object-cover hidden md:block"
        ></img>
        <div className="w-full h-full z-20 absolute top-0 left-0 grid place-items-center">
          <h1 className="font-semibold text-[50px] text-white">Courses</h1>
        </div>
      </div>
      <div className="md:hidden">
        <h1 className="font-semibold text-[32px]">Courses</h1>
        <div className="mt-[38px] mb-[22px]">
          <Input
            type="text"
            placeholder="Search Courses"
            backgroundColor="transparent"
            border="1px solid #ABABAB"
            rounded="10px"
            paddingBlock="10px"
            paddingInline="15px"
            width="100%"
            color="#ABABAB"
            paddingRight="60px"
            inputImg="/images/Search-gray.svg"
          />
        </div>
        <p className="text-[16px] mt-[5px]">
          Explore over 100 courses with certificates and job offers on
          DivineAssistants Learning Academy
        </p>
      </div>
    </section>
  );
}
