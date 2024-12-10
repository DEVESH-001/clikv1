import Image from "next/image";
import React from "react";

const logos = [
  { src: "/images/ms.jpg", alt: "Microsoft" },
  { src: "/images/amazon.png", alt: "Amazon" },
  { src: "/images/spotify.png", alt: "Spotify" },
  { src: "/images/ms.jpg", alt: "Microsoft" },
  { src: "/images/amazon.png", alt: "Amazon" },
  { src: "/images/spotify.png", alt: "Spotify" },
  { src: "/images/ms.jpg", alt: "Microsoft" },
  { src: "/images/amazon.png", alt: "Amazon" },
  { src: "/images/spotify.png", alt: "Spotify" },
];

const LogoScroller = () => {
  return (
    <div className="relative overflow-hidden w-full h-[100px] flex items-center">
      {/* Scrolling container */}
      <div className="flex animate-scrollLeft whitespace-nowrap gap-16">
        {/* Original and duplicated logos */}
        {logos.concat(logos).map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-[60px] w-auto object-contain mx-4"
            width={200}
            height={60}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoScroller;
