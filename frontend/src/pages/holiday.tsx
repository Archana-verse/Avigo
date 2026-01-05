import { MapPin, Calendar, Users } from "lucide-react";
import { useRef, useState } from "react";
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

/* ========================================================= */
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

const HolidayPackagesSection = () => {
  const [selectedCity, setSelectedCity] = useState("Goa");

  const filteredPackages = allPackages.filter(
    (pkg) => pkg.city === selectedCity
  );

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
        className="max-w-7xl mx-auto px-6 pb-20"
      >
        <h2 className="text-3xl font-bold mb-6">
          Best-selling Holiday Packages in {selectedCity}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPackages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={pkg.image}
                className="h-48 w-full object-cover"
                alt={pkg.title}
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">{pkg.title}</h3>
                <p className="text-sm text-gray-500">{pkg.duration}</p>

                <p className="mt-3 font-bold text-orange-600">
                  From {pkg.price} / person
                </p>

                <button className="mt-4 w-full bg-orange-500 text-white rounded-lg py-2 font-semibold hover:bg-orange-600 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};


/* ========================================================= */
/* MAIN PAGE (THIS IS WHAT ROUTER LOADS) */
const Holiday = () => {
  return (
    <>
      <HolidayHero />
      <DoubleUpHolidaysSection />
      <HolidayPackagesSection />
    </>
  );
};

export default Holiday;
