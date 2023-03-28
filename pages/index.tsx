import Head from "next/head";
import {
  Button,
  DalaTutor,
  FacultyDonations,
  FrequentQuestions,
  FrontSection,
  Gain,
  LatestNews,
  NavBar,
  PageLayout,
  Partnership,
  PartnershipCall,
  Recommendations,
  StartLearning,
  Testimonials,
  WhoWeAre,
} from "@/components";
import { WhyDala } from "@/components/HomeComponents/WhyDALA";

export default function Home() {
  return (
    <PageLayout title="DALA Home">
      <FrontSection />
      <div className="h-[151px] relative bg-white">
        <div
          className=" absolute top-[-30%] left-[50%] h-fit grid grid-cols-3 bottom-0 py-[28px] px-[72px]  rounded-[15px] w-[90%] z-50 mx-auto"
          style={{
            boxShadow: "15px 15px 15px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#FAFAFA",
            transform: "TranslateX(-50%)",
          }}
        >
          <div>
            <p className="font-semibold text-[20px] md2:text-[55px] text-center">
              20k+{" "}
              <span className="text-[14px] md2:text-[32px] block sm:inline">
                students
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-[20px] md2:text-[55px] text-center">
              70+{" "}
              <span className="text-[14px] md2:text-[32px] block sm:inline">
                tutors
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-[20px] md2:text-[55px] text-center">
              150+{" "}
              <span className="text-[14px] md2:text-[32px] block sm:inline">
                courses
              </span>
            </p>
          </div>
        </div>
      </div>
      <WhoWeAre />
      <Gain />
      <Recommendations />
      <WhyDala />
      <Testimonials />
      <Partnership />
      <PartnershipCall />
      <FacultyDonations />
      <LatestNews />
      <FrequentQuestions />
      <StartLearning />
      <DalaTutor />
    </PageLayout>
  );
}
