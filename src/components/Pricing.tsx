"use client";

import React, { FC, ReactNode, useState } from "react";

type PricingCardProps = {
  type: string;
  price: string;
  subscription: string;
  description: string;
  buttonText: string;
  children: ReactNode;
  active?: boolean;
};

type ListProps = {
  children: ReactNode;
};

const Pricing: FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  const togglePricing = () => {
    setIsYearly((prev) => !prev);
  };

  return (
    <section className="relative z-10 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-5xl">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose the plan that best fits your needs with our clear,
            no-surprises pricing structure.
          </p>
          <div className="mt-6">
            <button
              onClick={togglePricing}
              className="px-6 py-2 border rounded-md text-primary border-primary bg-white dark:bg-dark dark:text-white focus:outline-none hover:bg-primary hover:text-white"
            >
              {isYearly ? "Switch to Monthly" : "Switch to Yearly"}
            </button>
          </div>
        </header>

        <div className="flex flex-wrap justify-center gap-6">
          <PricingCard
            type="Free"
            price={isYearly ? "$39" : "$0"}
            subscription={isYearly ? "year" : "month"}
            description="Access to basic features"
            buttonText="Choose Free"
          >
            <List>Users who need basic parsing functionality</List>
          </PricingCard>

          <PricingCard
            type="Basic"
            price={isYearly ? "$79" : "$99"}
            subscription={isYearly ? "year" : "month"}
            description="Great for small volume underwriting (5-20 deals per month)"
            buttonText="Choose Basic"
            active
          >
            <List>$30 per Clik Analyst underwriting (Billed monthly)</List>
            <List>Get your Financial model completed by Clik Analyst</List>
            <List>All Asset Classes Included</List>
            <List>Best Suited for:</List>
            <List>Individual real estate investors</List>
            <List>Those new to automated underwriting</List>
          </PricingCard>

          <PricingCard
            type="Growth"
            price={isYearly ? "$149" : "$699"}
            subscription={isYearly ? "year" : "month"}
            description="For high-volume underwriting needs"
            buttonText="Choose Growth"
          >
            <List>Unlimited self-created deals</List>
            <List>20 complementary Clik Analyst deals per month</List>
            <List>
              $30 per additional Clik Analyst underwriting (Billed monthly)
            </List>
            <List>Custom Model integration with unlimited updates</List>
            <List>
              Excel Add-in to sync updates of Rent Roll and T-12 Statements
            </List>
            <List>All Asset Classes Included</List>
            <List>Comprehensive platform training</List>
            <List>Best suited for:</List>
            <List>High-volume underwriting needs</List>
            <List>Companies requiring extensive underwriting capabilities</List>
            <List>Advanced security</List>
            <List>Personalized training sessions</List>
            <List>Custom SLA</List>
            <List>24/7 priority support</List>
          </PricingCard>
        </div>
      </div>
    </section>
  );
};

const PricingCard: FC<PricingCardProps> = ({
  type,
  price,
  subscription,
  description,
  buttonText,
  children,
  active,
}) => {
  return (
    <div
      className={`w-full max-w-sm p-6 rounded-lg shadow-md transition-all transform hover:scale-105 bg-white dark:bg-dark-2 border border-gray-200 dark:border-dark-3`}
    >
      <h3 className="mb-2 text-xl font-semibold text-primary">{type}</h3>
      <p className="mb-4 text-4xl font-bold text-dark dark:text-white">
        {price}
        <span className="ml-1 text-lg font-medium text-gray-600 dark:text-gray-400">
          /{subscription}
        </span>
      </p>
      <p className="mb-6 text-gray-600 dark:text-gray-400">{description}</p>
      <div className="mb-8 space-y-2">{children}</div>
      <a
        href="#"
        className={`block w-full text-center py-3 px-4 rounded-md transition-all font-medium text-lg ${
          active
            ? "bg-primary text-white hover:bg-opacity-90"
            : "border border-primary text-primary hover:bg-primary hover:text-white"
        }`}
      >
        {buttonText}
      </a>
    </div>
  );
};

const List: FC<ListProps> = ({ children }) => {
  return (
    <div className="flex items-start gap-2">
      <span className="w-2 h-2 mt-1 bg-primary rounded-full"></span>
      <p className="text-gray-600 dark:text-gray-400">{children}</p>
    </div>
  );
};

export default Pricing;
