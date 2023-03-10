import React from "react";
import { Donors } from "./Donors";

export function FacultyDonations() {
  return (
    <section className="px-[95px] py-[422px]">
      <h3 className="font-semibold text-[50px]">
        Some of Our Faculty Donations
      </h3>
      <p className="text-[28px] mt-[10px] w-[75%]">
        Here are some of our generous contributors from our faculty members
        making a positive impact
      </p>
      <div className="mt-[59px] grid grid-cols-2 gap-x-[100px]">
        <Donors
          coverImg="/images/donor1.svg"
          name="Yasmin Abu-laban"
          portfolio="Yasmin Abu-laban is a 10x Grant Cardone
          licensee who specializes in sales and
          business growth and has over 12+ years of
          experience in the sales field. She has
          agreed to donate her sales program to our
          academy."
        />
        <Donors
          coverImg="/images/donor2.svg"
          name="Godwin Nwabuko"
          portfolio="Godwin Nwabuko has over 15 years of experience in senior
          marketing, field marketing, product marketing, e-commerce
          advertising and growth marketing. He has worked with
          companies like MTN and Google. He is also an entrepreneur who
          ran over 7 companies simultaneously. The Partnership with
          Godwin is still pending. However, we can confident that he will be
          donating his marketing course to the academy."
        />
      </div>
    </section>
  );
}
