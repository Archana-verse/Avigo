import { useState } from "react";
import { MapPin, Calendar, Users, IndianRupee, X } from "lucide-react";

const travelClasses = ["Economy", "Business", "First Class"];
const companions = ["Solo", "Couple", "Family", "Friends"];
const interests = [
  "Beaches",
  "City Sightseeing",
  "Mountains",
  "Food",
  "Nightlife",
  "Shopping",
  "Spa & Wellness",
  "Adventure",
  "Culture & Heritage",
  "Wildlife",
];

export default function PlanFormModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [selectedClass, setSelectedClass] = useState("Economy");
  const [selectedCompanion, setSelectedCompanion] = useState("Solo");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [diet, setDiet] = useState("Vegetarian");

  const toggleInterest = (item: string) => {
    setSelectedInterests((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 relative">
        
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white"
        >
          <X size={18} />
        </button>

        {/* LEFT IMAGE – ALIKE STYLE */}
        <div className="relative hidden md:block">
          <img
            src="/travel-cover.jpg"
            alt="Travel"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-8">
            <h2 className="text-white text-3xl font-bold leading-snug">
              Need help planning your trip?
              <br />
              <span className="text-orange-300">
                Raahi’s got you ✨
              </span>
            </h2>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 space-y-6 max-h-[90vh] overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-800">
            Plan Your Perfect Journey
          </h1>
          <p className="text-sm text-gray-500">
            Tell us about your trip and let Raahi create magic 🧳
          </p>

          {/* FROM / TO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="input-box">
              <MapPin size={18} />
              <input placeholder="From (e.g. Delhi)" />
            </div>
            <div className="input-box">
              <MapPin size={18} />
              <input placeholder="To (e.g. Kolkata)" />
            </div>
          </div>

          {/* DATES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="input-box">
              <Calendar size={18} />
              <input type="date" />
            </div>
            <div className="input-box">
              <Calendar size={18} />
              <input type="date" />
            </div>
          </div>

          {/* CLASS */}
          <div>
            <label className="label">Choose your travel class</label>
            <div className="flex gap-2 mt-2 flex-wrap">
              {travelClasses.map((cls) => (
                <button
                  key={cls}
                  onClick={() => setSelectedClass(cls)}
                  className={`chip ${
                    selectedClass === cls
                      ? "chip-active"
                      : "chip-inactive"
                  }`}
                >
                  {cls}
                </button>
              ))}
            </div>
          </div>

          {/* BUDGET */}
          <div className="input-box">
            <IndianRupee size={18} />
            <input placeholder="Estimated Budget (₹)" />
          </div>

          {/* COMPANIONS */}
          <div>
            <label className="label">Who are you traveling with?</label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {companions.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCompanion(c)}
                  className={`chip ${
                    selectedCompanion === c
                      ? "chip-active"
                      : "chip-inactive"
                  }`}
                >
                  <Users size={16} />
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* INTERESTS */}
          <div>
            <label className="label">Your Interests</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {interests.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleInterest(item)}
                  className={`chip text-sm ${
                    selectedInterests.includes(item)
                      ? "chip-active"
                      : "chip-inactive"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* DIET */}
          <div>
            <label className="label">Dietary Preference</label>
            <div className="flex gap-3 mt-2">
              {["Vegetarian", "Non-Vegetarian"].map((d) => (
                <button
                  key={d}
                  onClick={() => setDiet(d)}
                  className={`chip ${
                    diet === d ? "chip-active" : "chip-inactive"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
            Find My Perfect Trip →
          </button>
        </div>
      </div>

      {/* LOCAL STYLES */}
      <style>
        {`
        .input-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f9fafb;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
        }
        .input-box input {
          width: 100%;
          background: transparent;
          outline: none;
        }
        .label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
        }
        .chip {
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
          font-size: 14px;
        }
        .chip-active {
          background: #fb923c;
          color: white;
          border-color: #fb923c;
        }
        .chip-inactive {
          background: white;
          color: #374151;
        }
        `}
      </style>
    </div>
  );
}
