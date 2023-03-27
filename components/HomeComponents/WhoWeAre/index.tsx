import { Button } from "@/components/FormElements/Button";
import React from "react";

export function WhoWeAre() {
  return (
    <section className=" px-[28px] lg:px-[135px] md2:grid md2:grid-cols-2 gap-x-[100px] pt-[84px] xl:pt-[320px] pb-[422px]">
      {" "}
      <div>
        <img
          src="/images/who-we-are.svg"
          alt="sample"
          className="w-full h-full"
        ></img>
      </div>
      <div className="mt-[40px] md2:mt-0 grid place-items-center">
        <div>
          <h2 className="font-semibold text-[30px] md2:text-[24px] md2:text-[30] xl:text-[50px]">
            Who We Are
          </h2>
          <p className="text-[20px] md2:text-[16px] xl:text-[24px] mt-[15px] text-justify">
            The Divine Assistants Learning Academy is a non-profit organization
            that focuses specifically on the education of youths in Africa in
            the field of digital assistance. The mission of the organization is
            to develop free educational programmes that can be used to educate
            youths and help them acquire new skills.
          </p>
          <div className="hidden md2:block">
            <Button
              text="Learn More"
              paddingBlock="23px"
              paddingInline="39px"
              mt="53px"
              className="bg-mine text-white text-[20px] sm:text-[28px]"
            />
          </div>
          <div className="md2:hidden">
            {" "}
            <Button
              text="Learn More"
              paddingBlock="23px"
              paddingInline="39px"
              className="bg-mine text-white text-[20px] sm:text-[28px]"
              mt="53px"
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
