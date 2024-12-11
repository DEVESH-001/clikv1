import FooterCta from "@/components/Cta_footer";
import FaqsSection from "@/components/FaqsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import Problem from "@/components/Problem";
import WorkingSection from "@/components/WorkingSection";

import React from "react";

const page = () => {
  return (
    <main className="antialiased ">
      <HeroSection />
      <Problem />
      <WorkingSection />

      <Pricing />
      <FaqsSection />
      <FooterCta />
      <Footer />
    </main>
  );
};

export default page;
