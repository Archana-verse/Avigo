import React, { useEffect, useState } from "react";

const images = [
  "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769619648/Goa_Hero_2_zv16g0.png",
  "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769610625/Goa_Hero_1_lc3uaq.png",
  "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769619648/Goa_Hero_3_icwf86.png",
];

const GoaHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 2500); // switch every 2.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[420px] rounded-[28px] overflow-hidden mt-6">

      {/* IMAGES */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`
              w-full h-full object-cover absolute inset-0 
              transition-opacity duration-[1200ms] ease-out
              ${i === index ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      {/* DARK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* TEXT CONTENT */}
      <div className="absolute bottom-8 left-8 text-white z-10 max-w-[480px]">
        <h1 className="text-[42px] font-semibold leading-tight">
          Plan Your Goa Trip
        </h1>
        <p className="text-[18px] opacity-90 mb-4">
          India’s Beach Capital
        </p>

        <button className="px-6 py-3 rounded-full bg-white/95 text-black font-medium shadow hover:bg-white transition flex items-center gap-2">
          Book Now <span>→</span>
        </button>
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-4 right-6 flex gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GoaHero;
