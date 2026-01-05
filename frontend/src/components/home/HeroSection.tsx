import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";

const searchTexts = [
  "Holiday Packages",
  "Udaipur",
  "Goa",
  "Kerala",
  "Manali",
  "Jaipur",
  "Weekend trip ideas",
];

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % searchTexts.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-84px)] w-full bg-white">

      {/* VIDEO */}
      <video
        className="absolute top-0 left-0 w-full h-[88%] object-cover"
        src="/videos/hero-india-travel.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-[88%] bg-gradient-to-b from-black/45 via-black/30 to-black/45" />

      {/* HERO CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center justify-start pt-[18vh] px-6 text-center text-white">

        <h1 className="text-[52px] md:text-[60px] font-semibold tracking-[0.35em]">
          EXPERIENCES
        </h1>

        <p className="mt-3 text-xl md:text-2xl font-medium">
          made just for <span className="font-semibold">YOU</span>
        </p>

        {/* SEARCH BAR */}
        <div className="relative mt-10 flex w-full max-w-[600px] items-center rounded-full bg-white px-5 py-2.5 shadow-xl">

          <div className="pointer-events-none absolute left-5 flex items-center gap-2 text-[15px]">
            <span className="text-gray-400">Search</span>
            <span key={textIndex} className="text-black animate-bounce-fade">
              {searchTexts[textIndex]}
            </span>
          </div>

          <input
            type="text"
            className="relative z-10 w-full bg-transparent text-[15px] text-black outline-none"
          />

          <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-black text-white cursor-pointer hover:bg-gray-800">
            <Search size={17} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
