"use client";
import React from "react";
import ShinyButton from "./ui/shiny-button";
import HeroVideoDialog from "./ui/hero-video-dialog";
import LogoScroller from "./LogoScroller";

const HeroSection = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start px-4 py-16 md:py-24">
      <div className="w-full max-w-6xl text-center pt-16 md:pt-20">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-900">
          Your CRE Analyst on Cloud
        </h1>
        <p className="mt-8 text-base md:text-xl text-neutral-700 max-w-3xl mx-auto">
          Extract actionable insights from financials, appraisals, offering
          memorandums, and more. Automate tedious tasks and focus on growing
          your portfolio.
        </p>

        {/* CTF Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <ShinyButton
            onClick={() => (window.location.href = "/signin")}
            className="min-w-[200px] px-8 py-3 text-lg font-semibold bg-gray-300 hover:bg-gray-500  transition-all duration-300 hover:scale-105"
          >
            Get Started For Free
          </ShinyButton>
          <ShinyButton
            onClick={() => (window.location.href = "/pricing")}
            className="min-w-[200px] px-8 py-3 text-lg font-semibold bg-white hover:bg-neutral-50 border border-neutral-200 transition-all duration-300 hover:scale-105"
          >
            See How It Works
          </ShinyButton>
        </div>

        {/* Hero Video */}
        <div className="mt-20 max-w-3xl mx-auto">
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/NMFZQq4F4yY" // Use embed URL
            thumbnailSrc="/thumbnail.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/NMFZQq4F4yY" // Use embed URL
            thumbnailSrc="/thumbnail.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>
      {/* Companies animated logo */}
      <div className="mt-32">
        <h4 className="flex items-center justify-center text-base">
          Trusted By Leading Companies
        </h4>
        <div className="mt-9">
          <LogoScroller />
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
