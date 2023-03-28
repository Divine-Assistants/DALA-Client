import { Button, Input, PageLayout } from "@/components";
import React from "react";

export default function Contact() {
  return (
    <PageLayout title="Contact Us">
      <section className="px-[28px] xl:px-[95px] py-[236px] xl:py-[76px]">
        <div className="relative overflow-hidden hidden rounded-[15px] w-full h-full md:grid place-items-center">
          <img
            src="/images/blue-background.svg"
            alt="background"
            className="w-full h-full object-cover hidden md:block"
          ></img>
          <div className="w-full h-full z-20 absolute top-0 left-0 grid place-items-center">
            <h1 className="font-semibold text-[50px] text-white">Contact Us</h1>
          </div>
        </div>
        <div className="md:hidden">
          <h1 className="font-semibold text-[32px] sm:text-[50px]">
            Contact Us
          </h1>

          <p className="text-[16px] sm:text-[24px] mt-[5px]">
            We at DivineAssistants Learning Academy would love to hear from you.
            Please use any of the contact medium below
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-x-[50px] gap-y-[40px] md:grid-cols-3 px-[28px] xl:px-[95px]">
        <div className="md:col-span-1 flex flex-col gap-y-[113px]">
          <div>
            <h2 className="font-semibold text-[24px] md:text-[30px]">
              Contact Info
            </h2>
            <p className="font-medium text-[16px] md:text-[24px] mt-[20px]">
              +234 90345876
            </p>
            <p
              className="font-medium text-[16px] md:text-[24px] mt-[15px]"
              style={{ wordBreak: "break-word" }}
            >
              divineassistants@gmail.com
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-[24px] md:text-[24px]">
              Follow Us
            </h2>
            <p className="font-medium text-[16px] md:text-[24px] mt-[20px]">
              Instagram
            </p>
            <p className="font-medium text-[16px] md:text-[24px] mt-[15px]">
              Facebook
            </p>
            <p className="font-medium text-[16px] md:text-[24px] mt-[15px]">
              LinkedIn
            </p>
            <p className="font-medium text-[16px] md:text-[24px] mt-[15px]">
              Twitter
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <form>
            <h2 className="font-semibold text-[24px] md:text-[30px]">
              Send Message
            </h2>
            <div className="mt-[13px] flex flex-col gap-y-[20px] lg:grid grid-cols-2 gap-x-[50px]">
              <div>
                <label className="font-semibold text-[20px] block md:text-[24px] mb-[10px]">
                  Name
                </label>
                <Input
                  type="text"
                  name="contact-name"
                  placeholder="Jane Doe"
                  rounded="15px"
                  paddingBlock="20px"
                  paddingInline="33px"
                  size="24px"
                  weight={600}
                  color="#004AAD"
                  width="100%"
                  className="focus:bg-[#004AAD0F] bg-transparent placeholder:text-mine focus:border-2 border-2 border-[#D9D9D9] focus:border-[#004AAD]"
                />
              </div>
              <div>
                <label className="font-semibold text-[20px] md:text-[24px] block mb-[10px]">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  rounded="15px"
                  paddingBlock="20px"
                  paddingInline="33px"
                  size="30px"
                  weight={600}
                  color="#004AAD"
                  width="100%"
                  className="focus:bg-[#004AAD0F] bg-transparent placeholder:text-mine focus:border-2 border-2 border-[#D9D9D9] focus:border-[#004AAD]"
                />
              </div>
            </div>
            <div className="mt-[70px]">
              <label className="font-semibold text-[20px] block md:text-[24px] mb-[10px]">
                Message
              </label>
              <textarea className="focus:bg-[#004AAD0F] bg-transparent focus:outline-none placeholder:text-mine focus:border-2 focus:border-[#004AAD] border-2 border-[#D9D9D9] focus:border-[#004AAD] w-full h-[443px] rounded-[15px]" />
            </div>
            <Button
              text="Send Message"
              className="text-[20px] md:text-[24px] bg-mine text-white w-full py-[20px]"
              mt="70px"
            />
          </form>
        </div>
      </section>
      <section className="my-[200px] md:px-[28px] xl:px-[95px]">
        <div className="relative overflow-hidden h-[441px] sm:h-[350px] md:h-[441px] md:rounded-[15px] w-full h-full md:grid place-items-center">
          <img
            src="/images/blue-background.svg"
            alt="background"
            className="w-full h-full object-cover"
          ></img>
          <div className="w-full h-full z-20 absolute top-0 left-0 px-[28px] xl:px-[200px] grid place-items-center">
            <h2 className="font-semibold text-[24px] md:text-[40px] text-white text-center">
              We at DivineAssistants Learning Academy look forward to hearing
              from you, feel free to contact us. It’s a pleasure!
            </h2>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
