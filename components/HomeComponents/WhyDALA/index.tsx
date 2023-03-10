import React from "react";

export function WhyDala() {
  return (
    <section className="grid grid-cols-2 px-[95px]">
      <div className="bg-red-500 h-full rounded-[15px] overflow-hidden">
        <img
          src="/images/why-dala-img.svg"
          alt="sample"
          className="h-full"
          style={{ objectFit: "cover" }}
        ></img>
      </div>
      <div className="pl-[100px] py-[50px]">
        <h3 className="font-semibold text-[50px]">Why D.A.L.A.?</h3>
        <p className="text-[28px] mt-[23px]">
          Let's face it: you've probably already heard this a million times
          before: there are million-in-one programs in the world today that
          educate people and give them free education; nevertheless, there is
          one thing that makes Divine Assistants Learning Academy stand out from
          the crowd. People who attend our Academy will not only receive an
          education but will also be guaranteed a job offer once they have
          completed their studies. This indicates that once they have finished
          all of their learning programs, they will be eligible to work with
          Divine Assistants in the organization.
        </p>
      </div>
    </section>
  );
}
