// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// export function AnimatedTestimonialsDemo() {
//   const testimonials = [
//     {
//       quote:
//         "ClikAI enables us to process more deals, allowing us to focus more time on customers.",
//       name: "Eric Tupta",
//       designation:
//         "Director of Digital Transformation at Bellwether Real Estate Capital",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eric%20Tupta-0iNdqMyOBBkl8s05qWaOEXoPMIL4gJ.jpeg",
//     },
//     {
//       quote:
//         "Integrating into our underwriting process has allowed our deal team to make more sophisticated investment decisions, in a fraction of the time! The software does a tremendous job of quickly integrating the financials (T12, RR) into a simple, easy-to-read model and actually goes a step further by mapping it directly into our internal, robust model. Completing proformas and presenting returns to partners is now done all the more confidentially with the leverage of Clik's technology.",
//       name: "Jeremy Cisneros",
//       designation: "Director of Multifamily Acquisitions",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeremy%20Cisneros-TwEhvbQSfe9KpBY14GcXzaNIhA792b.png",
//     },
//     {
//       quote:
//         "I was so very impressed with the speed of transferring all the data accurately into the template from the financials of my apartment complex- 308 units. Wow‼️‼️ It would have taken my team at least 1-2 hours to get all that in; it's very time-consuming. Really excited 😆 to get Clik.ai to do it so fast so that we can spend time doing the calculations & analyzing the real guts of the underwriting process. A huge time $aver‼️‼️‼️🌈🌈🙏 Thank You!",
//       name: "Vinney Chopra",
//       designation: "Managing Principal, Moneil Investment Group LLC",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vinney%20chopra-slO0OLUcb2qKSP9vc5JRapy9Ahwu0a.png",
//     },
//     {
//       quote:
//         "ClikAi team have created a phenomenal tool in underwriting and pricing commercial real estate deals. The software makes the underwriting process seamless.",
//       name: "James Vestal",
//       designation: "CEO, Verdad Commercial Real Estate Companies",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/James%20Vestal-dp0Py269mz0jiKpO3zMoNOqaQOuQhg.png",
//     },
//     {
//       quote:
//         "This tool has helped automate and speed up the underwriting process for my files. The time spent on each file has been more than cut in half. Would recommend to anyone looking to scale.",
//       name: "Christian Groomes",
//       designation: "Senior Sales Manager at Lima One Capital",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Christian%20Groomes-7UR043HItyw5AEycP3ysElQS4QPVhA.jpeg",
//     },
//     {
//       quote:
//         "ClikAi and his team were very helpful in implementing their SmartExtract API into our business. The technology is great in the way it standardizes CRE financials into a uniform format, allocates line items and charges into predetermined categories, and maintains maximum flexibility for various uses. I would definitely recommend this tool to any CRE professional looking to make their underwriting process more efficient.",
//       name: "W. Cooper Ramsey",
//       designation:
//         "Vice President - Strategy & Production at TrueRate Services",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cooper%20Ramsey-Hzf9b5b2i0V9usJazdOCZnahvAm9TE.jpeg",
//     },
//     {
//       quote:
//         "Parag and the team made the integration process simple and easy for us to provide their great AI abstraction service (Rent Rolls, Operating Statements, T12s) to our customers, saving them hours of time!",
//       name: "Grant Weiss",
//       designation: "CEO at ROCKVAL™",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grant%20Weiss-apyTweC7ybEuqxYl07ODEoZXfc8L9C.jpeg",
//     },
//   ];

//   return (
//     <div>
//       <AnimatedTestimonials testimonials={testimonials} />
//     </div>
//   );
// }

// "use client";

// import React, { useEffect, useState } from "react";
// import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

// export function InfiniteMovingCardsDemo() {
//   return (
//     <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
//       <InfiniteMovingCards
//         items={testimonials}
//         direction="right"
//         speed="slow"
//       />
//     </div>
//   );
// }

// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];
"use client";
import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";
import Image from "next/image";

const testimonialList = [
  [
    {
      photo:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Akshay Kumar",
      rating: 3.5,
      content:
        '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
    },
    {
      photo:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "Arjun Kapur",
      rating: 4.5,
      content:
        '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
    },
  ],
  [
    {
      photo:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Raima Sen",
      rating: 5,
      content:
        '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
    },
    {
      photo:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Akshay Kumar",
      rating: 3.5,
      content:
        '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
    },
  ],
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
  <p className={classNames("flex flex-wrap gap-0.5", className)} {...rest}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = "";
        if (index <= Math.floor(rating))
          content = (
            <FontAwesomeIcon
              icon={faStar}
              className="text-[22px] text-yellow-500"
            />
          );
        else if (rating > i && rating < index + 1)
          content = (
            <FontAwesomeIcon
              icon={faStarHalfAlt}
              className="text-[22px] text-yellow-500"
            />
          );
        else if (index > rating)
          content = (
            <FontAwesomeIcon
              icon={faStar}
              className="text-[22px] text-yellow-200 dark:text-opacity-20"
            />
          );

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  showLabel: PropTypes.bool,
  className: PropTypes.string,
};

const TestimonialItem = ({ item }) => {
  const { rating, content, photo, name } = item;
  return (
    <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 h-full duration-300 p-6">
      <div className="mt-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="mr-2">
              <Image
                src={photo}
                alt={name}
                className="max-w-full h-auto rounded-full border"
                width="47"
                height={40}
              />
            </div>
            <div>
              <h5 className="text-xl break-all font-medium">{name}</h5>
            </div>
          </div>
          <Rating rating={rating} showLabel={false} />
        </div>
        <p className="leading-[1.8] opacity-80 mb-6">{content}</p>
      </div>
    </div>
  );
};
TestimonialItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Testimonial21 = () => {
  const [index, setIndex] = useState(0);

  const handleControl = (type) => {
    if (type === "prev") {
      setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
    } else if (type === "next") {
      setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
    }
  };
  return (
    <section className="ezy__testimonial21 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto relative">
        <div className="flex justify-center text-center mb-6 lg:mb-12">
          <div className="max-w-lg">
            <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg opacity-80">
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-12">
          {testimonialList[index].map((item, i) => (
            <div className="col-span-2 md:col-span-1" key={i}>
              <TestimonialItem item={item} />
            </div>
          ))}
        </div>

        <div className="relative flex justify-center items-center my-12">
          <button
            className="text-lg bg-white shadow-2xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full mr-4"
            onClick={() => handleControl("prev")}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            className="text-lg bg-white shadow-2xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full"
            onClick={() => handleControl("next")}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </section>
  );
};
