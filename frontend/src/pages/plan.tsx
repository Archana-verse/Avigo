import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlanFormModal from "../components/PlanFormModal";

function FaqItem({ question, answer }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b pb-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-medium">
          {question}
        </span>

        <span
          className={`transform transition ${open ? "rotate-180" : ""
            }`}
        >
          ▼
        </span>
      </button>

      {open && (
        <p className="mt-4 text-gray-600 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}


export default function Plan() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900">
      {/* ================= HERO ================= */}
      <section className="pt-28 pb-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Avi, Your AI-Powered <br /> Travel Companion
        </h1>

        <h3 className="mt-6 text-lg font-medium">
          AI Trip Planner to build personalised itineraries in minutes
        </h3>

        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-sm md:text-base">
          Transform your travel dreams into reality with Raahi’s intelligent
          trip planner. Raahi creates personalised, budget-friendly itineraries
          tailored to your interests, travel style, and preferences —
          completely free.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-8 px-8 py-3 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition font-medium"
        >
          Start Planning For Free →
        </button>
      </section>

      {/* ================= MOCK LAPTOP ================= */}
      <section className="flex justify-center pb-24">
        <div className="w-[90%] max-w-5xl shadow-2xl rounded-xl overflow-hidden">
          <img
            src="/alike-mock.png"   // replace with your Raahi mock image
            alt="Avigo Planner"
            className="w-full"
          />
        </div>
      </section>

      {/* ================= DARK SECTION ================= */}
      <section className="bg-gradient-to-b from-[#121212] to-[#1a1a1a] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <h2 className="text-3xl font-semibold leading-snug">
            Trip Planner – One click.
            <br />
            Infinite Destinations.
            <br />
            Entirely You.
          </h2>

          <div>
            <p className="text-gray-300 mb-6">
              Avi is your go-to trip planner, designed to create personalised
              travel plans that fit your interests, budget, and style. From
              dream vacations to spontaneous getaways, effortlessly build and
              manage your itinerary for a smooth, stress-free travel experience
              from start to finish.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition font-medium"
            >
              Plan With Avi →
            </button>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-[#fff7f0] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
            How It Works: Plan Your Perfect <br className="hidden md:block" />
            Trip In 3 Simple Ways
          </h2>

          <div className="grid md:grid-cols-2 gap-20 items-start">
            {/* ===== LEFT: AI CREATE TRIP ===== */}
            <div className="flex flex-col gap-10">
              {/* Mock Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
                <img
                  src="/images/plan/form.png" // replace with your image
                  alt="AI Planner"
                  className="rounded-xl"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Let AI Create Your Trip
                </h3>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <span className="h-7 w-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-semibold">
                      1
                    </span>
                    <p className="text-sm text-gray-700">
                      <strong>Describe your trip</strong><br />
                      Tell Avi about your dream holiday. Example: “I want a romantic
                      5-day trip to Dubai with amazing food and sunset views.”
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <span className="h-7 w-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-semibold">
                      2
                    </span>
                    <p className="text-sm text-gray-700">
                      <strong>Get instant recommendations</strong><br />
                      Avi analyses your preferences and creates a complete itinerary
                      including stays, attractions, dining, and transport.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <span className="h-7 w-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-semibold">
                      3
                    </span>
                    <p className="text-sm text-gray-700">
                      <strong>Get a quote</strong><br />
                      Save or request a quote. Fill in your details and we’ll reach
                      out shortly.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(true)}
                  className="mt-8 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition text-white font-medium"
                >
                  Build itinerary with Avi →
                </button>
              </div>
            </div>

            {/* ===== RIGHT: BUILD FROM SCRATCH ===== */}
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Build Your Trip From Scratch
                </h3>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <span className="h-7 w-7 rounded-full border-2 border-orange-500 text-orange-500 flex items-center justify-center text-sm font-semibold">
                      1
                    </span>
                    <p className="text-sm text-gray-700">
                      <strong>Set your basics</strong><br />
                      Choose destination, travel dates, duration, and budget.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <span className="h-7 w-7 rounded-full border-2 border-orange-500 text-orange-500 flex items-center justify-center text-sm font-semibold">
                      2
                    </span>
                    <p className="text-sm text-gray-700">
                      <strong>Add your preferences</strong><br />
                      Select flights, hotels, activities, and must-see places.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <span className="h-7 w-7 rounded-full border-2 border-orange-500 text-orange-500 flex items-center justify-center text-sm font-semibold">
                      3
                    </span>
                    <p className="text-sm text-gray-700">
                      <strong>Get a quote</strong><br />
                      Save or request a quote. Our team will contact you shortly.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(true)}
                  className="mt-8 px-6 py-3 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition font-medium"
                >
                  Create Plan With Avi →
                </button>
              </div>

              {/* Mobile UI Mock */}
              <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
                <img
                  src="/images/plan/form.png" // replace with your image
                  alt="Trip Builder UI"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= WHY CHOOSE Avigo ================= */}
      <section className="bg-gradient-to-b from-[#121212] to-[#1b1b1b] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose Avigo’s AI Trip Planner, Eia?
          </h2>

          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20 text-sm md:text-base">
            Unlike traditional tools and simple itinerary generators, Eia, Avigo’s AI
            Trip Planner goes far beyond by offering
          </p>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT IMAGE */}
            <div className="rounded-3xl overflow-hidden bg-[#222] h-[340px]">
              <img
                src="/images/plan/dinner.jpg"
                alt="Couple dining"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT CARD */}
            <div className="bg-[#1f1f1f] rounded-3xl p-8 border border-white/10 flex flex-col justify-center">
              <div className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center mb-5">
                ⚙️
              </div>
              <h4 className="text-lg font-semibold mb-3">
                Personalised Itineraries
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                The AI crafts custom travel plans tailored to your preferences, travel
                style, and budget. Whether you want adventure, relaxation, or a bit of
                both, Avigo’s got you covered.
              </p>
            </div>

            {/* CARD */}
            <div className="bg-[#1f1f1f] rounded-3xl p-8 border border-white/10">
              <div className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center mb-5">
                🍽️
              </div>
              <h4 className="text-lg font-semibold mb-3">
                Local Cuisine And Hidden Gems
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Discover authentic local experiences, hotels, and attractions
                recommended by AI, so you never miss what makes each destination
                unique.
              </p>
            </div>

            {/* CARD */}
            <div className="bg-[#1f1f1f] rounded-3xl p-8 border border-white/10">
              <div className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center mb-5">
                👥
              </div>
              <h4 className="text-lg font-semibold mb-3">
                True Collaboration
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Invite friends or family to co-plan, edit, and enhance trips together
                in real-time.
              </p>
            </div>

            {/* LEFT CARD */}
            <div className="bg-[#1f1f1f] rounded-3xl p-8 border border-white/10">
              <div className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center mb-5">
                📅
              </div>
              <h4 className="text-lg font-semibold mb-3">
                Seamless Booking
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Book hotels, flights, and activities directly from your itinerary.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="rounded-3xl overflow-hidden bg-[#222] h-[340px]">
              <img
                src="/images/plan/train.jpg"
                alt="Couple traveling"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CARD */}
            <div className="bg-[#1f1f1f] rounded-3xl p-8 border border-white/10">
              <div className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center mb-5">
                🗺️
              </div>
              <h4 className="text-lg font-semibold mb-3">
                Multiple Planning Views
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Switch between daily plans, maps, and booking views effortlessly.
              </p>
            </div>

            {/* CARD */}
            <div className="bg-[#1f1f1f] rounded-3xl p-8 border border-white/10">
              <div className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center mb-5">
                📡
              </div>
              <h4 className="text-lg font-semibold mb-3">
                Offline Access
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Access your itinerary anytime — even without internet.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <button
              onClick={() => setOpen(true)}
              className="px-10 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition font-medium"
            >
              ✨ Plan My Itinerary
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHAT CAN Avigo DO ================= */}
      <section className="bg-[#fff7f0] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Can Avigo’s Trip Planner Do?
          </h2>

          <p className="text-center text-gray-600 mb-16 text-sm md:text-base">
            Avigo’s AI trip planner offers comprehensive features to make your trip perfect
          </p>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* BIG LEFT CARD */}
            <div className="md:row-span-2 bg-[#141414] text-white rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center mb-6 text-orange-500">
                  ✏️
                </div>

                <h4 className="text-xl font-semibold mb-3">
                  Create Custom Travel Plans
                </h4>

                <p className="text-sm text-gray-300 max-w-sm">
                  Build itineraries for holidays, trips, travel plans, workcations, or weekend getaways.
                </p>
              </div>

              <img
                src="/mobile-ui.png" // replace with your image
                alt="Mobile UI"
                className="mt-8 w-full max-w-[220px]"
              />
            </div>

            {/* CARD 2 */}
            <div
              className="
    group
    bg-white rounded-3xl p-8 border border-black/5
    transition-all duration-300
    hover:bg-[#141414]
    hover:-translate-y-1
    hover:shadow-lg
  "
            >
              <div
                className="
      h-10 w-10 rounded-full
      bg-orange-500/10
      flex items-center justify-center mb-6
      text-orange-500
      transition
      group-hover:bg-white/20
      group-hover:text-white
    "
              >
                🏨
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 group-hover:text-white">Add Hotels & Flights</h4>
              <p className="text-sm text-gray-600 group-hover:text-gray-200">
                Compare and book hotels. Add flights without leaving the platform.
              </p>
            </div>

            {/* CARD 3 */}
            <div
              className="
    group
    bg-white rounded-3xl p-8 border border-black/5
    transition-all duration-300
    hover:bg-[#141414]
    hover:-translate-y-1
    hover:shadow-lg
  "
            >
              <div
                className="
      h-10 w-10 rounded-full
      bg-orange-500/10
      flex items-center justify-center mb-6
      text-orange-500
      transition
      group-hover:bg-white/20
      group-hover:text-white
    "
              >
                🎈
              </div>

              <h4 className="font-semibold mb-2 text-gray-900 group-hover:text-white">
                Explore Attractions
              </h4>

              <p className="text-sm text-gray-600 group-hover:text-gray-200">
                Get curated lists of top sights, hidden gems, and local events.
              </p>
            </div>

            {/* CARD 4 */}
            <div
              className="
    group
    bg-white rounded-3xl p-8 border border-black/5
    transition-all duration-300
    hover:bg-[#141414]
    hover:-translate-y-1
    hover:shadow-lg
  "
            >
              <div
                className="
      h-10 w-10 rounded-full
      bg-orange-500/10
      flex items-center justify-center mb-6
      text-orange-500
      transition
      group-hover:bg-white/20
      group-hover:text-white
    "
              >👥
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 group-hover:text-white">Plan Group Trips</h4>
              <p className="text-sm text-gray-600 group-hover:text-gray-200">
                Add travellers to your itinerary and manage everyone’s preferences.
              </p>
            </div>

            {/* CARD 5 */}
            <div
              className="
    group
    bg-white rounded-3xl p-8 border border-black/5
    transition-all duration-300
    hover:bg-[#141414]
    hover:-translate-y-1
    hover:shadow-lg
  "
            >
              <div
                className="
      h-10 w-10 rounded-full
      bg-orange-500/10
      flex items-center justify-center mb-6
      text-orange-500
      transition
      group-hover:bg-white/20
      group-hover:text-white
    "
              >💼
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 group-hover:text-white">Manage Your Bookings</h4>
              <p className="text-sm text-gray-600 group-hover:text-gray-200">
                View and manage all your travel bookings in one dashboard.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button
              onClick={() => setOpen(true)}
              className="px-8 py-3 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition font-medium"
            >
              ✨ Plan My Trip
            </button>
          </div>
        </div>
      </section>
      {/* ================= WHY TRUST AVIGO ================= */}
      <section className="py-24 bg-[#FFE6E9] px-6">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Trust Avigo?
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <div className="
        group bg-white rounded-3xl p-10 border border-black/10
        transition-all duration-300
        hover:bg-[#141414]
      ">
              <div className="
          h-12 w-12 rounded-full mb-6
          bg-orange-500/10 text-orange-500
          flex items-center justify-center
          transition
          group-hover:bg-white/20 group-hover:text-white
        ">
                ⭐
              </div>

              <h4 className="text-xl font-semibold mb-3 text-black group-hover:text-white">
                Real User Reviews
              </h4>

              <p className="text-gray-600 group-hover:text-gray-200">
                See what other travellers say about their experiences and get
                honest feedback. Rated 4.8/5 by 300,000+ happy travellers.
              </p>
            </div>

            {/* Card 2 */}
            <div className="
        group bg-white rounded-3xl p-10 border border-black/10
        transition-all duration-300
        hover:bg-[#141414]
      ">
              <div className="
          h-12 w-12 rounded-full mb-6
          bg-orange-500/10 text-orange-500
          flex items-center justify-center
          transition
          group-hover:bg-white/20 group-hover:text-white
        ">
                💲
              </div>

              <h4 className="text-xl font-semibold mb-3 text-black group-hover:text-white">
                Transparent Pricing
              </h4>

              <p className="text-gray-600 group-hover:text-gray-200">
                No hidden fees, just clear, straightforward service.
                Zero booking fees.
              </p>
            </div>

            {/* Card 3 */}
            <div className="
        group bg-white rounded-3xl p-10 border border-black/10
        transition-all duration-300
        hover:bg-[#141414]
      ">
              <div className="
          h-12 w-12 rounded-full mb-6
          bg-orange-500/10 text-orange-500
          flex items-center justify-center
          transition
          group-hover:bg-white/20 group-hover:text-white
        ">
                🔒
              </div>

              <h4 className="text-xl font-semibold mb-3 text-black group-hover:text-white">
                Secure Booking
              </h4>

              <p className="text-gray-600 group-hover:text-gray-200">
                Your personal and payment information is protected with
                industry-standard security. 100% privacy.
              </p>
            </div>

            {/* Card 4 */}
            <div className="
        group bg-white rounded-3xl p-10 border border-black/10
        transition-all duration-300
        hover:bg-[#141414]
      ">
              <div className="
          h-12 w-12 rounded-full mb-6
          bg-orange-500/10 text-orange-500
          flex items-center justify-center
          transition
          group-hover:bg-white/20 group-hover:text-white
        ">
                🔒
              </div>

              <h4 className="text-xl font-semibold mb-3 text-black group-hover:text-white">
                Secure Booking
              </h4>

              <p className="text-gray-600 group-hover:text-gray-200">
                Avigo’s team constantly updates the platform based on user
                feedback and the latest travel trends.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= FEATURED DESTINATIONS ================= */}
      <section className="bg-[#fff7f0] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center mb-4">
            Featured Destinations in India
          </h2>

          <p className="text-center text-gray-600 mb-16">
            Explore India’s most loved destinations through our curated travel blogs
          </p>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                slug: "hidden-gems-of-rajasthan",
                date: "Nov 27, 2024",
                title: "Hidden Gems of Rajasthan: Beyond Palaces & Forts",
                desc:
                  "Discover stepwells, desert villages, and cultural secrets of Rajasthan.",
                img: "/rajasthan.jpg",
              },
              {
                slug: "unexplored-himachal-pradesh",
                date: "Dec 10, 2024",
                title: "Unexplored Places in Himachal Pradesh You Must Visit",
                desc:
                  "Explore peaceful valleys and mountain villages beyond Manali.",
                img: "/himachal.jpg",
              },
              {
                slug: "kerala-beyond-backwaters",
                date: "Jan 18, 2025",
                title: "Kerala Beyond Backwaters",
                desc:
                  "Hidden beaches, forest stays, and village life in Kerala.",
                img: "/kerala.jpg",
              },
              {
                slug: "offbeat-goa-travel-guide",
                date: "Feb 05, 2025",
                title: "Offbeat Goa: Quiet Beaches & Heritage",
                desc:
                  "Discover Goa away from crowds with serene beaches and cafés.",
                img: "/goa.jpg",
              },
              {
                slug: "varanasi-first-time-guide",
                date: "Mar 22, 2025",
                title: "Varanasi Travel Guide for First-Time Visitors",
                desc:
                  "From Ganga aarti to hidden alleys, experience Varanasi deeply.",
                img: "/varanasi.jpg",
              },
              {
                slug: "north-east-india-nature",
                date: "Apr 06, 2025",
                title: "Best Places in North East India for Nature Lovers",
                desc:
                  "Explore Meghalaya, Sikkim, and Arunachal Pradesh.",
                img: "/north-east.jpg",
              },
            ].map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button className="px-8 py-3 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition font-medium">
              All Blogs →
            </button>
          </div>
        </div>
      </section>
      {/* ================= READY TO PLAN CTA ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#15151a] rounded-[40px] overflow-hidden px-12 py-16 flex flex-col lg:flex-row items-center justify-between">

            {/* Left Content */}
            <div className="lg:w-1/2 text-white z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready To Plan Your Perfect Trip?
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Why spend hours searching and stressing when you can let Avigo’s AI
                trip planner do the work? With personalised recommendations,
                seamless booking, and features designed for real travellers,
                Avigo helps you make the most of every journey—whether travelling
                with family, with your partner, friends, or in a group.
              </p>

              <p className="text-gray-400 mb-8">
                Create your perfect holiday – quick, easy, and totally free
              </p>

              <button className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-full font-medium">
                Plan My Trip
                <span className="text-xl">→</span>
              </button>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-end relative z-10">
              <img
                src="/phone-mockup.png"   // replace with your image path
                alt="Trip Planner App"
                className="max-w-[320px] lg:max-w-[380px]"
              />
            </div>

            {/* Decorative Background Shape */}
            <div className="absolute right-0 bottom-0 opacity-10">
              <svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                fill="none"
              >
                <path
                  d="M50 350C150 250 250 150 350 50"
                  stroke="white"
                  strokeWidth="40"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* ================= FAQ SECTION ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-12">
            Frequently Asked Questions
          </h2>

          {/* FAQ List */}
          <div className="space-y-6">
            {[
              {
                q: "Is Avigo Trip Planner really free?",
                a: "Yes. Avigo Trip Planner is completely free to use with no hidden charges or booking fees.",
              },
              {
                q: "Do I need to sign up?",
                a: "You can explore and plan trips without signing up. Creating an account helps you save and manage trips.",
              },
              {
                q: "How does the AI create personalised itineraries?",
                a: "The AI analyses your travel preferences, dates, budget, and interests to generate a custom itinerary.",
              },
              {
                q: "Can I modify the AI-generated itineraries?",
                a: "Absolutely. You can edit, add, or remove activities anytime to suit your travel style.",
              },
            ].map((item, index) => (
              <FaqItem key={index} question={item.q} answer={item.a} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button className="px-8 py-3 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition font-medium">
              View All
            </button>
          </div>
        </div>
      </section>



      {/* ================= MODAL ================= */}
      {open && <PlanFormModal onClose={() => setOpen(false)} />}
    </div>
  );
}
function BlogCard({ blog }: any) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blogs/${blog.slug}`)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition cursor-pointer flex"
    >
      {/* Image */}
      <div className="w-1/3 relative">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between w-2/3 relative">
        <div>
          <p className="text-xs text-gray-400 mb-2">{blog.date}</p>
          <h4 className="font-semibold mb-2 leading-snug group-hover:text-orange-500 transition">
            {blog.title}
          </h4>
          <p className="text-sm text-gray-600 line-clamp-2">
            {blog.desc}
          </p>
        </div>

        {/* Arrow */}
        <div className="mt-4 flex items-center text-orange-500 font-medium transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          Read Blog →
        </div>
      </div>
    </div>
  );
}

