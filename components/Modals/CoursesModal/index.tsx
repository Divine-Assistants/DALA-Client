import { Button } from "@/components/FormElements/Button";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

interface CourseModalProp {
  setModalOn: Dispatch<SetStateAction<boolean>>;
}

export function CoursesModal({ setModalOn }: CourseModalProp) {
  return (
    <div
      className="w-[100vw] top-0 left-0 h-[100vh] fixed z-50 flex justify-center  pt-[130px] pb-[40px]"
      style={{ overflowY: "auto", backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={(e) => {
        setModalOn((val) => !val);
      }}
    >
      <div
        className="px-[23px] py-[21px] rounded-[15px] w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] bg-white z-20 h-fit"
        style={{ boxShadow: "10px 10px 24px rgba(0, 0, 0, 0.19)" }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Button
          text="Sales"
          rounded="8px"
          className="bg-[#004AAD36] text-mine hover:bg-[#004AAD] hover:text-white py-[8px] px-[22px]"
        />
        <h3 className="font-bold text-[24px] mt-[17px]">
          Build A Profitable Online Business Using A Sales Funnel
        </h3>
        <p className="font-semibold text-[28px] my-[17px] text-mine">$84.99</p>
        <div className="my-[17px] text-[15px] font-semibold">
          <p className="text-mine">Updated March 2022</p>
          <p className="text-[#8F8F8F]">
            50+ Total Hours - Advanced Level - Subtitles
          </p>
        </div>
        <p className="text-[17px] font-semibold">
          Everything you need to know about starting a business. Common errors
          associated with new businessess and firms
        </p>
        <div className="mt-[17px] flex flex-col gap-y-[6px]">
          <div className="flex gap-x-[10px]">
            <img src="/images/tick-good-blue.svg" alt="good"></img>
            <p className="font-semibold text-[17px]">
              Learn business startup the right way
            </p>
          </div>
          <div className="flex gap-x-[10px]">
            <img src="/images/tick-good-blue.svg" alt="good"></img>
            <p className="font-semibold text-[17px]">
              The 13 rules in starting a successful business
            </p>
          </div>
          <div className="flex gap-x-[10px]">
            <img src="/images/tick-good-blue.svg" alt="good"></img>
            <p className="font-semibold text-[17px]">
              Business Project Management
            </p>
          </div>
        </div>
        <div className="mt-[36px]">
          <Link href={"/courses/view"}>
            <Button
              text="View Course"
              width="100%"
              border="2px solid #004AAD"
              className="hover:bg-mine text-mine hover:text-white px-[19px] py-[19px]"
            />
          </Link>
          <Button
            text="Save for later"
            width="100%"
            border="2px solid #004AAD"
            mt="15px"
            className="hover:bg-mine text-mine hover:text-white p-[19px]"
          />
        </div>
      </div>
    </div>
  );
}
