import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import Problem from "@/components/Problem";
// import FocusCardsDemo from "@/components/Testimonials";
import WorkingSection from "@/components/WorkingSection";
import React from "react";

const page = () => {
  return (
    // <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    //   <HeroSection />
    // </div>
    <main className="antialiased">
      <HeroSection />
      <Problem />
      <WorkingSection/>
      {/* <FocusCardsDemo/> */}
      <Pricing/>
      <Footer/>
    </main>
  );
};

export default page;
