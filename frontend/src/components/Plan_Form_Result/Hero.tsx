import { useEffect, useState } from "react";
import { IndianRupee, Plane, Users, Heart, Sparkles } from "lucide-react";


const heroImagesHigh = [
  "https://res.cloudinary.com/ddofg7mcl/image/upload/q_auto,f_auto,w_1600,dpr_auto/v1770198647/zoshua-colah-ZOYG7ZRUIVo-unsplash_etbyzf.jpg",
  "https://res.cloudinary.com/ddofg7mcl/image/upload/q_auto,f_auto,w_1600,dpr_auto/v1770198797/pexels-sbsoneji-3581364_uyves9.jpg",
];

type Props = {
  data: any;
};

export default function TripHero({ data }: Props) {
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  const headline = "AI Crafted Journeys, Designed Around You";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImagesHigh.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(headline.slice(0, i));
      i++;
      if (i > headline.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  const chips = [
    { icon: <IndianRupee size={14} />, label: data?.budget_range },
    { icon: <Plane size={14} />, label: data?.travel_class },
    { icon: <Users size={14} />, label: data?.travel_group },
    ...(data?.interests || []).map((i: string) => ({
      icon: <Heart size={14} />,
      label: i,
    })),
  ];

  const confidence = Math.max(0, Math.min(100, Number(data?.confidence ?? 87)));
  const [animatedOffset, setAnimatedOffset] = useState(301);

  useEffect(() => {
    const target = 301 - (301 * confidence) / 100;
    const t = setTimeout(() => setAnimatedOffset(target), 300);
    return () => clearTimeout(t);
  }, [confidence]);

  return (
    <section className="relative rounded-3xl overflow-hidden 
      bg-[rgba(255,255,255,0.05)]
      backdrop-blur-xl
      border border-white/10
      shadow-[0_20px_80px_rgba(0,0,0,0.6)]
      min-h-[560px]">

      {/* IMAGE BG */}
      <img
        src={heroImagesHigh[index]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 h-full flex items-center justify-between px-14 py-20 text-white">

        {/* LEFT */}
        <div className="w-[60%]">
          <p className="flex items-center gap-2 text-orange-400 mb-5 text-sm">
            <Sparkles size={15} /> AI Generated Plan
          </p>

          <h1 className="text-6xl font-medium leading-tight max-w-2xl">
            {typedText}
          </h1>

          <p className="text-gray-300 max-w-lg mt-6">
            Smart itinerary balancing comfort, budget and experiences —
            personalised around your travel style.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {chips.slice(0, 4).map(
              (chip, i) =>
                chip.label && (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-full 
                    bg-white/10 border border-white/10 backdrop-blur-md text-sm"
                  >
                    {chip.icon}
                    <span>{chip.label}</span>
                  </span>
                )
            )}
          </div>

          <button className="mt-10 rounded-full bg-orange-500 px-7 py-3 font-semibold hover:bg-orange-600 transition">
            View Plan Details
          </button>
        </div>

        {/* RIGHT GLASS CARD */}
        <div className="w-[40%] flex justify-end">
          <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-xl border border-white/10 
            rounded-3xl p-8 w-52 h-52 flex items-center justify-center shadow-xl">

            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg viewBox="0 0 112 112" className="absolute inset-0 w-full h-full">
                <circle cx="56" cy="56" r="48" stroke="rgba(255,255,255,0.15)" strokeWidth="8" fill="none" />
                <circle
                  cx="56"
                  cy="56"
                  r="48"
                  stroke="#f97316"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="301"
                  strokeDashoffset={animatedOffset}
                  strokeLinecap="round"
                />
              </svg>

              <div className="text-center">
                <div className="text-2xl font-bold">{confidence}%</div>
                <p className="text-xs text-gray-300">Confidence</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
