import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const phrases = [
  "Entirely You.",
  "Built for Your Style.",
  "Powered by AI.",
];

const TripPlannerShowcase = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = phrases[index];

    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + current[charIndex]);
        setCharIndex((c) => c + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((i) => (i + 1) % phrases.length);
      }, 1600);
      return () => clearTimeout(pause);
    }
  }, [charIndex, index]);

  return (
    <section className="relative w-full bg-[#0f0f14] overflow-hidden">
      {/* bounded height — not full screen */}
      <div className="min-h-[72vh] flex items-center py-24">

        {/* background glow */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-orange-500/10 blur-[140px]" />
        <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="relative max-w-[1280px] mx-auto px-6 w-full">
          {/* give image more space */}
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-14 items-center">

            {/* IMAGE — LEFT */}
            <div className="flex justify-center md:justify-end md:pr-6">
              <img
                src="/uploads/trip-planner-laptop.png"
                alt="FLY Trip Planner"
                className="w-full max-w-[760px]
                  drop-shadow-[0_45px_80px_rgba(0,0,0,0.75)]"
              />
            </div>

            {/* TEXT — RIGHT */}
            <div className="text-white">
              <h2 className="text-[38px] md:text-[46px] leading-[1.15] font-semibold mb-6">
                Trip Planner — One click.
                <br />
                Infinite Destinations.
                <br />
                <span className="text-orange-400">{text}</span>
              </h2>

              <p className="text-gray-300 text-base leading-relaxed max-w-md">
                <span className="font-medium text-white">FLY</span> helps you
                create personalised travel plans that fit your interests,
                budget, and style. From dream vacations to spontaneous
                getaways, build and map your itinerary effortlessly.
              </p>

              <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition">
                Plan with FLY
                <Sparkles
                  size={16}
                  className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPlannerShowcase;
