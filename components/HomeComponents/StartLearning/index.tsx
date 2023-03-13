import { Button } from "@/components/FormElements/Button";
import React from "react";

export function StartLearning() {
  return (
    <section className="md2:px-[47px]">
      <div className="relative  h-[500px] w-full md2:rounded-[15px] overflow-hidden">
        <img
          src="/images/blue-background.svg"
          alt="background"
          className="absolute h-full w-full"
          style={{ objectFit: "cover" }}
        ></img>
        <div className="absolute top-0 left-0 text-center w-full h-full grid place-items-center px-[34px]">
          <div>
            <h3 className="font-semibold text-[24px] md:text-[50px] text-white">
              Are you ready to start learning?
            </h3>
            <p className="md:text-[28px] text-[16px] text-white mt-[17px]">
              <span className="block">Like what you see?</span>It’s never too
              late to learn a new skill.
            </p>
            <div className="mt-[60px] hidden md:flex items-center justify-center gap-x-[28px] learning-button">
              <Button
                text="Get Started"
                paddingBlock="18px"
                paddingInline="42px"
                border="3px solid #FAFAFA"
                color="#004AAD"
                backgroundColor="white"
              />
              <Button
                text="Log In"
                paddingBlock="18px"
                paddingInline="42px"
                border="3px solid #FAFAFA"
                color="white"
                backgroundColor="#004AAD"
              />
            </div>
            <div className="mt-[60px] md:hidden block items-center justify-center gap-x-[28px] learning-button">
              <Button
                text="Get Started"
                paddingBlock="18px"
                paddingInline="42px"
                border="3px solid #FAFAFA"
                color="#004AAD"
                backgroundColor="white"
                width="100%"
              />
              <Button
                text="Log In"
                paddingBlock="18px"
                paddingInline="42px"
                border="3px solid #FAFAFA"
                color="white"
                backgroundColor="#004AAD"
                width="100%"
                mt="20px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}