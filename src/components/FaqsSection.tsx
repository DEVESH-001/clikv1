"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    "What's the difference between Clik Analyst deals and self-created deals?",
    "How does the Basic plan pricing work?",
    "Can you break down the Growth plan pricing?",
    "Is there a limit to how many self-created deals I can make in the Growth plan?",
    "What does the Free plan offer?",
  ];

  const answers = [
    "Clik Analyst deals are underwriting models completed by our expert analysts on your behalf. Self-created deals are underwriting models that you create and manage yourself using our platform's tools and integrations. The Basic plan only supports Clik Analyst deals, while the Growth plan includes both types, with unlimited self-created deals.",
    "Clik Analyst deals are underwriting models completed by our expert analysts on your behalf. Self-created deals are underwriting models that you create and manage yourself using our platform's tools and integrations. The Basic plan only supports Clik Analyst deals, while the Growth plan includes both types, with unlimited self-created deals.",
    "The Growth plan has a $699/month platform fee (or $8,388 billed yearly). This includes:\n• Unlimited self-created deals\n• 20 complementary Clik Analyst deals per month\n• All integrations and features\nIf you need more than 20 Clik Analyst deals in a month, each additional deal costs $30. For example, if you use 25 Clik Analyst deals in a month, your total cost would be $699 (platform fee) + $150 (5 x $30 for additional deals) = $849 for that month. There's no extra charge for self-created deals, regardless of how many you create.",
    "No, there's no limit to the number of self-created deals you can make in the Growth plan. You can create and manage as many underwriting models as you need using our platform's tools and integrations, all included in the monthly or yearly platform fee.",
    "The Free plan provides access to our OS/Parser functionality at no cost. It's designed for users who need basic parsing capabilities or want to explore our platform before committing to a paid plan. While it doesn't include the advanced features of our Basic or Growth plans, it's a great starting point for those new to our services.",
  ];

  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Discover the Powerful Features That Make Clik.Ai the Ultimate
              Solution for Scaling Your Business
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            {questions.map((question, index) => (
              <div
                key={index}
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="flex text-lg font-semibold text-black">
                    {question}
                  </span>
                  {openIndex === index ? (
                    <FaChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <FaChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>{answers[index]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-base mt-9">
            Still have questions? Email us at {" "}
            <a
              href="#"
              title=""
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              support@clik.ai
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default FaqsSection;
