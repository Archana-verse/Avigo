// import React, { useEffect, useState } from "react";
// import { Search } from "lucide-react";

// import DiscoverFavourites from "../components/home/DiscoverFavourites";

// const searchTexts = [
//   "Holiday Packages",
//   "Udaipur",
//   "Goa",
//   "Kerala",
//   "Manali",
//   "Jaipur",
//   "Weekend trip ideas",
// ];

// const Home = () => {
//   const [textIndex, setTextIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTextIndex((prev) => (prev + 1) % searchTexts.length);
//     }, 2200);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">

//       {/* ================= HERO ================= */}
//       <section className="relative min-h-[calc(100vh-84px)] w-full bg-white">


//         {/* VIDEO */}
//         <video
//           className="absolute top-0 left-0 w-full h-[88%] object-cover"
//           src="/videos/hero-india-travel.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//         />

//         {/* OVERLAY */}
//         <div className="absolute top-0 left-0 w-full h-[88%] bg-gradient-to-b from-black/45 via-black/30 to-black/45" />

//         {/* HERO CONTENT */}
//         <div className="relative z-10 flex h-full flex-col items-center justify-start pt-[18vh] px-6 text-center text-white">

//           <h1 className="text-[52px] md:text-[60px] font-semibold tracking-[0.35em]">
//             EXPERIENCES
//           </h1>

//           <p className="mt-3 text-xl md:text-2xl font-medium">
//             made just for <span className="font-semibold">YOU</span>
//           </p>

//           {/* SEARCH BAR */}
//           <div className="relative mt-10 flex w-full max-w-[600px] items-center rounded-full bg-white px-5 py-2.5 shadow-xl">

//             {/* Fake placeholder */}
//             <div className="pointer-events-none absolute left-5 flex items-center gap-2 text-[15px]">
//               <span className="text-gray-400">Search</span>
//               <span key={textIndex} className="text-black animate-bounce-fade">
//                 {searchTexts[textIndex]}
//               </span>
//             </div>

//             <input
//               type="text"
//               className="relative z-10 w-full bg-transparent text-[15px] text-black outline-none"
//             />

//             <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-black text-white cursor-pointer hover:bg-gray-800">
//               <Search size={17} />
//             </div>
//           </div>
//         </div>

//         {/* FLOATING WHITE CARD */}
//         <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 z-20">
//           <div className="rounded-2xl bg-white px-10 py-5 shadow-xl">
//             <div className="flex gap-14 text-sm font-medium text-gray-800">

//               <div className="group flex flex-col items-center gap-2 cursor-pointer">
//                 <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-200 group-hover:bg-orange-100">
//                   <img src="/uploads/HolidayPackages.png" className="h-5 w-5" />
//                 </div>
//                 <span className="group-hover:text-orange-600">
//                   Holiday Packages
//                 </span>
//               </div>

//               <div className="group flex flex-col items-center gap-2 cursor-pointer">
//                 <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-200 group-hover:bg-orange-100">
//                   <img src="/uploads/Sightseeing.png" className="h-5 w-5" />
//                 </div>
//                 <span className="group-hover:text-orange-600">
//                   Sightseeing
//                 </span>
//               </div>

//               <div className="group flex flex-col items-center gap-2 cursor-pointer">
//                 <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-200 group-hover:bg-orange-100">
//                   <img src="/uploads/AITripPlanner.png" className="h-5 w-5" />
//                 </div>
//                 <span className="group-hover:text-orange-600">
//                   AI Trip Planner
//                 </span>
//               </div>

//             </div>
//           </div>
//         </div>

//       </section>
//       {/* ================= END HERO ================= */}

//       {/* WHITE SECTION */}
//       <DiscoverFavourites />

//     </div>
//   );
// };

// export default Home;




import HeroSection from "@/components/home/HeroSection";
import QuickActions from "@/components/home/QuickActions";
import PopularIndia from "@/components/home/PopularIndia";
import TripPlannerShowcase from "@/components/home/TripPlannerShowcase";
import CuratedTrips from "@/components/home/CuratedTrips";
import DiscoverIndiaExperiences from "@/components/home/DiscoverIndiaExperiences.tsx";
import TripSupportRecommendations from "@/components/home/TripSupportRecommendations.jsx";
import HowAvigoWorks from "@/components/home/HowAvigoWorks";  
import TestimonialsSection from"@/components/home/TestimonialsSection";
import Footer from "@/components/Footer"; 




const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO + SEARCH */}
      <HeroSection />

      {/* FLOATING QUICK ACTIONS */}
      <QuickActions />

      {/* INDIA DESTINATIONS */}
      <PopularIndia />
      <TripPlannerShowcase />
      <CuratedTrips />  
      <DiscoverIndiaExperiences />
      <TripSupportRecommendations />
      <HowAvigoWorks />
      <TestimonialsSection />
      <Footer />
      
   

    </div>
  );
};

export default Home;

