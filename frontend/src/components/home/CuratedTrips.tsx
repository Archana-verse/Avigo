import { Check, MapPin } from "lucide-react";

const indiaPackages = [
  {
    title: "Amazing Goa Escape: Beaches & Nightlife",
    duration: "4N/5D",
    hotelTag: "3 ⭐ Hotel",
    location: "4N Goa",
    price: "₹32,999",
    image: "/images/packages/goa.jpg",
    features: ["1 Hotel", "Selected Meals", "Visa", "2 Transfers"],
  },
  {
    title: "Luxury Goa Getaway: Relax & Rejuvenate",
    duration: "5N/6D",
    hotelTag: "5 ⭐ Hotel",
    location: "5N Goa",
    price: "₹54,499",
    image: "/images/packages/goa-luxury.jpg",
    features: ["1 Premium Hotel", "Selected Meals", "Spa Access", "2 Transfers"],
  },
  {
    title: "Kerala Backwaters & Hills Retreat",
    duration: "5N/6D",
    hotelTag: "3 ⭐ Hotel",
    location: "Munnar • Thekkady • Alleppey",
    price: "₹41,999",
    image: "/images/packages/kerala.jpg",
    features: ["3 Hotels", "Selected Meals", "Houseboat Stay", "4 Transfers"],
  },
  {
    title: "Kerala Luxury Escape: Backwaters & Ayurveda",
    duration: "6N/7D",
    hotelTag: "5 ⭐ Resort",
    location: "Kumarakom • Varkala",
    price: "₹72,499",
    image: "/images/packages/kerala-luxury.jpg",
    features: ["Luxury Resorts", "Ayurveda", "All Meals", "Private Transfers"],
  },
  {
    title: "Manali & Solang Adventure Escape",
    duration: "4N/5D",
    hotelTag: "3 ⭐ Hotel",
    location: "4N Manali",
    price: "₹28,999",
    image: "/images/packages/manali.jpg",
    features: ["1 Hotel", "Adventure Sports", "Meals", "Local Transfers"],
  },
  {
    title: "Himachal Explorer: Shimla & Manali",
    duration: "6N/7D",
    hotelTag: "3 ⭐ Hotel",
    location: "Shimla • Manali • Chandigarh",
    price: "₹39,499",
    image: "/images/packages/shimla-manali.jpg",
    features: ["3 Hotels", "Sightseeing", "Meals", "All Transfers"],
  },
  {
    title: "Royal Rajasthan: Jaipur, Jodhpur & Udaipur",
    duration: "6N/7D",
    hotelTag: "5 ⭐ Heritage Hotel",
    location: "Jaipur • Jodhpur • Udaipur",
    price: "₹46,999",
    image: "/images/packages/rajasthan.jpg",
    features: ["Heritage Stays", "Cultural Tours", "Meals", "Transfers"],
  },
  {
    title: "Udaipur Romantic Escape",
    duration: "3N/4D",
    hotelTag: "5 ⭐ Lake View Hotel",
    location: "3N Udaipur",
    price: "₹29,999",
    image: "/images/packages/udaipur.jpg",
    features: ["Lake View Stay", "Boat Ride", "Meals", "Airport Pickup"],
  },
];

const CuratedTrips = () => {
  return (
    <section className="bg-[#fff6ec] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
<h2
  className="
    text-center
    text-[36px] md:text-[44px]
    font-extrabold
    leading-tight
    tracking-tight
    mb-14
    text-black
  "
>
  Find curated trips, unique holiday packages,
  <br />
  and best travel deals
</h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {indiaPackages.map((trip, i) => (
            <div
              key={i}
              className="
                bg-white rounded-2xl overflow-hidden
                border border-gray-200
                transition-shadow duration-200
                hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]
              "
            >
              {/* Image */}
              <div className="relative h-[190px]">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />

                <span className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full shadow-sm font-medium">
                  {trip.hotelTag}
                </span>

                <span className="absolute top-3 right-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
                  {trip.duration}
                </span>

                {/* Image dots (visual parity with Alike) */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  <span className="w-2 h-2 bg-white/50 rounded-full" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-[15px] font-semibold leading-snug mb-2">
                  {trip.title}
                </h3>

                <div className="flex items-center gap-1 text-xs text-gray-600 mb-3">
                  <MapPin size={14} />
                  {trip.location}
                </div>

                <div className="border-t border-dashed my-3" />

                <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-700 mb-4">
                  {trip.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <Check size={14} className="text-gray-500" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Price + Logo */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-gray-500">From</p>
                    <p className="text-lg font-semibold text-black">
                      {trip.price}
                      <span className="text-xs text-gray-500"> / Person</span>
                    </p>
                  </div>

                  {/* Small logo */}
                  <div className="w-8 h-8 rounded-full border border-orange-500 flex items-center justify-center">
                    <img
                      src="/uploads/logo.png"
                      alt="logo"
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-4">
                  <button
                    className="
                      flex-1 py-2 text-sm rounded-xl
                      border border-gray-300 text-gray-600
                      hover:border-orange-400 hover:text-orange-500
                      hover:bg-orange-50
                      transition-all duration-200
                    "
                  >
                    Preview
                  </button>

                  <button
                    className="
                      flex-1 py-2 text-sm rounded-xl
                      bg-orange-500 text-white
                      hover:bg-orange-600
                      transition-all duration-200
                    "
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button
            className="
              inline-flex items-center gap-2
              rounded-full border border-orange-500
              px-6 py-3 text-sm font-medium
              text-orange-600
              hover:bg-orange-500 hover:text-white
              transition-all duration-200
            "
          >
            All Packages →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CuratedTrips;
