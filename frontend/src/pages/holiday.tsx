import { MapPin, Calendar, Users } from "lucide-react";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
/* ================= AI STORIES ================= */

import { Play } from "lucide-react";

const aiStories = [
  {
    title: "Kids Go Free in Dubai",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
    reason: "Most loved by families",
  },
  {
    title: "Couple Escape in Bali",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
    reason: "Best romantic savings",
  },
  {
    title: "Friends Trip to Goa",
    image:
      "https://images.unsplash.com/photo-1583241800698-e8ab01830c29",
    reason: "Trending this month",
  },
];

/* ========================================================= */
/* HERO SECTION */
const HolidayHero = () => {
  return (
    <section
      className="relative h-[85vh] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="bg-white rounded-3xl shadow-xl max-w-5xl w-full p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Book Holiday Tour Packages
          </h1>

          <p className="text-gray-600 mt-2">
            Curated holiday experiences tailored to your travel dreams
          </p>

          <hr className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Where */}
            <div>
              <label className="block text-sm font-medium mb-1">Where?</label>
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                <MapPin size={18} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="bg-transparent outline-none w-full text-sm"
                />
              </div>
            </div>

            {/* When */}
            <div>
              <label className="block text-sm font-medium mb-1">When?</label>
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                <Calendar size={18} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Wed, 4 Feb"
                  className="bg-transparent outline-none w-full text-sm"
                />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-sm font-medium mb-1">Guests</label>
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                <Users size={18} className="text-gray-400 mr-2" />
                <span className="text-sm text-gray-700">
                  1 Room, 2 Adults, 0 Children
                </span>
              </div>
            </div>

            {/* Button */}
            <div className="flex items-end">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 font-semibold transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
/* DOUBLE UP HOLIDAYS SECTION */
const DoubleUpHolidaysSection = () => {
  return (
    <section className="w-full px-6 md:px-16 py-14 bg-white">
      {/* Info Banner */}
      <div className="bg-[#FFF4EA] rounded-2xl p-6 mb-16">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Know More About Double Up Holidays
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          With Double Up Holidays, <span className="font-semibold">your partner travels free</span> or
          <span className="font-semibold"> up to two kids below 8 go free</span> — making your next
          international getaway twice as joyful. Explore Singapore, Malaysia,
          Vietnam, Thailand, the UAE, and Indonesia with free land packages
          (hotels & experiences on us!). Limited-time offer.
          <span className="font-semibold"> Book NOW!</span>
        </p>
        <button className="text-orange-500 font-medium mt-2 text-sm hover:underline">
          Read More
        </button>
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Double Up Holidays
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Kids Go FREE */}
        <div className="flex items-center bg-[#EEF5FB] rounded-3xl p-6 relative">
          <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6"
              alt="Kids Go Free"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="ml-6">
            <h3 className="text-xl font-semibold mb-2">Kids Go FREE</h3>
            <p className="text-gray-700 text-sm">
              Make international family holidays magical — up to 2 kids
              (below 8) enjoy <span className="font-semibold">FREE</span> hotels & experiences!
            </p>
          </div>
        </div>

        {/* Partner Goes FREE */}
        <div className="flex items-center bg-[#FFF4EA] rounded-3xl p-6 relative">
          <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
              alt="Partner Goes Free"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="ml-6">
            <h3 className="text-xl font-semibold mb-2">
              Partner Goes FREE
            </h3>
            <p className="text-gray-700 text-sm">
              Book your international getaway, and your partner’s entire land
              package, including hotels & experiences, is{" "}
              <span className="font-semibold">FREE</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- DESTINATIONS (INDIA) ---------------- */

const destinations = [
  {
    name: "Goa",
    price: "₹24,999",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    name: "Manali",
    price: "₹18,499",
    image: "https://images.unsplash.com/photo-1620766163366-26b8f65bda28",
  },
  {
    name: "Jaipur",
    price: "₹15,999",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0b5b6d0",
  },
  {
    name: "Kashmir",
    price: "₹28,999",
    image: "https://images.unsplash.com/photo-1609943240967-4c4b6a5f0b9c",
  },
  {
    name: "Kerala",
    price: "₹22,999",
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d",
  },
  {
    name: "Leh Ladakh",
    price: "₹32,999",
    image: "https://images.unsplash.com/photo-1616364423747-15a6a4b1c53c",
  },
  {
    name: "Rishikesh",
    price: "₹14,999",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3",
  },
  {
    name: "Andaman",
    price: "₹35,999",
    image: "https://images.unsplash.com/photo-1544551763-ced6e2f9b8d7",
  },
];

/* ---------------- MOCK HOLIDAY PACKAGES ---------------- */

const allPackages = [
  {
    city: "Goa",
    title: "Sunny Goa Beach Getaway",
    duration: "3N/4D",
    price: "₹24,999",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    city: "Goa",
    title: "Luxury Goa Honeymoon",
    duration: "4N/5D",
    price: "₹32,499",
    image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c",
  },
  {
    city: "Manali",
    title: "Manali Snow Adventure",
    duration: "4N/5D",
    price: "₹18,499",
    image: "https://images.unsplash.com/photo-1620766163366-26b8f65bda28",
  },
  {
    city: "Jaipur",
    title: "Royal Jaipur Heritage Tour",
    duration: "3N/4D",
    price: "₹15,999",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0b5b6d0",
  },
  {
    city: "Kashmir",
    title: "Heavenly Kashmir Escape",
    duration: "5N/6D",
    price: "₹28,999",
    image: "https://images.unsplash.com/photo-1609943240967-4c4b6a5f0b9c",
  },
  {
    city: "Kerala",
    title: "Kerala Backwaters & Hills",
    duration: "4N/5D",
    price: "₹22,999",
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d",
  },
  {
    city: "Leh Ladakh",
    title: "Leh Ladakh Road Trip",
    duration: "6N/7D",
    price: "₹32,999",
    image: "https://images.unsplash.com/photo-1616364423747-15a6a4b1c53c",
  },
  {
    city: "Andaman",
    title: "Andaman Island Explorer",
    duration: "5N/6D",
    price: "₹35,999",
    image: "https://images.unsplash.com/photo-1544551763-ced6e2f9b8d7",
  },
];

/* ---------------- PAGE ---------------- */

const HolidayPackagesSection = ({
  packages,
  sort,
  setSort,
}: {
  packages: any[];
  sort: string;
  setSort: (v: string) => void;
}) => {

  const [selectedCity, setSelectedCity] = useState("Goa");

  const filteredPackages =
    selectedCity === "All"
      ? packages
      : packages.filter((pkg) => pkg.city === selectedCity);

  return (
    <>
      {/* ================= TOP TRENDING ================= */}

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Top Trending Destinations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((item) => (
            <div
              key={item.name}
              onClick={() => {
                setSelectedCity(item.name);
                document
                  .getElementById("packages-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative h-[320px] rounded-3xl overflow-hidden cursor-pointer group"
            >
              <img
                src={item.image}
                className="w-full h-full object-cover group-hover:scale-105 transition"
                alt={item.name}
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
                <MapPin size={14} />
                {item.name}
              </div>

              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm">Starting From</p>
                <p className="text-xl font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ================= AI PICKED STORIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">AI-Picked Holiday Stories</h2>
          <p className="text-gray-500 mt-2">
            Curated by AI based on real traveler preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiStories.map((story, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
            >
              {/* Image */}
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/35" />

              {/* AI Badge */}
              <div className="absolute top-4 left-4 bg-black/80 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                🤖 AI Picked
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 p-4 rounded-full group-hover:scale-110 transition">
                  <Play size={30} className="text-orange-500" />
                </div>
              </div>

              {/* Text */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-semibold text-lg">{story.title}</h3>
                <p className="text-sm opacity-90">{story.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ================= PACKAGES ================= */}

      <section
        id="packages-section"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        {/* ================= HEADING ================= */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Best-selling Holiday Packages
        </h2>

        {/* ================= SEARCH BAR ================= */}
        <div className="bg-[#FFF5EB] rounded-3xl p-6 flex flex-col md:flex-row gap-4 items-end mb-12">
          <div className="flex-1">
            <label className="text-sm font-medium">Where?</label>
            <div className="mt-2 bg-white rounded-full px-5 py-3 flex items-center gap-2">
              <MapPin size={16} className="text-gray-400" />
              <input
                placeholder="Where are you going?"
                className="outline-none text-sm w-full"
              />
            </div>
          </div>

          <div className="flex-1">
            <label className="text-sm font-medium">When?</label>
            <div className="mt-2 bg-white rounded-full px-5 py-3 flex items-center gap-2">
              <Calendar size={16} className="text-gray-400" />
              <span className="text-sm text-gray-700">Wed, 4 Feb</span>
            </div>
          </div>

          <div className="flex-1">
            <label className="text-sm font-medium">Guests</label>
            <div className="mt-2 bg-white rounded-full px-5 py-3 flex items-center gap-2">
              <Users size={16} className="text-gray-400" />
              <span className="text-sm text-gray-700">
                1 Room, 2 Adults, 0 Children
              </span>
            </div>
          </div>

          <button className="bg-orange-500 text-white rounded-full px-8 py-3 font-semibold hover:bg-orange-600">
            Search
          </button>
        </div>

        <div className="flex gap-8">
          {/* ================= FILTER SIDEBAR ================= */}
          <aside className="w-72 hidden lg:block">
            <div className="space-y-8">
              {/* City */}
              <div>
                <h4 className="font-semibold mb-4">City</h4>
                {["Goa", "Manali", "Jaipur", "Kashmir", "Kerala", "Andaman"].map(
                  (city) => (
                    <label key={city} className="flex gap-2 text-sm mb-2">
                      <input type="checkbox" />
                      {city}
                    </label>
                  )
                )}
              </div>

              {/* Star Rating */}
              <div>
                <h4 className="font-semibold mb-4">Star Rating</h4>
                {[5, 4, 3].map((s) => (
                  <label key={s} className="flex gap-2 text-sm mb-2">
                    <input type="checkbox" />
                    {"⭐".repeat(s)}
                  </label>
                ))}
              </div>

              {/* Duration */}
              <div>
                <h4 className="font-semibold mb-4">Duration (Days)</h4>
                <label className="flex gap-2 text-sm mb-2">
                  <input type="checkbox" /> 3–4 Days
                </label>
                <label className="flex gap-2 text-sm mb-2">
                  <input type="checkbox" /> 5–7 Days
                </label>
              </div>
            </div>
          </aside>

          {/* ================= RESULTS ================= */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="font-semibold">
                {packages.length} results Found
              </p>

              <select
                onChange={(e) => setSort(e.target.value)}
                className="border rounded-full px-4 py-2 text-sm"
              >
                <option value="low">Price (Low to High)</option>
                <option value="high">Price (High to Low)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={pkg.image}
                      className="h-48 w-full object-cover"
                    />

                    <span className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full">
                      ⭐ Hotel
                    </span>

                    <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {pkg.duration}
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{pkg.title}</h3>

                    <p className="text-xs text-gray-500 mb-3">
                      📍 {pkg.city}
                    </p>

                    <p className="font-bold text-lg mb-4">
                      From {pkg.price}
                      <span className="text-sm text-gray-500"> / Person</span>
                    </p>

                    <div className="flex gap-3">
                      <button className="flex-1 border rounded-lg py-2 text-sm">
                        Preview
                      </button>
                      <button className="flex-1 bg-orange-500 text-white rounded-lg py-2 text-sm">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button className="px-8 py-3 border rounded-full text-sm">
                Load More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const HolidayFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I start the booking process?",
      a: (
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Go to “Best-selling Holiday Packages”.</li>
          <li>Use filters (destination, duration, budget, etc.).</li>
          <li>Select a package you like.</li>
          <li>Click “Learn more” to view itinerary & inclusions.</li>
          <li>Click “Book Online” to proceed.</li>
        </ul>
      ),
    },
    {
      q: "What happens after I click “Book Online”?",
      a: (
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Enter traveller details.</li>
          <li>Choose payment option (partial or full).</li>
          <li>Review cancellation and booking terms.</li>
          <li>Get confirmation via Email & WhatsApp.</li>
        </ul>
      ),
    },
    {
      q: "If my travel dates change after booking, what happens?",
      a: (
        <p className="text-gray-600">
          If your plans change, contact our support team. Rescheduling or refunds
          depend on airline and hotel policies.
        </p>
      ),
    },
    {
      q: "What is the ‘Double Up Holidays’ offer?",
      a: (
        <p className="text-gray-600">
          The partner travels free, or up to 2 kids under 8 can join free on
          selected holiday packages.
        </p>
      ),
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-6 cursor-pointer"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.q}
              </h3>
              <ChevronDown
                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                  }`}
              />
            </div>

            {openIndex === index && (
              <div className="mt-4">{item.a}</div>
            )}
          </div>
        ))}
      </div>

      <button className="mt-10 border border-orange-500 text-orange-500 bg-white px-6 py-3 rounded-full font-medium hover:bg-orange-500 hover:text-white transition">
        View All
      </button>
    </section>
  );
};

/* MAIN PAGE (THIS IS WHAT ROUTER LOADS) */
const Holiday = () => {
  const [packages, setPackages] = useState(allPackages);
  const [sort, setSort] = useState("low");

  const sortedPackages = [...packages].sort((a, b) => {
    const priceA = Number(a.price.replace(/[₹,]/g, ""));
    const priceB = Number(b.price.replace(/[₹,]/g, ""));
    return sort === "low" ? priceA - priceB : priceB - priceA;
  });
  return (
    <>
      <HolidayHero />
      <DoubleUpHolidaysSection />
      <HolidayPackagesSection
        packages={sortedPackages}
        sort={sort}
        setSort={setSort}
      />
      <HolidayFAQ />
    </>
  );
};

export default Holiday;
