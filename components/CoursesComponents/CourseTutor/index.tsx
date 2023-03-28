import { Button } from "@/components/FormElements/Button";
import React from "react";

export function CourseTutor() {
  return (
    <section className="px-[28px] xl:px-[95px] py-[109px] bg-[#D2DDE8] mt-[200px]">
      <h3 className="font-semibold text-[36px]">Tutor</h3>
      <div className="lg:w-[70%] md:w-[80%] grid grid-cols-2 mt-[37px] gap-x-[45px]">
        <div className="rounded-[15px] overflow-hidden">
          <img
            src="/images/tutor-picture.svg"
            alt="tutor"
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div className="text-[#000000]">
          <p className="font-semibold text-[20px] sm:text-[36px] text-mine">
            Gratta Orji
          </p>
          <p className="font-semibold text-[13px] sm:text-[24px] mt-[5px]">
            Business Analyst & Specialist
          </p>
          <div className="flex gap-x-[30px] items-center mt-[15px]">
            <img src="/images/star-outline-black.svg" alt="star"></img>
            <p className="text-[14px] sm:text-[24px] font-medium">
              4 Star Rating{" "}
            </p>
          </div>
          <div className="flex gap-x-[30px] items-center mt-[15px]">
            <img src="/images/Comments-black.svg" alt="star"></img>
            <p className="text-[14px] sm:text-[24px] font-medium">
              11,467 Reviews
            </p>
          </div>
          <div className="flex gap-x-[30px] items-center mt-[15px]">
            <img src="/images/courses-black.svg" alt="star"></img>
            <p className="text-[14px] sm:text-[24px] font-medium">76 Courses</p>
          </div>
          <Button
            text="Learn More"
            className="bg-mine text-white text-[14px] sm:text-[24px] px-[29px] py-[17px]"
            mt="15px"
            weight={500}
          />
        </div>
      </div>
      <p className="font-medium text-[14px] sm:text-[20px] mt-[43px] text-[#000000] text-justify">
        Lorem ipsum dolor sit amet consectetur. Proin at odio gravida at ornare
        quis pulvinar. Tristique consectetur amet id risus nunc. Dictumst tempus
        tincidunt pulvinar tristique convallis elementum ante laoreet
        suspendisse. Mauris facilisis ridiculus enim volutpat et. Maecenas
        molestie ut purus rhoncus consectetur mi neque quisque sit. Consectetur
        augue massa non nunc vulputate est et. Dignissim viverra curabitur
        pulvinar dignissim. Suspendisse ipsum tristique iaculis mi pellentesque
        fringilla urna sollicitudin. Justo suscipit purus in lacus volutpat.
        Nibh aliquet aliquam eget magnis rhoncus at. Scelerisque ultricies quis
        tincidunt arcu viverra. Nunc gravida mattis aliquam tincidunt dui. Lorem
        ipsum dolor sit amet consectetur. Proin at odio gravida at ornare quis
        pulvinar. Tristique consectetur amet id risus nunc. Dictumst tempus
        tincidunt pulvinar tristique convallis elementum ante laoreet
        suspendisse. Mauris facilisis ridiculus enim volutpat et. Maecenas
        molestie ut purus rhoncus consectetur mi neque quisque sit. Consectetur
        augue massa non nunc vulputate est et. Dignissim viverra curabitur
        pulvinar dignissim. Suspendisse ipsum tristique iaculis mi pellentesque
        fringilla urna sollicitudin. Justo suscipit purus in lacus volutpat.
        Nibh aliquet aliquam eget magnis rhoncus at. Scelerisque ultricies quis
        tincidunt arcu viverra. Nunc gravida mattis aliquam tincidunt dui.{" "}
      </p>
    </section>
  );
}
