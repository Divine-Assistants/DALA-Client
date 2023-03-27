import React from "react";
import { Button } from "../../FormElements/Button";

export function FrontSection() {
  return (
    <section className="md2:h-[1026px] pt-[56px] text-center md2:text-left lg:pt-[50px] relative md2:flex  px-[16px] lg:px-[108px] md2:overflow-hidden">
      <div style={{ flex: 0.5 }} className="xl:mt-[50px]">
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
        <div className="absolute w-[100%] md2:w-[70%] xl:w-[60%] xl:left-0 xl:flex-row z-20 bottom-[60px] xl:bottom-[150px] hidden gap-x-[50px] md:flex  justify-between items-center px-[50px]">
          <Button
            text="Join for free"
            paddingBlock="18px"
            paddingInline="42px"
            className="bg-mine text-white"
          />
          <Button
            text="Learn from anywhere in the world"
            paddingBlock="16px"
            paddingInline="36px"
            size="24px"
            weight={500}
            shadow="9px 9px 31px -5px rgba(0, 0, 0, 0.22)"
            width="332px"
            src="/images/Polygon1.svg"
            bottom="20px"
            right="36px"
            className="bg-white"
          />
        </div>
      </div>
      <div
        className="w-full md2:w-fit md2:absolute md2:right-[-200px] mt-[23px] right-[-50px] xl:right-[25px] xl:bottom-[0] w-[595px]"
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
            size="20px"
            width="100%"
            className="bg-mine text-white"
          />
        </div>
      </div>
      <div
        className="w-[1200px] h-[1050px] rounded-[50%] absolute hidden xl:grid place-items-center top-[-30px]"
        style={{
          transform: "rotate(-72.9deg)",
          right: "-450px",
          border: "3px solid #DA063F",
        }}
      >
        {" "}
        <div
          className="w-[1150px] h-[1000px] bg-white rounded-[50%] absolute"
          style={{ backgroundColor: "#004AAD" }}
        ></div>
      </div>
    </section>
  );
}
