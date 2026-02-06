import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Clock, Plane, ArrowRight, X, Star } from "lucide-react";

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
  bookingUrl?: string;
  tag?: "Best Value" | "Recommended" | "Cheapest";
}

interface FlightCardProps {
  flight: Flight;
  onPreview: (flight: Flight) => void;
  active?: boolean;
}

function FlightCard({ flight, onPreview, active }: FlightCardProps) {
  const isAIRecommended = flight.tag === "Recommended";

  const tagColors = {
    "Best Value": "bg-primary/10 text-primary",
    Recommended: "bg-emerald-500/10 text-emerald-600",
    Cheapest: "bg-blue-500/10 text-blue-600",
  };

  const logo =
    "https://res.cloudinary.com/ddofg7mcl/image/upload/v1770198647/pexels-sbsoneji-3581364_uyves9.jpg";

  const handleBookNow = () => {
    if (flight.bookingUrl) window.open(flight.bookingUrl, "_blank");
  };

  return (
    <div className="min-w-[440px] relative">
      <div
        className={cn(
          "relative rounded-3xl bg-white p-8 flex flex-col gap-6 transition-all duration-300 border",
          isAIRecommended
            ? "border-primary shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.4)]"
            : "border-border hover:shadow-xl"
        )}
      >
        
        {isAIRecommended && (
          <div className="absolute -top-3 left-6 bg-primary text-white text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
            <Star className="w-3.5 h-3.5 fill-white" />
            AI Best Recommended
          </div>
        )}

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="airline"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-semibold">{flight.airline}</p>
              <p className="text-sm text-muted-foreground">
                {flight.flightNumber}
              </p>
            </div>
          </div>

          {!isAIRecommended && flight.tag && (
            <span className={cn("chip text-xs", tagColors[flight.tag])}>
              {flight.tag}
            </span>
          )}
        </div>

        <div className="flex items-center gap-6">
          <div className="text-center min-w-[80px]">
            <p className="text-2xl font-semibold">{flight.departureTime}</p>
            <p className="text-xs text-muted-foreground">{flight.departure}</p>
          </div>

          <div className="flex-1 flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 w-full">
              <div className="flex-1 h-[2px] bg-border" />
              <Plane className="w-5 h-5 text-primary" />
              <div className="flex-1 h-[2px] bg-border" />
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {flight.duration}
            </div>
          </div>

          <div className="text-center min-w-[80px]">
            <p className="text-2xl font-semibold">{flight.arrivalTime}</p>
            <p className="text-xs text-muted-foreground">{flight.arrival}</p>
          </div>
        </div>

     
        <div className="flex items-center justify-between pt-6 border-t">
          <div>
            <p className="text-3xl font-semibold">
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
                  : "border bg-white hover:bg-muted"
              )}
            >
              Preview
            </Button>

            <Button
              size="sm"
              onClick={handleBookNow}
              className="px-6 bg-primary text-white"
            >
              Book Now <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}



function FlightModal({
  flight,
  onClose,
}: {
  flight: Flight;
  onClose: () => void;
}) {
  const isAIRecommended = flight.tag === "Recommended";

  const handleBookNow = () => {
    if (flight.bookingUrl) window.open(flight.bookingUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
      />

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-xl w-full p-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-semibold">{flight.airline}</h3>
        <p className="text-muted-foreground mb-6">
          {flight.flightNumber}
        </p>

        <div className="flex items-center gap-4 p-6 bg-muted/40 rounded-xl">
          <div className="text-center min-w-[110px]">
            <p className="text-3xl font-semibold">{flight.departureTime}</p>
            <p className="text-sm text-muted-foreground">{flight.departure}</p>
            <p className="text-xs text-muted-foreground">
              {flight.departureAirport || "—"}
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center gap-1">
            <Plane className="w-6 h-6 text-primary" />
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

    
        {isAIRecommended && (
          <div className="mt-6 rounded-xl border bg-primary/5 p-4">
            <p className="text-sm font-semibold mb-1">
              Why AI recommends this flight
            </p>
            <p className="text-sm text-muted-foreground">
              Best balance between duration, price and reliability based on
              traveller preferences.
            </p>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between border-t pt-6">
          <div>
            <p className="text-3xl font-semibold">
              ₹{flight.price.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">
              Total per person
            </p>
          </div>

          <Button
            onClick={handleBookNow}
            className="bg-primary text-white px-8"
          >
            Book Now <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}



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
    <section className={cn("py-16", className)}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="section-title">Flight Options</h2>
          <p className="section-subtitle">
            {flights.length} flights found for your dates
          </p>
        </div>

        <div className="flex gap-10 overflow-x-auto pb-6 scrollbar-hide">
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
