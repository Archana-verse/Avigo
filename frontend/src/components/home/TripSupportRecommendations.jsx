import { CheckCircle, Heart } from "lucide-react";

const supportRecommendations = [
  {
    title: "Local Connectivity (SIM / eSIM)",
    duration: "7 – 30 Days",
    description:
      "Suggested for navigation, emergency access and online bookings during your trip.",
    price: "₹399",
    image: "/images/essentials/connectivity.jpg",
    points: ["Solo travellers", "India-wide coverage", "Instant activation"],
  },
  {
    title: "Domestic Travel Insurance",
    duration: "Up to 30 Days",
    description:
      "Recommended for longer trips or multi-city travel within India.",
    price: "₹299",
    image: "/images/essentials/insurance.jpg",
    points: ["Medical safety", "Trip protection", "All travellers"],
  },
  {
    title: "Airport Pickup & Drop",
    duration: "One-way",
    description:
     "Helpful for first-time visitors or late-night arrivals in new cities.",
    price: "₹499",
    image: "/images/essentials/airport-transfer.jpg",
    points: ["Stress-free arrival", "Families", "Solo travellers"],
  },
  {
    title: "Monument & Attraction Access",
    duration: "Same day",
    description:
      "Suggested during peak seasons to reduce waiting time at popular attractions.",
    price: "₹199",
    image: "/images/essentials/monuments.jpg",
    points: ["Time saving", "Peak season", "Instant entry"],
  },
];

const TripSupportRecommendations = () => {
  return (
    <section className="bg-[#fff6ec] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[48px] font-extrabold text-black">
            AI-suggested travel support for your trip
          </h2>
          <p className="mt-4 text-gray-600 max-w-[720px] mx-auto">
            Helpful add-ons recommended by the planner to ensure a smooth journey across India
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportRecommendations.map((item, i) => (
            <div
              key={i}
              className="
                bg-white rounded-2xl overflow-hidden
                border border-gray-200
                transition-shadow duration-200
                hover:shadow-[0_12px_35px_rgba(0,0,0,0.10)]
              "
            >
              {/* Image */}
              <div className="relative h-[180px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
                  {item.duration}
                </span>

                {/* Wishlist (visual only) */}
                <div className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-full">
                  <Heart size={14} className="text-gray-500" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-600 mb-3">
                  {item.description}
                </p>

                <div className="space-y-1 text-xs text-gray-700 mb-4">
                  {item.points.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle size={14} className="text-gray-500" />
                      {p}
                    </div>
                  ))}
                </div>

                <div className="border-t pt-3">
                  <p className="text-xs text-gray-500">Estimated cost</p>
                  <p className="text-lg font-semibold">
                    {item.price}
                    <span className="text-xs text-gray-500"> / Person</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            className="
              inline-flex items-center gap-2
              rounded-full border border-orange-500
              px-6 py-3 text-sm font-medium
              text-orange-600
              transition
              hover:bg-orange-500 hover:text-white
            "
          >
            View planner suggestions →
          </button>
        </div>

      </div>
    </section>
  );
};

export default TripSupportRecommendations;
