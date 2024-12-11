import Testimonials from "@/components/AnimatedTestimonials";
import FooterCta from "@/components/Cta_footer";
import FaqsSection from "@/components/FaqsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import Problem from "@/components/Problem";
// import FocusCardsDemo from "@/components/Testimonials";
import WorkingSection from "@/components/WorkingSection";
import WhyClikAi from "@/components/WhyClikAi";
import React from "react";

const page = () => {
  return (
    <main className="antialiased ">
      <HeroSection />
      <Problem />
      <WorkingSection />
      {/* <FocusCardsDemo/> */}
      <Testimonials/>
      <WhyClikAi/>

      <Pricing />
      <FaqsSection />
      <FooterCta />

      <Footer />
    </main>
  );
};

export default page;
