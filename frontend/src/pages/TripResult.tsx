import { useLocation } from "react-router-dom";
import AISummary from "../components/Plan_Form_Result/AISummary";
import TripHero from "../components/Plan_Form_Result/Hero";
import { Flight, FlightSection } from "../components/Plan_Form_Result/FlightSection";
import HotelSection from "../components/Plan_Form_Result/HotelSection";
import TradeoffSection from "../components/Plan_Form_Result/TradeoffSection";
import ItinerarySection from "../components/Plan_Form_Result/ItinerarySection";
import BudgetSection from "../components/Plan_Form_Result/BudgetSection";

const TripResult = () => {
  const location = useLocation();
  const formData = location.state;

  /* ================= DUMMY FLIGHTS (BACKEND READY STRUCTURE) ================= */
  const flights: Flight[] = [
    {
      id: "1",
      airline: "IndiGo",
      flightNumber: "6E 2341",
      departure: "DEL",
      arrival: "GOI",
      departureTime: "06:15",
      arrivalTime: "08:45",
      duration: "2h 30m",
      price: 4599,
      tag: "Cheapest",
      departureAirport: "Indira Gandhi International Airport",
      arrivalAirport: "Goa International Airport",
    },
    {
      id: "2",
      airline: "Air India",
      flightNumber: "AI 883",
      departure: "DEL",
      arrival: "GOI",
      departureTime: "09:30",
      arrivalTime: "11:55",
      duration: "2h 25m",
      price: 5299,
      tag: "Recommended",
      departureAirport: "Indira Gandhi International Airport",
      arrivalAirport: "Goa International Airport",
    },
    {
      id: "3",
      airline: "Vistara",
      flightNumber: "UK 857",
      departure: "DEL",
      arrival: "GOI",
      departureTime: "14:20",
      arrivalTime: "16:45",
      duration: "2h 25m",
      price: 6199,
      tag: "Best Value",
      departureAirport: "Indira Gandhi International Airport",
      arrivalAirport: "Goa International Airport",
    },
    {
      id: "4",
      airline: "SpiceJet",
      flightNumber: "SG 8169",
      departure: "DEL",
      arrival: "GOI",
      departureTime: "17:45",
      arrivalTime: "20:15",
      duration: "2h 30m",
      price: 4899,
      departureAirport: "Indira Gandhi International Airport",
      arrivalAirport: "Goa International Airport",
    },
    {
      id: "5",
      airline: "Go First",
      flightNumber: "G8 391",
      departure: "DEL",
      arrival: "GOI",
      departureTime: "11:00",
      arrivalTime: "13:30",
      duration: "2h 30m",
      price: 4799,
      departureAirport: "Indira Gandhi International Airport",
      arrivalAirport: "Goa International Airport",
    },
    {
      id: "6",
      airline: "IndiGo",
      flightNumber: "6E 5023",
      departure: "DEL",
      arrival: "GOI",
      departureTime: "19:50",
      arrivalTime: "22:20",
      duration: "2h 30m",
      price: 5099,
      departureAirport: "Indira Gandhi International Airport",
      arrivalAirport: "Goa International Airport",
    },
  ];

  return (
    <div className="min-h-screen">

      {/* ================= HERO ================= */}
      <div className="bg-[#0b0b0c] pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <TripHero data={formData} />
        </div>
      </div>

      {/* ================= ROUTE BAR ================= */}
      <div className="bg-[#F7F2F0] border-t border-black/5 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-sm text-neutral-600">
          <div className="flex items-center gap-3 font-medium">
            <span>{formData?.from_city || "Delhi"}</span>
            <span className="text-orange-500">✈</span>
            <span>{formData?.to_city || "Goa"}</span>
          </div>

          <div className="flex items-center gap-6 text-neutral-500">
            <span>{formData?.duration || "3 Days"}</span>
            <span>{formData?.travel_class || "Economy"}</span>
            <span>{formData?.budget_range || "Medium Budget"}</span>
          </div>
        </div>
      </div>

      {/* ================= FLIGHTS ================= */}
      <div className="bg-[#F7F2F0] pt-8 pb-16">
        <FlightSection flights={flights} />
      </div>

      {/* ================= SUMMARY ================= */}
      <div className="bg-[#F4EFEA] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AISummary data={formData} />
        </div>
      </div>

      {/* ================= HOTEL ================= */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <HotelSection />
        </div>
      </div>

      {/* ================= TRADEOFF + ITINERARY ================= */}
      <div className="bg-[#F4F1ED] py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <TradeoffSection />
          <ItinerarySection />
        </div>
      </div>

      {/* ================= BUDGET ================= */}
      <div className="bg-[#EEE9E3] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <BudgetSection />
        </div>
      </div>

    </div>
  );
};

export default TripResult;
