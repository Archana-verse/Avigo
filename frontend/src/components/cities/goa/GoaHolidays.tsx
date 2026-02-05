import { Check, MapPin } from "lucide-react";

const goaPackages = [
  {
    title: "Goa Beach Escape: Sun, Shacks & Nightlife",
    duration: "4N/5D",
    hotelTag: "3 ⭐ Hotel",
    location: "4N Goa",
    price: "₹32,499",
    image: "https://res.cloudinary.com/placeholder/image/upload/v123/goa_pkg_1.jpg",
    features: ["1 Hotel", "Selected Meals", "Beach Access", "2 Transfers"],
  },
  {
    title: "Luxury Goa Retreat: Spa • Beaches • Cruises",
    duration: "5N/6D",
    hotelTag: "5 ⭐ Luxury",
    location: "5N Goa",
    price: "₹57,999",
    image: "https://res.cloudinary.com/placeholder/image/upload/v123/goa_pkg_2.jpg",
    features: ["Luxury Hotel", "Spa Access", "Cruise", "Private Transfers"],
  },
  {
    title: "Goa Churches & Heritage Explorer",
    duration: "3N/4D",
    hotelTag: "Heritage Stay",
    location: "3N Goa",
    price: "₹26,999",
    image: "https://res.cloudinary.com/placeholder/image/upload/v123/goa_pkg_3.jpg",
    features: ["Heritage Stay", "Guided Tours", "Breakfast", "Local Transfers"],
  },
  {
    title: "Goa Family Getaway: Beaches & Activities",
    duration: "4N/5D",
    hotelTag: "4 ⭐ Resort",
    location: "4N Goa",
    price: "₹38,999",
    image: "https://res.cloudinary.com/placeholder/image/upload/v123/goa_pkg_4.jpg",
    features: ["Resort Stay", "Kids Activities", "Meals", "2 Transfers"],
  },
];

const GoaHolidays = () => {
  return (
    <section className="w-full bg-[#fff1e6] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-[36px] md:text-[44px] font-extrabold text-center mb-14 text-black">
          Holiday Packages in Goa
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {goaPackages.map((trip, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] h-[520x]"

            >
              <div className="relative h-[220px]">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
x``
                <span className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full shadow-sm font-medium">
                  {trip.hotelTag}
                </span>

                <span className="absolute top-3 right-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
                  {trip.duration}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-[15px] font-semibold mb-2 line-clamp-2 min-h-[40px]">
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
                      <Check size={14} className="text-gray-400" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-gray-500">From</p>
                    <p className="text-lg font-semibold">
                      {trip.price}
                      <span className="text-xs text-gray-500"> / Person</span>
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-orange-500 flex items-center justify-center">
                    <img
                      src="/uploads/logo.png"
                      className="w-4 h-4"
                      alt="logo"
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <button className="flex-1 py-2 text-sm rounded-xl border border-gray-300 text-gray-600 hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50 transition">
                    Preview
                  </button>

                  <button className="flex-1 py-2 text-sm rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button className="inline-flex items-center gap-2 rounded-full border border-orange-500 px-6 py-3 text-sm font-medium text-orange-600 hover:bg-orange-500 hover:text-white transition">
            All Packages →
          </button>
        </div>

      </div>
    </section>
  );
};

export default GoaHolidays;
