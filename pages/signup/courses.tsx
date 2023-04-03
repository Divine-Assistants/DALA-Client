import { AuthLayout, Button } from "@/components";
import Link from "next/link";
import React, { useState } from "react";

export default function ChooseCourse() {
  const [course, setCourse] = useState("");

  return (
    <AuthLayout>
      <div>
        <h1 className="font-semibold text-center sm:text-left text-[24px] sm:text-[40px]">
          Choose a course
        </h1>
        <p className="font-medium text-center sm:text-left text-[16px] sm:text-[20px]">
          What courses are you learning on DALA?
        </p>
        <div className="mt-[95px] flex items-center gap-x-[20px] flex-wrap gap-y-[10px]">
          <p
            className="px-[20px] py-[18px] bg-transparent text-mine hover:text-white hover:bg-mine font-medium text-[14px] sm:text-[20px] rounded-[15px] w-fit cursor-pointer"
            style={
              course === "Web Development"
                ? {
                    backgroundColor: "#004AAD",
                    border: "2px solid #004AAD",
                    color: "white",
                  }
                : { border: "2px solid #004AAD" }
            }
            onClick={() => setCourse("Web Development")}
          >
            Web Development
          </p>
          <p
            className="px-[20px] py-[18px] bg-transparent text-mine hover:text-white hover:bg-mine font-medium text-[14px] sm:text-[20px] rounded-[15px] w-fit cursor-pointer"
            style={
              course === "Digital Marketing"
                ? {
                    backgroundColor: "#004AAD",
                    border: "2px solid #004AAD",
                    color: "white",
                  }
                : { border: "2px solid #004AAD" }
            }
            onClick={() => setCourse("Digital Marketing")}
          >
            Digital Marketing
          </p>
          <p
            className="px-[20px] py-[18px] bg-transparent text-mine hover:text-white hover:bg-mine font-medium text-[14px] sm:text-[20px] rounded-[15px] w-fit cursor-pointer"
            style={
              course === "Web Design"
                ? {
                    backgroundColor: "#004AAD",
                    border: "2px solid #004AAD",
                    color: "white",
                  }
                : { border: "2px solid #004AAD" }
            }
            onClick={() => setCourse("Web Design")}
          >
            Web Design
          </p>
          <p
            className="px-[20px] py-[18px] bg-transparent text-mine hover:text-white hover:bg-mine font-medium text-[14px] sm:text-[20px] rounded-[15px] w-fit cursor-pointer"
            style={
              course === "Administrative Management"
                ? {
                    backgroundColor: "#004AAD",
                    border: "2px solid #004AAD",
                    color: "white",
                  }
                : { border: "2px solid #004AAD" }
            }
            onClick={() => setCourse("Administrative Management")}
          >
            Administrative Management
          </p>
          <p
            className="px-[20px] py-[18px] bg-transparent text-mine hover:text-white hover:bg-mine font-medium text-[14px] sm:text-[20px] rounded-[15px] w-fit cursor-pointer"
            style={
              course === "Project Management"
                ? {
                    backgroundColor: "#004AAD",
                    border: "2px solid #004AAD",
                    color: "white",
                  }
                : { border: "2px solid #004AAD" }
            }
            onClick={() => setCourse("Project Management")}
          >
            Project Management
          </p>
          <p
            className="px-[20px] py-[18px] bg-transparent text-mine hover:text-white hover:bg-mine font-medium text-[14px] sm:text-[20px] rounded-[15px] w-fit cursor-pointer"
            style={
              course === "Sales Training"
                ? {
                    backgroundColor: "#004AAD",
                    border: "2px solid #004AAD",
                    color: "white",
                  }
                : { border: "2px solid #004AAD" }
            }
            onClick={() => setCourse("Sales Training")}
          >
            Sales Training
          </p>
          <p
            className="px-[20px] py-[18px] bg-transparent text-mine hover:text-white hover:bg-mine font-medium text-[14px] sm:text-[20px] rounded-[15px] w-fit cursor-pointer"
            style={
              course === "Business Management"
                ? {
                    backgroundColor: "#004AAD",
                    border: "2px solid #004AAD",
                    color: "white",
                  }
                : { border: "2px solid #004AAD" }
            }
            onClick={() => setCourse("Business Management")}
          >
            Business Management
          </p>
        </div>

        <p className="font-medium text-[16px] sm:text-[20px] mt-[20px]">
          As much as DALA is a non profit organization, we still need to keep
          the lights on! Take your first course on us.
        </p>
        <div className="justify-between mt-[88px] hidden sm:flex">
          <Link href={"/signup/detail"}>
            <Button
              text="Back"
              size="24px"
              weight={500}
              className="px-[52px] py-[18px] bg-mine text-white"
            />
          </Link>
          <Link href={"/signup/success"}>
            <Button
              text="Next"
              size="24px"
              weight={500}
              className="px-[52px] py-[18px] bg-mine text-white"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-y-[20px] mt-[97px] sm:hidden">
          <Link href={"/signup/detail"}>
            <Button
              text="Back"
              size="24px"
              weight={500}
              className="px-[52px] py-[18px] bg-transparent text-mine hover:bg-mine hover:text-white"
              border="2px solid #004AAD"
              width="100%"
            />
          </Link>
          <Link href={"/signup/success"}>
            <Button
              text="Next"
              size="24px"
              weight={500}
              className="px-[52px] py-[18px] bg-transparent text-mine hover:bg-mine hover:text-white"
              border="2px solid #004AAD"
              width="100%"
            />
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
