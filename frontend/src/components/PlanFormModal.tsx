import { useState, useMemo } from "react";
import {
  MapPin,
  Calendar,
  Users,
  IndianRupee,
  X,
  Palmtree,
  Landmark,
  Mountain,
  Utensils,
  Moon,
  ShoppingBag,
  HeartPulse,
  Compass,
  PawPrint,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const travelClasses = ["Economy", "Business", "First"];
const companions = ["Solo", "Couple", "Family", "Friends"];

const interestsList = [
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

const interestIcons: Record<string, JSX.Element> = {
  Beaches: <Palmtree size={16} />,
  "City Sightseeing": <Landmark size={16} />,
  Mountains: <Mountain size={16} />,
  Food: <Utensils size={16} />,
  Nightlife: <Moon size={16} />,
  Shopping: <ShoppingBag size={16} />,
  "Spa & Wellness": <HeartPulse size={16} />,
  Adventure: <Compass size={16} />,
  "Culture & Heritage": <Landmark size={16} />,
  Wildlife: <PawPrint size={16} />,
};

type Diet = "Vegetarian" | "Non-Vegetarian";

export default function PlanFormModal({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();

  const [fromCity, setFromCity] = useState<string | null>(null);
  const [toCity, setToCity] = useState<string | null>(null);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [travelClass, setTravelClass] = useState("Economy");
  const [budgetValue, setBudgetValue] = useState(50);
  const [group, setGroup] = useState("Solo");
  const [diet, setDiet] = useState<Diet>("Vegetarian");
  const [interests, setInterests] = useState<string[]>([]);

  const durationDays = useMemo(() => {
    if (!startDate || !endDate) return null;
    const s = new Date(startDate).getTime();
    const e = new Date(endDate).getTime();
    if (e <= s) return null;
    return Math.ceil((e - s) / (1000 * 60 * 60 * 24));
  }, [startDate, endDate]);

  const budgetRange = useMemo<"Low" | "Medium" | "Flexible">(() => {
    if (budgetValue <= 33) return "Low";
    if (budgetValue <= 66) return "Medium";
    return "Flexible";
  }, [budgetValue]);

  const toggleInterest = (item: string) => {
    setInterests((prev) => {
      if (prev.includes(item)) return prev.filter((i) => i !== item);
      if (prev.length >= 3) return prev;
      return [...prev, item];
    });
  };

  const isValid = !!(startDate && endDate && durationDays && group);

  const handleSubmit = async () => {
  if (!isValid) return;

  const payload = {
    from_city: fromCity,
    to_city: toCity,
    start_date: startDate,
    end_date: endDate,
    duration_days: durationDays,
    travel_class: travelClass,
    budget_range: budgetRange,
    travel_group: group,
    interests,
    dietary_preference: diet,
  };

  try {
    const res = await fetch("http://127.0.0.1:8000/plan/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    onClose();
    navigate(`/trip-result/${data.trip_id}`);

  } catch (err) {
    console.error("API ERROR:", err);
  }
};


  const sliderPercent = `${budgetValue}%`;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl rounded-3xl relative glass-card max-h-[90vh] overflow-y-auto">


        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white"
        >
          <X size={18} />
        </button>

        <div className="p-8 space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Plan Your Perfect Journey
          </h1>

     
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="input-box">
              <MapPin size={18} />
              <input
                placeholder="From"
                value={fromCity ?? ""}
                onChange={(e) => setFromCity(e.target.value || null)}
              />
            </div>
            <div className="input-box">
              <MapPin size={18} />
              <input
                placeholder="To "
                value={toCity ?? ""}
                onChange={(e) => setToCity(e.target.value || null)}
              />
            </div>
          </div>

          <div>
            <label className="label">Travel Dates</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="input-box">
                <Calendar size={18} />
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="input-box">
                <Calendar size={18} />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
            {durationDays && (
              <p className="text-xs text-gray-500 mt-1">
                Duration: {durationDays} days
              </p>
            )}
          </div>

          <div>
            <label className="label">Travel Class</label>
            <div className="flex gap-2 mt-2">
              {travelClasses.map((cls) => (
                <button
                  key={cls}
                  onClick={() => setTravelClass(cls)}
                  className={`chip ${
                    travelClass === cls ? "chip-active" : "chip-inactive"
                  }`}
                >
                  {cls}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="label">
              Estimated Budget:{" "}
              <span className="font-semibold">{budgetRange}</span>
            </label>
            <div className="flex items-center gap-3 mt-3">
              <IndianRupee size={18} />
              <input
                type="range"
                min={0}
                max={100}
                value={budgetValue}
                onChange={(e) => setBudgetValue(Number(e.target.value))}
                className="budget-slider w-full"
                style={{ ["--slider-percent" as any]: sliderPercent }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>Low</span>
              <span>Medium</span>
              <span>Flexible</span>
            </div>
          </div>

       
          <div>
            <label className="label">Who are you traveling with?</label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {companions.map((c) => (
                <button
                  key={c}
                  onClick={() => setGroup(c)}
                  className={`chip ${
                    group === c ? "chip-active" : "chip-inactive"
                  }`}
                >
                  <Users size={16} />
                  {c}
                </button>
              ))}
            </div>
          </div>


          <div>
            <label className="label">
              Your Interests <span className="text-xs"></span>
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {interestsList.map((item) => {
                const active = interests.includes(item);
                return (
                  <button
                    key={item}
                    onClick={() => toggleInterest(item)}
                    className={`chip ${
                      active ? "chip-active" : "chip-inactive"
                    }`}
                  >
                    <span
                      className={active ? "text-white" : "text-gray-400"}
                    >
                      {interestIcons[item]}
                    </span>
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="label">Dietary Preference (optional)</label>
            <div className="flex gap-3 mt-2">
              {["Vegetarian", "Non-Vegetarian"].map((d) => (
                <button
                  key={d}
                  onClick={() => setDiet(d as Diet)}
                  className={`chip ${
                    diet === d ? "chip-active" : "chip-inactive"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>


          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`w-full mt-4 py-3 rounded-full font-semibold transition ${
              isValid
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Start Planning For Free →
          </button>
        </div>
      </div>


      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
        }
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
          font-size: 14px;
        }
        .chip-active {
          background: #f97316;
          color: white;
          border-color: #f97316;
        }
        .chip-inactive {
          background: white;
          color: #374151;
        }
        .budget-slider {
          -webkit-appearance: none;
          height: 6px;
          border-radius: 999px;
          background: linear-gradient(
            to right,
            #f97316 0%,
            #f97316 var(--slider-percent),
            #e5e7eb var(--slider-percent),
            #e5e7eb 100%
          );
        }
        .budget-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #f97316;
          border: 3px solid white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
