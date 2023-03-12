import React from "react";
import { Recommend } from "./Recommend";

export function Recommendations() {
  return (
    <section className="px-[28px] lg:px-[95px] py-[200px] lg:py-[422px]">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-[24px] md2:text-[50px]">
          Recommended <span className="hidden md2:inline">for you</span>
        </h3>
        <p className="text-[16px] md2:text-[28px] text-mine cursor-pointer">
          view all
        </p>
      </div>
      <p className="text-[16px] md2:text-[28px] mt-[2px] md:w-[80%] md2:w-[60%]">
        Browse through our recommended courses to get started with your learning
        journey
      </p>
      <div className="md:grid md:grid-cols-2 xl:grid-cols-3 mt-[50px] gap-[20px]">
        <Recommend
          coverImg="/images/recommendation-img-1.svg"
          category="Development"
          description="Complete After Effects & UI-UX Design by using Photoshop"
        />
        <Recommend
          coverImg="/images/recommendation-img-2.svg"
          category="Marketing"
          description="Social Media Marketing | with Hidden Tips and Tricks"
        />
        <Recommend
          coverImg="/images/recommendation-img-3.svg"
          category="Accounting"
          description="Accounting–Financial Accounting Total For Beginners"
        />
        <Recommend
          coverImg="/images/recommendation-img-4.svg"
          category="Sales"
          description="Build A Profitable Online Business Using A Sales Funnel"
        />
        <Recommend
          coverImg="/images/recommendation-img-5.svg"
          category="Development"
          description="Complete After Effects & UI-UX Design by using Photoshop"
        />
        <Recommend
          coverImg="/images/recommendation-img-6.svg"
          category="Business Management"
          description="An Entire MBA in 1 Course:Award Winning Course"
        />
      </div>
    </section>
  );
}
