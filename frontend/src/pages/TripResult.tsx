import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import AISummary from "../components/PlanForm/AISummary";
import TripHero from "../components/PlanForm/Hero";
import { Flight, FlightSection } from "../components/PlanForm/FlightSection";
import HotelSection from "../components/PlanForm/HotelSection";
import TradeoffSection from "../components/PlanForm/TradeoffSection";
import ItinerarySection from "../components/PlanForm/ItinerarySection";
import BudgetSection from "../components/PlanForm/BudgetSection";

const TripResult = () => {

  const { id } = useParams();
  const [tripData, setTripData] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`http://127.0.0.1:8000/trip/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("TRIP RESULT:", data);
        setTripData(data);
      })
      .catch(err => console.error(err));

  }, [id]);

  const flights: Flight[] = tripData?.flights || [];

  if (!tripData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading trip...
      </div>
    );
  }

  return (
    <div className="min-h-screen">

      {/* ===== HERO (LIGHTER BG) ===== */}
      <div className="bg-[#141416] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <TripHero data={tripData} />
        </div>
      </div>

      {/* ===== FLIGHTS ===== */}
      <div className="bg-[#F7F2F0] pt-10 pb-16">
        <FlightSection flights={flights} />
      </div>

      {/* ===== SUMMARY ===== */}
      <div className="bg-[#F4EFEA] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AISummary data={tripData} />
        </div>
      </div>

      {/* ===== HOTEL ===== */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <HotelSection />
        </div>
      </div>

      {/* ===== TRADEOFF + ITINERARY ===== */}
      <div className="bg-[#F4F1ED] py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <TradeoffSection />
          <ItinerarySection />
        </div>
      </div>

      {/* ===== BUDGET ===== */}
      <div className="bg-[#EEE9E3] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <BudgetSection />
        </div>
      </div>

    </div>
  );
};

export default TripResult;
