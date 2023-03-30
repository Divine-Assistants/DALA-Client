import React from "react";
import {
  About,
  Aims,
  Events,
  Learn,
  PageLayout,
  Solution,
  System,
  Tutor,
  Vision,
} from "@/components";

export default function about() {
  return (
    <PageLayout title="About DALA">
      <About />
      <Aims />
      <Vision />
      <Solution />
      <Events />
      <System />
      <Learn />
      <Tutor />
    </PageLayout>
  );
}
