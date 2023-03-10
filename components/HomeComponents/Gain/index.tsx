import React from "react";
import { GainItems } from "../GainItems";

export function Gain() {
  return (
    <section className="relative bg-blue-400 h-[850px]">
      <img
        src="/images/blue-background.svg"
        alt="background"
        className="absolute"
        style={{ height: "100%", objectFit: "cover" }}
      ></img>
      <div className="absolute left-0 top-0 w-full text-center px-[91px] py-[96px]">
        <h2 className="font-semibold text-[40px] text-white">
          What you will gain from us
        </h2>
        <p className="text-[28px] text-white mt-[6px]">
          Here are some of the benefits of taking a course at DivineAssistants
          Learning Academy
        </p>
        <div className="mt-[115px] grid grid-cols-3 gap-x-[95px]">
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
