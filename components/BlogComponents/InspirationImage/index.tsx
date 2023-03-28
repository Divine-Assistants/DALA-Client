import React from "react";

export function InspirationImage() {
  return (
    <section className="py-[412px] px-[28px] xl:px-[95px]">
      <div className="overflow-hidden rounded-[15px]">
        <img
          src="/images/inspiration.svg"
          alt="sample"
          className="w-full h-full object-cover"
        ></img>
      </div>
      <div className="mt-[33px] rounded-[15px] overflow-hidden relative h-[225px]">
        <img src="/images/blue-background.svg" alt="background"></img>
        <div className="absolute top-0 left-0 grid place-items-center h-full w-full px-[120px] py-[50px]">
          <p className="font-semibold text-[18px] sm:text-[24px] md2:text-[32px] text-white text-center">
            We hope this image inspires your creativity the way it inspires us
            at DivineAssistants Learning Academy
          </p>
        </div>
      </div>
    </section>
  );
}
