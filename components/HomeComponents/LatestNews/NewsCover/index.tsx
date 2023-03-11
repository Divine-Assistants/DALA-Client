import React from "react";

export function NewsCover() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="rounded-[15px] h-[65%] bg-red-400 overflow-hidden">
        <img
          src="/images/news-main-cover.svg"
          alt="news cover"
          className="h-full"
          style={{ objectFit: "cover" }}
        ></img>
      </div>
      <div className="mt-[20px]">
        <p className="font-semibold text-[24px] text-mine">Marketing</p>
        <p className="font-bold text-[34px] mt-[6px]">
          8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022
        </p>
        <p className="text-[20px] mt-[6px]">
          Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae
          ducimus dolorum obcaecati...
        </p>
        <div className="mt-[20px] flex items-center justify-between gap-x-[40px]">
          <p className="font-semibold text-[24px] text-[#DA063F] cursor-pointer">
            Read more...
          </p>
          <p className="font-semibold text-[24px]">November 9th 2023</p>
        </div>
      </div>
    </div>
  );
}
