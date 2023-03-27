import { Button } from "@/components/FormElements/Button";
import React from "react";

export function DalaTutor() {
  return (
    <section className="py-[200px] xl:py-[422px] px-[28px] xl:px-[95px] text-center">
      <div>
        <h3 className="font-semibold text-[24px] md:text-[36px] text-mine">
          Becoming a DALA tutor in <span className="block">5 easy steps</span>
        </h3>
        <p className="font-semibold text-[13px] md:text-[20px] mt-[26px]">
          Click on the button below <br /> Fill a form and an email will be sent
          shortly after
          <br /> A meeting schedule between you and HR will be sent for
          evaluation <br /> Upon successful evaluation, a Tutor Identification
          Code (TIC) will be sent to your email <br /> Log In as a tutor{" "}
          <span>AND VOILA!!!</span>
        </p>
        <div className="flex justify-center mt-[26px]">
          <Button
            text="Become a DALA tutor"
            paddingInline="19px"
            paddingBlock="18px"
            weight={600}
            size="20px"
            className="bg-mine text-white"
          />
        </div>
      </div>
      <div
        className="mt-[40px] md:mt-0 flex gap-x-[27px] md:relative top-[-30px]"
        style={{ flexWrap: "nowrap" }}
      >
        <div>
          <img
            src="/images/tutor1.svg"
            alt="sample"
            className="rounded-[15px]"
          ></img>
        </div>
        <div>
          <img
            src="/images/tutor2.svg"
            alt="sample"
            className="rounded-[15px] md:mt-[100px]"
          ></img>
        </div>
        <div>
          <img
            src="/images/tutor3.svg"
            alt="sample"
            className="rounded-[15px] h-full md:mt-[50px]"
            style={{ objectFit: "cover" }}
          ></img>
        </div>
        <div>
          <img
            src="/images/tutor4.svg"
            alt="sample"
            className="rounded-[15px] md:mt-[100px]"
          ></img>
        </div>
        <div>
          <img
            src="/images/tutor5.svg"
            alt="sample"
            className="rounded-[15px]"
          ></img>
        </div>
      </div>
    </section>
  );
}
