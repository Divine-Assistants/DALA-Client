import Image from "next/image";
import React from "react";

interface PartnersProps {
  coverImg: string;
  name: string;
  portfolio: string;
}

export function Partner({ coverImg, name, portfolio }: PartnersProps) {
  return (
    <div className="rounded-[15px] overflow-hidden">
      <div>
        <Image
          src={coverImg}
          alt="partner"
          className="w-full object-cover"
          width={632}
          height={322}
        />
      </div>
      <div className="px-[25px] pt-[16px] pb-[25px] bg-mine h-full">
        <p className="font-semibold text-[16px] md:text-[24px] text-white">
          {name}
        </p>
        <p className="md:text-[24px] text-[14px] mt-[20px] text-white text-justify">
          {portfolio}
        </p>
      </div>
    </div>
  );
}
