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
    <div className="rounded-[15px] lg:hover:bg-gray-300 cursor-pointer p-[10px]">
      <div className="rounded-[15px] h-[50%] overflow-hidden">
        <img
          src={coverImg}
          alt="news cover"
          className="w-full h-full object-cover"
        ></img>
      </div>
      <div className="mt-[15px]">
        <p className="font-bold text-[10px] md2:text-[15px] text-mine">
          {title}
        </p>
        <p className="font-bold text-[13px] md2:text-[15px] mt-[2px]">
          {description}
        </p>
        <p className="md2:text-[13px] text-[10px] mt-[2px]">{content}</p>
        <p className="font-semibold text-[10px] md2:text-[12px] mt-[5px]">
          {date}
        </p>
      </div>
    </div>
  );
}
