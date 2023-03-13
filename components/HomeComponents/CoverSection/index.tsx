import React from "react";
import { Button } from "../../FormElements/Button";

export function FrontSection() {
  return (
    <section className="md2:h-[1026px] pt-[56px] xl:pt-[150px] text-center md2:text-left lg:pt-[50px] relative md2:flex items-center px-[16px] lg:px-[108px] md2:overflow-hidden">
      <div style={{ flex: 0.5 }}>
        <h1 className="font-semibold text-[40px] md2:text-[50px] lg:text-[60px]">
          Kickstart your career in any field of your choice
        </h1>
        <p className="md2:text-[28px] text-[16px] mt-[44px]">
          Register for any course from anywhere at anytime by choosing from a
          wide range of courses available on DivineAssistants Learning Academy
        </p>
        <p className="font-semibold text-[28px] mt-[32px] md2:mt-[14px]">
          Take your first course on us
        </p>
        <div className="absolute w-[100%] lg:w-[60%] xl:left-0 xl:flex-row z-20 bottom-[60px] hidden md:flex md2:block md2:w-fit md2:right-0 md2:flex md2:flex-col md2:items-center md2:gap-y-[20px] justify-between items-center px-[50px]">
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
      <div
        className="w-full md2:w-fit md2:absolute md2:right-[-200px] mt-[23px] right-[-50px] xl:right-[25px] xl:bottom-[-100px] w-[595px]"
        style={{ zIndex: 5 }}
      >
        <img src="/images/study-girl.svg" alt="model" className="mx-auto"></img>
        <div
          className="absolute w-[80%] bottom-[56px] md:hidden grid place-items-center left-[50%]"
          style={{ transform: "translateX(-50%)" }}
        >
          <Button
            text="Get Started"
            paddingBlock="18px"
            backgroundColor="#004AAD"
            size="20px"
            color="white"
            width="100%"
          />
        </div>
      </div>
      <div
        className="w-[1150px] h-[1000px] rounded-[50%] absolute hidden xl:grid place-items-center"
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
