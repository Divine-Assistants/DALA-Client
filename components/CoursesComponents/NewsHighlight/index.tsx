import React from "react";

export function NewsHighlight() {
  return (
    <div
      className="bg-white rounded-[15px] p-[23px]"
      style={{ boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="rounded-[15px] overflow-hidden">
        <img
          src="/images/news1.svg"
          alt="news cover"
          className="w-full object-cover"
        ></img>
      </div>
      <div className="mt-[28px]">
        <p className="font-semibold text-[24px]">Marketing</p>
        <p className="font-bold text-[36px] mt-[5px]">
          8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022
        </p>
      </div>
    </div>
  );
}
