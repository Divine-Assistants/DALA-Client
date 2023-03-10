import React from "react";

interface DonorsProps {
  coverImg: string;
  name: string;
  portfolio: string;
}

export function Donors({ coverImg, name, portfolio }: DonorsProps) {
  return (
    <div className="rounded-[15px] overflow-hidden">
      <div>
        <img src={coverImg} alt="partner"></img>
      </div>
      <div className="px-[25px] pt-[16px] pb-[25px] bg-mine h-full">
        <p className="font-semibold text-[24px] text-white">{name}</p>
        <p className="text-[24px] mt-[20px] text-white text-justify">
          {portfolio}
        </p>
      </div>
    </div>
  );
}
