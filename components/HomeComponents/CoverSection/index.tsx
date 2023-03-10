import React from "react";
import { Button } from "../../FormElements/Button";

export function FrontSection() {
  return (
    <section
      className="pt-[124px] h-[1026px] relative flex items-center px-[108px]"
      style={{ overflow: "hidden" }}
    >
      <div style={{ flex: 0.5 }}>
        <h1 className="font-semibold text-[60px]">
          Kickstart your career in any field of your choice
        </h1>
        <p className="text-[28px] mt-[44px]">
          Register for any course from anywhere at anytime by choosing from a
          wide range of courses available on DivineAssistants Learning Academy
        </p>
        <p className="font-semibold text-[28px] mt-[14px]">
          Take your first course on us
        </p>
        <div className="absolute w-[60%] z-20 bottom-[60px] flex justify-between items-center">
          <Button
            text="Join for free"
            paddingBlock="18px"
            paddingInline="42px"
            backgroundColor="#004AAD"
            color="white"
          />
          <Button
            text="Learn from anywhere in the world"
            paddingBlock="16px"
            paddingInline="36px"
            backgroundColor="#fff"
            size="24px"
            weight={500}
            shadow="9px 9px 31px -5px rgba(0, 0, 0, 0.22)"
            width="332px"
            color="black"
            src="/images/Polygon1.svg"
            bottom="20px"
            right="36px"
          />
        </div>
      </div>
      <img
        src="/images/study-girl.svg"
        alt="model"
        className="absolute right-[25px] bottom-[-100px] h-[834px] w-[595px]"
        style={{ zIndex: 5 }}
      ></img>
      <div
        className="w-[1150px] h-[1000px] rounded-[50%] absolute grid place-items-center"
        style={{
          transform: "rotate(-72.9deg)",
          right: "-450px",
          border: "3px solid #DA063F",
        }}
      >
        {" "}
        <div
          className="w-[1100px] h-[950px] bg-white rounded-[50%] absolute"
          style={{ backgroundColor: "#004AAD" }}
        ></div>
      </div>
    </section>
  );
}
