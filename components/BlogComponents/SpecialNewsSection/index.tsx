import React from "react";

export function SpecialNewsSection() {
  return (
    <section className="px-[28px] xl:px-[95px] py-[236px] xl:py-[412px]">
      <div className="relative overflow-hidden hidden rounded-[15px] h-[658px] md:grid place-items-center">
        <img
          src="/images/blue-background.svg"
          alt="background"
          className="w-full h-full object-cover hidden md:block"
        ></img>
        <div className="w-full h-full z-20 absolute top-0 left-0 grid place-items-center xl:px-[100px] xl:py-[60px]">
          <p className="font-medium text-[24px] text-white text-center leading-9">
            We understand the importance of incorporating modern technology into
            our learning process so we use interactive teaching tools like
            virtual classrooms and other multimedia resources to engage learners
            in interactive sessions with their tutors or peers. Moreover, our
            platform ensures maximum customization for each student’s needs
            since it can be tailored to different levels of education according
            to individual abilities and requirements.{" "}
            <span className="block mt-[30px]">
              At DALA, we offer administrative and business management programs
              that help both beginners and experienced professionals acquire the
              right mindset for success in this field. Our courses have been
              designed in such a way that they are comprehensive yet engaging
              enough to keep learners motivated throughout their journey towards
              gaining new knowledge and skill sets so they can develop their
              skill set further and make an impact on their chosen profession.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
