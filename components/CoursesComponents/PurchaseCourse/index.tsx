import { Button } from "@/components/FormElements/Button";
import React from "react";

export function PurchaseCourse() {
  return (
    <div>
      <div>
        <img
          src="/images/view-course-cover.svg"
          alt="course-cover"
          className="w-full h-full object-cover"
        ></img>
      </div>
      <div className="py-[23px] px-[30px]">
        <p className="font-medium text-[14px]">
          Everything you need to know about starting a business. Common errors
          associated with new businessess and firms{" "}
        </p>
        <div className="mt-[11px] flex items-center gap-x-[45px]">
          <div className="flex items-center gap-x-[10px]">
            <img src="/images/Timer-black.svg" alt="timer"></img>
            <p className="font-semibold text-[12px]">50+ Total Hours</p>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <img src="/images/Volume-level-black.svg" alt="timer"></img>
            <p className="font-semibold text-[12px]">Advanced Level</p>
          </div>
        </div>
        <div className="mt-[12px] flex justify-between">
          <p className="font-semibold text-[28px] text-mine">$84.99</p>
          <Button
            text="Purchase"
            size="16px"
            weight={600}
            className="bg-[#004AAD1A] text-mine hover:bg-mine hover:text-white py-[10px] px-[10px]"
          />
        </div>
        <div className="mt-[11px] flex items-center gap-x-[10px]">
          <div className="w-[44px] h-[44px] rounded-[50%]">
            <img src="/images/tutor-avatar.svg" alt="avatar"></img>
          </div>
          <p className="font-semibold text-[16px] text-[#1E1E1E]">
            Gratta Orji
          </p>
        </div>
        <div className="mt-[14px] text-mine2 flex items-center gap-x-[38px]">
          <div className="flex items-center gap-x-[15px] font-semibold text-[12px]">
            <p className="text-[#D2BC6E]">4.7</p>
            <div className="flex items-center gap-x-[2px]">
              <img src="/images/yellow-star.svg" alt="star"></img>
              <img src="/images/yellow-star.svg" alt="star"></img>
              <img src="/images/yellow-star.svg" alt="star"></img>
              <img src="/images/yellow-star.svg" alt="star"></img>
              <img src="/images/yellow-star.svg" alt="star"></img>
            </div>
            <p className="text-mine2">[53 Ratings]</p>
          </div>
          <p className="font-semibold text-[12px] text-mine2">
            250 Students Enrolled
          </p>
        </div>
        <Button
          text="Start Learning"
          mt="41.5px"
          weight={600}
          size="18px"
          width="100%"
          className="bg-mine text-white px-[14px] py-[14px]"
          rounded="5px"
        />
      </div>
    </div>
  );
}
