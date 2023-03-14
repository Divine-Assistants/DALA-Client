import {
  BlogCover,
  FeaturedBlogSection,
  InspirationImage,
  PageLayout,
  PopularNewsSection,
} from "@/components";
import { LatestNewsSection } from "@/components/BlogComponents/LatestNewsSection";
import { SpecialNewsSection } from "@/components/BlogComponents/SpecialNewsSection";
import React from "react";

export default function News() {
  return (
    <PageLayout>
      <BlogCover />
      <LatestNewsSection />
      <PopularNewsSection />
      <SpecialNewsSection />
      <FeaturedBlogSection />
      <InspirationImage />
    </PageLayout>
  );
}
