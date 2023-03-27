import React, { useState } from "react";

export function StudentsReview() {
  const [reaction, setReaction] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-10 gap-x-[21px]">
      <div className="col-span-2 lg:col-span-1">
        <img
          src="/images/tutor-avatar.svg"
          alt="avatar"
          className="w-full"
        ></img>
      </div>
      <div className="col-span-8 lg:col-span-9">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-[20px] sm:text-[32px] text-mine">
              Jaymeline Nduka
            </p>
            <p className="font-semibold text-[16px] sm:text-[20px] mt-[5px]">
              2 Weeks Ago
            </p>
          </div>
          <div
            className="cursor-pointer relative"
            onClick={() => setReaction((val) => !val)}
          >
            <img src="/images/More-black.svg"></img>
            {reaction && (
              <ul
                className="py-[18px] px-[7px] bg-white flex flex-col text-[20px] font-medium absolute rounded-[8px] right-0"
                style={{ boxShadow: "px 4px 5px -1px rgba(0, 0, 0, 0.08)" }}
              >
                <li className="py-[8px] rounded-[5px] hover:text-white hover:bg-mine px-[41px]">
                  Reply
                </li>
                <li className="py-[8px] rounded-[5px] hover:text-white hover:bg-mine px-[41px]">
                  Like
                </li>
                <li className="py-[8px] rounded-[5px] hover:text-white hover:bg-mine px-[41px]">
                  Dislike
                </li>
                <li className="py-[8px] rounded-[5px] hover:text-white hover:bg-mine px-[41px]">
                  Report
                </li>
              </ul>
            )}
          </div>
        </div>
        <p className="font-medium text-[14px] sm:text-[20px] mt-[13px] text-justify">
          Lorem ipsum dolor sit amet consectetur. Proin at odio gravida at
          ornare quis pulvinar. Tristique consectetur amet id risus nunc.
          Dictumst tempus tincidunt pulvinar tristique convallis elementum ante
          laoreet suspendisse. Mauris facilisis ridiculus enim volutpat et.
          Maecenas molestie ut purus rhoncus consectetur mi neque quisque sit.
          Consectetur augue massa non nunc vulputate est et. Dignissim viverra
          curabitur pulvinar dignissim.{" "}
        </p>
      </div>
    </div>
  );
}
