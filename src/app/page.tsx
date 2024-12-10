import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Problem from "@/components/Problem";
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
      <Footer/>
    </main>
  );
};

export default page;
