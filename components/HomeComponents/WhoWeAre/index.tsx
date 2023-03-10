import { Button } from "@/components/FormElements/Button";
import React from "react";

export function WhoWeAre() {
  return (
    <section className="px-[135px] grid grid-cols-2 gap-x-[100px] pt-[320px] pb-[422px]">
      {" "}
      <div>
        <img
          src="/images/who-we-are.svg"
          alt="sample"
          className="w-full h-full"
        ></img>
      </div>
      <div>
        <h2 className="font-semibold text-[50px]">Who We Are</h2>
        <p className="text-[20px] mt-[15px] text-justify">
          The Divine Assistants Learning Academy is a non-profit organization
          that focuses specifically on the education of youths in Africa in the
          field of digital assistance. The mission of the organization is to
          develop free educational programmes that can be used to educate youths
          and help them acquire new skills.
        </p>
        <Button
          text="Learn More"
          paddingBlock="23px"
          paddingInline="39px"
          backgroundColor="#004AAD"
          color="white"
          mt="53px"
        />
      </div>
    </section>
  );
}
