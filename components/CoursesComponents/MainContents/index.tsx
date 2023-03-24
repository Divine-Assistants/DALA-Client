import React from "react";

interface MainContentProps {
  documentSize?: string;
}

export function MainContent({ documentSize }: MainContentProps) {
  return (
    <div className="flex flex-col gap-y-[14px] mt-[14px]">
      <div className="bg-[#D2DCE8] py-[18px] px-[28px] rounded-[8px] flex items-center justify-between cursor-pointer">
        <div className="flex gap-x-[19px]">
          <img
            src={
              !documentSize
                ? "/images/play-button-black.svg"
                : "/images/document-black.svg"
            }
            alt="arrow-right"
          ></img>
          <p className="font-medium text-[20px]">Introduction</p>
        </div>
        {!documentSize ? (
          <ul className="flex font-medium text-[20px] gap-x-[34px]">
            <li className="text-mine">Preview </li>
            <li>07:34</li>
          </ul>
        ) : (
          <p className="font-medium text-[20px]">{documentSize}</p>
        )}
      </div>
    </div>
  );
}
