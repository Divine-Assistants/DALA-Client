import React from "react";
import { Button } from "../FormElements/Button";
import { NavBar } from "../NavBar";

interface LayoutProps {
  children: React.ReactNode;
}
export function PageLayout({ children }: LayoutProps) {
  return (
    <div className="h-[100vh]" style={{ overflow: "hidden" }}>
      <NavBar />
      <div className="h-[100vh]" style={{ overflowY: "auto" }}>
        {children}
        <footer className="relative h-[850px]">
          <img
            src="/images/blue-background.svg"
            alt="background"
            className="h-full"
            style={{ objectFit: "cover" }}
          ></img>
          <div className="absolute left-0 top-0 px-[54px] w-full">
            <div className="flex items-center mt-[80px] gap-x-[100px] px-[41px]">
              <div>
                <p className="font-semibold text-[30px] text-white">
                  Subscribe to our Newsletter
                </p>
                <p className="text-[20px] text-white">
                  Stay up to date with the latest news, blogs and announcements
                </p>
              </div>
              <div>
                <Button
                  text="Subscribe"
                  paddingBlock="17px"
                  paddingInline="35px"
                  color="#004AAD"
                  backgroundColor="white"
                  size="24px"
                />
              </div>
            </div>
            <div
              className="py-[68px] grid grid-cols-2 gap-x-[100px] w-full mt-[45px] px-[41px] items-center"
              style={{ borderBlock: "1px solid #FAFAFA" }}
            >
              <div>
                <div className="flex items-center gap-x-[24px]">
                  <img src="/images/Logo2.svg" alt="logo"></img>
                  <p className="font-semibold text-[32px] text-white">
                    DIVINEASSISTANT <br /> LEARNING ACADEMY
                  </p>
                </div>
                <p className="mt-[18px] text-[24px] text-white text-justify">
                  The Divine Assistants Learning Academy is a non-profit
                  organization that focuses specifically on the education of
                  youths in Africa in the field of digital assistance. The
                  mission of the organization is to develop free educational
                  programmes that can be used to educate youths and help them
                  acquire new skills.
                </p>
              </div>
              <div className="grid grid-cols-4 gap-x-[50px]">
                <div>
                  <ul className="flex flex-col gap-y-[15px]">
                    <li className="font-semibold text-[24px] text-white">
                      Company
                    </li>
                    <li className="text-[20px] text-white">Home</li>
                    <li className="text-[20px] text-white">About</li>
                    <li className="text-[20px] text-white">News/Blogs</li>
                    <li className="text-[20px] text-white">Courses</li>
                    <li className="text-[20px] text-white">Contact</li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col gap-y-[15px]">
                    <li className="font-semibold text-[24px] text-white">
                      Resources
                    </li>
                    <li className="text-[20px] text-white">Help Center</li>
                    <li className="text-[20px] text-white">Troubleshoot</li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col gap-y-[15px]">
                    <li className="font-semibold text-[24px] text-white">
                      Socials
                    </li>
                    <li className="text-[20px] text-white">Instagram</li>
                    <li className="text-[20px] text-white">LinkedIn</li>
                    <li className="text-[20px] text-white">Twitter</li>
                    <li className="text-[20px] text-white">Facebook</li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col gap-y-[15px]">
                    <li className="font-semibold text-[24px] text-white">
                      Legal
                    </li>
                    <li className="text-[20px] text-white">Privacy Policy</li>
                    <li className="text-[20px] text-white">Terms of Use</li>
                    <li className="text-[20px] text-white">Pricing Policy</li>
                    <li className="text-[20px] text-white">Cookie Policy</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-[11px] mt-[38px] justify-center">
              <span className="w-[30px] h-[30px] font-semibold grid place-items-center rounded-[50%] bg-white text-[#004AAD] inline">
                C
              </span>
              <p className="text-white text-[20px] inline">
                2023 DivineAssistants Learning Academy. All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
