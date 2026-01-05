import React from "react";
import { Search, Brain, Map } from "lucide-react";

const HowAvigoWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Share Your Travel Idea",
      description:
        "Enter your destination, travel dates, budget range and preferences. Avigo understands your intent instead of rigid filters.",
    },
    {
      icon: Brain,
      title: "AI Builds Your Travel Plan",
      description:
        "Avigo’s AI analyzes routes, stays, timing and experiences to generate a personalized itinerary tailored for Indian travellers.",
    },
    {
      icon: Map,
      title: "Explore & Plan Confidently",
      description:
        "Review a clear, day-wise itinerary with places to visit, travel flow and essential suggestions for a smooth journey.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 border-b border-orange-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[40px] md:text-[48px] font-extrabold mb-4 text-black">
          How Avigo works
        </h2>

        <p className="text-[15px] md:text-[16px] text-gray-600 mb-16 max-w-2xl mx-auto">
          Avigo is an AI-powered travel planner designed as an academic project to
          simplify trip planning — from idea to itinerary.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col items-center">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] font-semibold mb-3 text-black">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-6 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowAvigoWorks;
