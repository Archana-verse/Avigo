import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Clock, Plane, ArrowRight, X, Star } from "lucide-react";

/* ================= TYPES ================= */
export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  departureAirport?: string;
  arrivalAirport?: string;
  tag?: "Best Value" | "Recommended" | "Cheapest";
}

interface FlightCardProps {
  flight: Flight;
  onPreview: (flight: Flight) => void;
  active?: boolean;
}

/* ================= CARD ================= */
function FlightCard({ flight, onPreview, active }: FlightCardProps) {
  const tagColors = {
    "Best Value": "bg-primary/10 text-primary",
    Recommended: "bg-emerald-500/10 text-emerald-600",
    Cheapest: "bg-blue-500/10 text-blue-600",
  };

  const logo =
    "https://res.cloudinary.com/ddofg7mcl/image/upload/v1770198647/pexels-sbsoneji-3581364_uyves9.jpg";

  const isAIRecommended = flight.tag === "Recommended";

  return (
    <div className="relative mt-10">

      {/* OVERLAP BADGE */}
      {isAIRecommended && (
        <div className="absolute -top-6 left-3 z-[999]">
          <div className="flex items-center gap-2 rounded-full bg-primary text-white px-4 py-1.5 text-xs font-semibold shadow-lg">
            <Star className="w-3.5 h-3.5 fill-white" />
            AI Best Recommended
          </div>
        </div>
      )}

      <div
        className={cn(
          "card-premium min-w-[430px] p-7 flex flex-col gap-6 rounded-3xl bg-white",
          isAIRecommended &&
            "ring-2 ring-primary shadow-[0_0_60px_-12px_hsl(var(--primary)/0.7)]"
        )}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="airline"
              className="w-11 h-11 rounded-full object-cover bg-muted"
            />
            <div>
              <p className="font-medium">{flight.airline}</p>
              <p className="text-sm text-muted-foreground">
                {flight.flightNumber}
              </p>
            </div>
          </div>

          {flight.tag && (
            <span className={cn("chip text-xs", tagColors[flight.tag])}>
              {flight.tag}
            </span>
          )}
        </div>

        {/* TIMELINE */}
        <div className="flex items-center gap-6">
          <div className="text-center min-w-[70px]">
            <p className="text-xl font-semibold">{flight.departureTime}</p>
            <p className="text-xs text-muted-foreground">
              {flight.departure}
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 w-full">
              <div className="flex-1 h-px bg-border" />
              <Plane className="w-4 h-4 text-primary" />
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {flight.duration}
            </div>
          </div>

          <div className="text-center min-w-[70px]">
            <p className="text-xl font-semibold">{flight.arrivalTime}</p>
            <p className="text-xs text-muted-foreground">
              {flight.arrival}
            </p>
          </div>
        </div>

        {/* PRICE */}
        <div className="flex items-center justify-between pt-5 border-t border-border/60">
          <div>
            <p className="text-2xl font-semibold">
              ₹{flight.price.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground">per person</p>
          </div>

          <div className="flex gap-3">
            <Button
              size="sm"
              onClick={() => onPreview(flight)}
              className={cn(
                "px-5",
                active
                  ? "bg-primary text-white"
                  : "border border-border bg-white text-foreground hover:bg-muted"
              )}
            >
              Preview
            </Button>

            <Button size="sm" className="px-5 bg-primary text-white">
              Book Now <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= MODAL ================= */
function FlightModal({
  flight,
  onClose,
}: {
  flight: Flight;
  onClose: () => void;
}) {
  const isAIRecommended = flight.tag === "Recommended";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-md"
      />

      <div className="relative bg-white rounded-3xl border border-border shadow-2xl max-w-xl w-full p-8">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ⭐ AI BADGE TOP */}
        {isAIRecommended && (
          <div className="mb-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-4 py-1.5 text-xs font-semibold shadow-lg">
              <Star className="w-3.5 h-3.5 fill-white" />
              AI Best Recommended
            </div>
          </div>
        )}

        <h3 className="text-2xl font-semibold">{flight.airline}</h3>
        <p className="text-muted-foreground mb-6">
          {flight.flightNumber}
        </p>

        {/* TIMELINE */}
        <div className="flex items-center gap-4 p-5 bg-muted/40 rounded-xl">
          <div className="text-center min-w-[110px]">
            <p className="text-3xl font-semibold">{flight.departureTime}</p>
            <p className="text-sm text-muted-foreground">{flight.departure}</p>
            <p className="text-xs text-muted-foreground">
              {flight.departureAirport || "—"}
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 w-full">
              <div className="flex-1 h-px bg-primary/40" />
              <Plane className="w-5 h-5 text-primary" />
              <div className="flex-1 h-px bg-primary/40" />
            </div>
            <p className="text-sm text-muted-foreground">
              {flight.duration}
            </p>
          </div>

          <div className="text-center min-w-[110px]">
            <p className="text-3xl font-semibold">{flight.arrivalTime}</p>
            <p className="text-sm text-muted-foreground">{flight.arrival}</p>
            <p className="text-xs text-muted-foreground">
              {flight.arrivalAirport || "—"}
            </p>
          </div>
        </div>

        {/* ⭐ WHY AI RECOMMENDED */}
        {isAIRecommended && (
          <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-sm font-semibold mb-2">
              Why AI recommends this flight:
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>Best balance between price and duration</li>
              <li>Optimal departure timing for most travellers</li>
              <li>High reliability airline based on historical data</li>
              <li>Shorter layover risk compared to alternatives</li>
            </ul>
          </div>
        )}

        {/* DETAILS GRID */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-4 rounded-xl bg-muted/40">
            <p className="text-xs text-muted-foreground">Baggage</p>
            <p className="font-medium">15kg Check-in + 7kg Cabin</p>
          </div>

          <div className="p-4 rounded-xl bg-muted/40">
            <p className="text-xs text-muted-foreground">Meal</p>
            <p className="font-medium">Complimentary</p>
          </div>

          <div className="p-4 rounded-xl bg-muted/40">
            <p className="text-xs text-muted-foreground">Cancellation</p>
            <p className="font-medium">Free within 24hrs</p>
          </div>

          <div className="p-4 rounded-xl bg-muted/40">
            <p className="text-xs text-muted-foreground">Seat Selection</p>
            <p className="font-medium">Available</p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-8 flex items-center justify-between border-t pt-5">
          <div>
            <p className="text-3xl font-semibold">
              ₹{flight.price.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">
              Total per person
            </p>
          </div>

          <Button className="bg-primary text-white px-6">
            Book Now <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ================= SECTION ================= */
export function FlightSection({
  flights,
  className,
}: {
  flights: Flight[];
  className?: string;
}) {
  const [selectedFlight, setSelectedFlight] =
    useState<Flight | null>(null);

  return (
    <section className={cn("py-14", className)}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="section-title">Flight Options</h2>
          <p className="section-subtitle">
            {flights.length} flights found for your dates
          </p>
        </div>

        <div className="flex gap-8 overflow-x-auto overflow-y-visible pb-6 pt-8 scrollbar-hide">
          {flights.map((flight) => (
            <FlightCard
              key={flight.id}
              flight={flight}
              active={selectedFlight?.id === flight.id}
              onPreview={setSelectedFlight}
            />
          ))}
        </div>
      </div>

      {selectedFlight && (
        <FlightModal
          flight={selectedFlight}
          onClose={() => setSelectedFlight(null)}
        />
      )}
    </section>
  );
}
