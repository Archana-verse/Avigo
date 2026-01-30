import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function FlightsPage() {
  /* 🔧 GET DATA FROM PLAN FORM */
  const { state } = useLocation();

  /* 🔧 FILTER STATES */
  const [nonStop, setNonStop] = useState(false);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);

  /* 🔧 DUMMY FLIGHT DATA (replace with backend later) */
  const flights = [
    {
      airline: "IndiGo",
      depart: "06:35",
      arrive: "09:25",
      duration: "2h 50m",
      stops: "Non-stop",
      price: 7171,
    },
    {
      airline: "Air India",
      depart: "07:00",
      arrive: "09:45",
      duration: "2h 45m",
      stops: "Non-stop",
      price: 7221,
    },
    {
      airline: "IndiGo",
      depart: "05:30",
      arrive: "08:25",
      duration: "2h 55m",
      stops: "Non-stop",
      price: 7537,
    },
    {
      airline: "Vistara",
      depart: "08:30",
      arrive: "11:20",
      duration: "2h 50m",
      stops: "Non-stop",
      price: 7610,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* TOP BAR */}
      <div className="bg-white shadow p-4">
        <h1 className="text-xl font-semibold">
          Flights from {state?.fromCity} to {state?.toCity}
        </h1>
        <p className="text-sm text-gray-500">
          Departure: {state?.startDate} • Class: {state?.selectedClass}
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 px-4 mt-4">

        {/* LEFT FILTER COLUMN */}
        <div className="col-span-3 bg-white rounded-xl p-4 h-fit">

          <h2 className="font-semibold mb-3">Filters</h2>

          {/* STOPS */}
          <div className="mb-4">
            <p className="font-medium">Stops</p>
            <label className="text-sm flex gap-2 mt-1">
              <input
                type="checkbox"
                checked={nonStop}
                onChange={() => setNonStop(!nonStop)}
              />
              Non-stop
            </label>
          </div>

          {/* AIRLINES */}
          <div>
            <p className="font-medium">Airlines</p>
            {["IndiGo", "Air India", "Vistara"].map((airline) => (
              <label key={airline} className="text-sm flex gap-2 mt-1">
                <input
                  type="checkbox"
                  onChange={() =>
                    setSelectedAirlines((prev) =>
                      prev.includes(airline)
                        ? prev.filter((a) => a !== airline)
                        : [...prev, airline]
                    )
                  }
                />
                {airline}
              </label>
            ))}
          </div>
        </div>

        {/* RIGHT FLIGHT RESULTS */}
        <div className="col-span-9">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {flights.map((flight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{flight.airline}</span>
                  <span className="text-green-600 font-bold">
                    ₹{flight.price}
                  </span>
                </div>

                <div className="mt-2 text-sm text-gray-600">
                  <div>
                    {flight.depart} → {flight.arrive}
                  </div>
                  <div>
                    {flight.stops} • {flight.duration}
                  </div>
                </div>

                <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium">
                  Select Flight
                </button>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
