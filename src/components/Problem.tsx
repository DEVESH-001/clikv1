import { BrainIcon, ShieldCheckIcon } from "lucide-react";
import React from "react";
import { BsLightning } from "react-icons/bs";

const Problem = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg font-bold leading-tight text-[#FF435C] sm:text-2xl lg:text-3xl">
            PROBLEM
          </p>
          <p className="mt-3 text-2xl leading-relaxed text-gray-600 md:mt-8">
            Manually entering your data is a hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-2xl md:text-3xl whitespace-nowrap">
              <BrainIcon className="w-10 h-10 mx-auto text-[#FF435C]" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
                Data Overload
              </span>
            </h3>
            <p className="text-base mt-0.5 text-gray-500">
              Businesses struggle to make sense of vast amounts of complex data,
              missing out on valuable insights that could drive growth and
              innovation.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-2xl md:text-3xl whitespace-nowrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
                <BsLightning className="w-10 h-10 mx-auto text-[#FF435C]" />
                Slow Decision-Making
              </span>
            </h3>

            <p className="text-base mt-0.5 text-gray-500">
              Traditional data processing methods are too slow, causing
              businesses to lag behind market changes and miss crucial
              opportunities.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-2xl md:text-3xl whitespace-nowrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
                <ShieldCheckIcon className="w-10 h-10 mx-auto text-[#FF435C]" />
                Data Security Concerns
              </span>
            </h3>

            <p className="text-base mt-0.5 text-gray-500">
              With increasing cyber threats, businesses worry about the safety
              of their sensitive information when adopting new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
