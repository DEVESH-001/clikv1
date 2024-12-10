import { div } from "framer-motion/client";
import Link from "next/link";
import React from "react";
import ShinyButton from "./ui/shiny-button";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-900">
          Your CRE Analyst on Cloud
        </h1>
        <p className="mt-8 text-base md:text-xl text-neutral-700 min-w-lg mx-auto">
          Extract actionable insights from financials, appraisals, offering
          memorandums, <br /> and more Automate tedious tasks and focus on
          growing your portfolio.
        </p>
        <div className="mt-8">
          <ShinyButton href="/signin" className="mr-4 bg-blue-400 text-white">
            Get Started For Free
          </ShinyButton>
          <ShinyButton href="/pricing" className="mr-4">
            See How It Work's
          </ShinyButton>
          {/* 2 buttton */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// {
//   /* <div className="min-h-screen mx-auto w-full flex items-center justify-center py-10 overflow-hidden">
//   Hero Section
// </div> */
// }
