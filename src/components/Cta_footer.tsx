import React from "react";

const FooterCta = () => {
  return (
    <section className="py-20 lg:py-[120px] bg-white">
      <div className="container mx-auto">
        <div className="relative z-10 overflow-hidden rounded bg-primary py-12 px-8 md:p-[70px]">
          <div className="flex flex-wrap items-center -mx-4">
            {/* Left section */}
            <div className="w-full px-4 lg:w-1/2">
              <span className="block mb-4 text-base font-medium text-white">
                Ready to Unlock Your Tenant Insights?
              </span>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                Get started today with your custom Rent Roll Analysis report.
              </h2>
            </div>

            {/* Right section */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex flex-wrap lg:justify-end">
                <a
                  href="#"
                  className="inline-flex py-3 my-1 mr-4 text-base font-medium transition bg-white rounded-md hover:bg-gray-100 text-primary px-7"
                >
                  Upload Rent Roll
                </a>
                <a
                  href="#"
                  className="inline-flex py-3 my-1 mr-4 text-base font-medium transition bg-white rounded-md hover:bg-gray-100 text-primary px-7"
                >
                  View Sample Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCta;
