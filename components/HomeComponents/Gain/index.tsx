import React from "react";
import { GainItems } from "../GainItems";

export function Gain() {
  return (
    <section className="relative h-[1313px] xl:h-[850px] bg-red-300">
      <img
        src="/images/blue-background.svg"
        alt="background"
        className="absolute"
        style={{ height: "100%", objectFit: "cover" }}
      ></img>
      <div className="absolute left-0 top-0 w-full text-center px-[28px] lg:px-[91px] py-[96px]">
        <h2 className="font-semibold text-[24px] md:text-[40px] text-white">
          What you will gain from us
        </h2>
        <p className="text-[16px] md:text-[28px] text-white mt-[6px]">
          Here are some of the benefits of taking a course at DivineAssistants
          Learning Academy
        </p>
        <div className="mt-[50px] md:grid md:grid-cols-2 lg:grid-cols-3 gap-[50px] sm:px-[95px] md:px-0">
          <GainItems
            src="/images/life-time.svg"
            title="Life Time Access"
            content="Unlock a world of knowledge with lifetime access to our courses. Never worry about course expiration with our registration options."
          />
          <GainItems
            src="/images/life-time.svg"
            title="Life Time Access"
            content="Unlock a world of knowledge with lifetime access to our courses. Never worry about course expiration with our registration options."
          />
          <GainItems
            src="/images/life-time.svg"
            title="Life Time Access"
            content="Unlock a world of knowledge with lifetime access to our courses. Never worry about course expiration with our registration options."
          />
        </div>
      </div>
    </section>
  );
}
