import React from "react";

export function TopCourses() {
  return (
    <div className="grid grid-cols-4 gap-x-[10px]">
      <div className="col-span-1 rounded-[5px] overflow-hidden">
        <img
          src="/images/recommendation-img-6.svg"
          alt="course-cover"
          className="object-cover w-full h-full"
        ></img>
      </div>
      <div className="col-span-3">
        <h3 className="font-semibold text-[15px] text-[#1E1E1E]">
          Social Media Marketing | with Hidden Tips and Tricks
        </h3>
        <div className="flex items-center justify-between gap-x-[30px]">
          <p className="font-semibold text-[12px] text-[#004AAD]">
            Graphic Design
          </p>
          <div className="flex items-center gap-x-[9px]">
            <div className="flex items-center gap-x-[5px]">
              <p className="font-semibold text-[12px] text-[#414141]">4.7</p>
              <img src="/images/yellow-star.svg" alt="star"></img>
            </div>
            <p className="font-semibold text-[12px] text-[#414141]">(5.7k)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
