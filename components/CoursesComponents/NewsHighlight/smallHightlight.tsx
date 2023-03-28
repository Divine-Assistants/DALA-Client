import Link from "next/link";
import React from "react";

export function SmallHightlight() {
  return (
    <div
      className="grid grid-cols-3 bg-white p-[11px] rounded-[15px] items-center gap-x-[25px]"
      style={{ boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="col-span-1 bg-red-500 h-full rounded-[15px] overflow-hidden">
        <img
          src="/images/news3.svg"
          alt="news cover"
          className="h-full w-full object-cover"
        ></img>
      </div>
      <div className="col-span-2">
        <p className="font-semibold text-[18px] text-mine">Marketing</p>
        <p className="font-bold text-[24px] mt-[11px]">
          8 E-Commerce Email Marketing Best Practices To Boost Your ROI in 2022
        </p>
        <Link
          href={"/news/11"}
          className="font-semibold text-[19px] text-[#DA063F] mt-[11px]"
        >
          Read more...
        </Link>
      </div>
    </div>
  );
}
