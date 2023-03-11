import React from "react";

interface NewsProps {
  coverImg: string;
  title: string;
  description: string;
  content: string;
  date: string;
}

export function News({
  coverImg,
  title,
  description,
  content,
  date,
}: NewsProps) {
  return (
    <div className="rounded-[15px] hover:bg-gray-300 cursor-pointer p-[10px]">
      <div className="rounded-[15px]">
        <img src={coverImg} alt="news cover"></img>
      </div>
      <div className="mt-[15px]">
        <p className="font-bold text-[15px] text-mine">{title}</p>
        <p className="font-bold text-[15px] mt-[2px]">{description}</p>
        <p className="text-[13px] mt-[2px]">{content}</p>
        <p className="font-semibold text-[12px] mt-[5px]">{date}</p>
      </div>
    </div>
  );
}
