import React from "react";

interface GainItemsProps {
  src: string;
  title: string;
  content: string;
}
export function GainItems({ src, title, content }: GainItemsProps) {
  return (
    <div className="py-[36px] px-[46px] w-fit bg-white rounded-[15px]">
      <div className="h-[87px] w-[87px] bg-[#004AAD] grid place-items-center rounded-[50%] mx-auto">
        <img src={src} alt="time"></img>
      </div>
      <h5 className="font-semibold text-[28px] mt-[14px]">{title}</h5>
      <p className="text-[20px] mt-[14px]">{content}</p>
    </div>
  );
}
