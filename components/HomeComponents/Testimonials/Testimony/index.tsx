import React from "react";

export function Testimony() {
  return (
    <div
      className="py-[29px] px-[58px] bg-white rounded-[15px]"
      style={{ boxShadow: "15px 15px 30px -6px rgba(0, 0, 0, 0.1)" }}
    >
      <div>
        <img src="/images/Quote.svg" alt="quote"></img>
      </div>
      <p className="mt-[10px] text-[28px] text-justify">
        Lorem ipsum dolor sit amet consectetur. Venenatis eu porta ornare
        pellentesque sed erat est et eget. Pellentesque nibh aliquam tellus
        amet. Pellentesque consequat morbi nunc eu dolor iaculis in quis dolor.{" "}
      </p>
      <div className="flex items-center gap-x-[20px] mt-[36px]">
        <div className="rounded-[50%] w-[100px] h-[100px] grid place-items-center">
          <img
            src="/images/recommendation-avatar.svg"
            alt="avatar"
            className="w-full h-full"
          ></img>
        </div>
        <div>
          <p className="font-semibold text-[28px]">James Wan</p>
          <p className="text-[28px]">Software Engineer</p>
        </div>
      </div>
    </div>
  );
}
