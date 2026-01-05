import React from "react";
import {
  Youtube,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <>
      {/* MAIN DARK FOOTER */}
      <footer className="bg-[#0b0b0e] text-gray-400">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-24">

          <div className="grid grid-cols-1 md:grid-cols-5 gap-20">

            {/* BRAND */}
            <div className="md:col-span-2 flex flex-col items-start">
              <img
                src="/uploads/dark_mode_logo.png"
                alt="Avigo"
                className="h-[110px] w-auto mb-10 object-contain"
              />

              <p className="text-sm leading-relaxed text-gray-500 max-w-[420px] text-left">
                Avigo is an AI-powered travel planning academic project exploring
                how intelligent systems can simplify trip planning for Indian
                travellers through clarity, structure and smart recommendations.
              </p>
            </div>

            {/* EXPLORE */}
            <div>
              <h4 className="text-white text-sm font-semibold tracking-wider mb-8">
                EXPLORE
              </h4>
              <ul className="space-y-4 text-sm">
                {["Cities", "Experiences", "Holiday Packages", "Trip Planner"].map(
                  (item) => (
                    <li
                      key={item}
                      className="hover:text-white transition cursor-pointer"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* PROJECT */}
            <div>
              <h4 className="text-white text-sm font-semibold tracking-wider mb-8">
                PROJECT
              </h4>
              <ul className="space-y-4 text-sm">
                {[
                  "How Avigo Works",
                  "AI Concepts",
                  "Design Philosophy",
                  "Student Feedback",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-white transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* INFORMATION */}
            <div>
              <h4 className="text-white text-sm font-semibold tracking-wider mb-8">
                INFORMATION
              </h4>
              <ul className="space-y-4 text-sm">
                {["About Project", "Privacy", "Terms", "Contact"].map((item) => (
                  <li
                    key={item}
                    className="hover:text-white transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </footer>

      {/* WHITE BOTTOM STRIP (ALWAYS VISIBLE) */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-xs text-gray-600">
            © 2026 Avigo · Academic Project · All rights reserved
          </p>

          <div className="flex items-center gap-4">
            {[Youtube, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <span
                key={i}
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center
                           hover:bg-gray-200 transition cursor-pointer text-gray-700"
              >
                <Icon size={16} />
              </span>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
