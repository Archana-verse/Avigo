// const GoaExplore = () => {
//   return (
//     <div className="max-w-[1300px] mx-auto py-20">
//       <h2 className="text-[40px] font-bold mb-6">Explore Goa</h2>
//       <p className="opacity-70">Coming soon...</p>
//     </div>
//   );
// };
// export default GoaExplore;
// import React, { useEffect, useState } from "react";

// const images = [
//   "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769619648/Goa_Hero_2_zv16g0.png",
//   "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769610625/Goa_Hero_1_lc3uaq.png",
//   "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769619648/Goa_Hero_3_icwf86.png",
// ];

// const GoaHero = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((i) => (i + 1) % images.length);
//     }, 2500); // switch every 2.5s

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-[420px] rounded-[28px] overflow-hidden mt-6">

//       {/* IMAGES */}
//       <div className="absolute inset-0">
//         {images.map((img, i) => (
//           <img
//             key={i}
//             src={img}
//             className={`
//               w-full h-full object-cover absolute inset-0 
//               transition-opacity duration-[1200ms] ease-out
//               ${i === index ? "opacity-100" : "opacity-0"}
//             `}
//           />
//         ))}
//       </div>

//       {/* DARK GRADIENT */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

//       {/* TEXT CONTENT */}
//       <div className="absolute bottom-8 left-8 text-white z-10 max-w-[480px]">
//         <h1 className="text-[42px] font-semibold leading-tight">
//           Plan Your Goa Trip
//         </h1>
//         <p className="text-[18px] opacity-90 mb-4">
//           India’s Beach Capital
//         </p>

//         <button className="px-6 py-3 rounded-full bg-white/95 text-black font-medium shadow hover:bg-white transition flex items-center gap-2">
//           Book Now <span>→</span>
//         </button>
//       </div>

//       {/* DOT INDICATORS */}
//       <div className="absolute bottom-4 right-6 flex gap-2 z-10">
//         {images.map((_, i) => (
//           <div
//             key={i}
//             className={`w-2.5 h-2.5 rounded-full transition-all ${
//               i === index ? "bg-white" : "bg-white/40"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GoaHero;
// import { Check, MapPin } from "lucide-react";

// const goaPackages = [
//   {
//     title: "Goa Beach Escape: Sun, Shacks & Nightlife",
//     duration: "4N/5D",
//     hotelTag: "3 ⭐ Hotel",
//     location: "4N Goa",
//     price: "₹32,499",
//     image: "https://res.cloudinary.com/placeholder/image/upload/v123/goa_pkg_1.jpg",
//     features: ["1 Hotel", "Selected Meals", "Beach Access", "2 Transfers"],
//   },
//   {
//     title: "Luxury Goa Retreat: Spa • Beaches • Cruises",
//     duration: "5N/6D",
//     hotelTag: "5 ⭐ Luxury",
//     location: "5N Goa",
//     price: "₹57,999",
//     image: "https://res.cloudinary.com/placeholder/image/upload/v123/goa_pkg_2.jpg",
//     features: ["Luxury Hotel", "Spa Access", "Cruise", "Private Transfers"],
//   },
//   {
//     title: "Goa Churches & Heritage Explorer",
//     duration: "3N/4D",
//     hotelTag: "Heritage Stay",
//     location: "3N Goa",
//     price: "₹26,999",
//     image: "https://res.cloudinary.com/placeholder/image/upload/v123/goa_pkg_3.jpg",
//     features: ["Heritage Stay", "Guided Tours", "Breakfast", "Local Transfers"],
//   },
//   {
//     title: "Goa Family Getaway: Beaches & Activities",
//     duration: "4N/5D",
//     hotelTag: "4 ⭐ Resort",
//     location: "4N Goa",
//     price: "₹38,999",
//     image: "https://res.cloudinary.com/placeholder/image/upload/v123/goa_pkg_4.jpg",
//     features: ["Resort Stay", "Kids Activities", "Meals", "2 Transfers"],
//   },
// ];

// const GoaHolidays = () => {
//   return (
//     <section className="w-full bg-[#fff1e6] py-24">
//       <div className="max-w-[1200px] mx-auto px-6">

//         <h2 className="text-[36px] md:text-[44px] font-extrabold text-center mb-14 text-black">
//           Holiday Packages in Goa
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {goaPackages.map((trip, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] h-[520x]"

//             >
//               <div className="relative h-[220px]">
//                 <img
//                   src={trip.image}
//                   alt={trip.title}
//                   className="w-full h-full object-cover"
//                 />
// x``
//                 <span className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full shadow-sm font-medium">
//                   {trip.hotelTag}
//                 </span>

//                 <span className="absolute top-3 right-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
//                   {trip.duration}
//                 </span>
//               </div>

//               <div className="p-4">
//                 <h3 className="text-[15px] font-semibold mb-2 line-clamp-2 min-h-[40px]">
//                   {trip.title}
//                 </h3>

//                 <div className="flex items-center gap-1 text-xs text-gray-600 mb-3">
//                   <MapPin size={14} />
//                   {trip.location}
//                 </div>

//                 <div className="border-t border-dashed my-3" />

//                 <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-700 mb-4">
//                   {trip.features.map((f, idx) => (
//                     <div key={idx} className="flex items-center gap-1.5">
//                       <Check size={14} className="text-gray-400" />
//                       {f}
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex items-end justify-between">
//                   <div>
//                     <p className="text-xs text-gray-500">From</p>
//                     <p className="text-lg font-semibold">
//                       {trip.price}
//                       <span className="text-xs text-gray-500"> / Person</span>
//                     </p>
//                   </div>

//                   <div className="w-8 h-8 rounded-full border border-orange-500 flex items-center justify-center">
//                     <img
//                       src="/uploads/logo.png"
//                       className="w-4 h-4"
//                       alt="logo"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex gap-3 mt-4">
//                   <button className="flex-1 py-2 text-sm rounded-xl border border-gray-300 text-gray-600 hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50 transition">
//                     Preview
//                   </button>

//                   <button className="flex-1 py-2 text-sm rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition">
//                     Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-14">
//           <button className="inline-flex items-center gap-2 rounded-full border border-orange-500 px-6 py-3 text-sm font-medium text-orange-600 hover:bg-orange-500 hover:text-white transition">
//             All Packages →
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default GoaHolidays;
// import React from "react";

// const GoaOffers = () => {
//   const offers = [
//     {
//       id: 1,
//       title: "Kids Go FREE",
//       desc:
//         "Up to 2 kids enjoy complimentary stays, meals, and curated holiday experiences.",
//       image:
//         "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769609808/Kids_Go_FREE_z4dh6t.png",
//       bg: "bg-[#EAF3FF]",
//       border: "border-[#B9D6FF]",
//     },
//     {
//       id: 2,
//       title: "Partner Goes FREE",
//       desc:
//         "Book your trip and your partner’s stay, meals, and activities are fully complimentary.",
//       image:
//         "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769609808/Partner_Goes_FREE_rxcweq.png",
//       bg: "bg-[#FFF3E9]",
//       border: "border-[#FFD7BA]",
//     },
//   ];

//   return (
//     <div className="w-full flex flex-col">

//       {/* HEADLINE */}
//       <div className="pb-10 text-center">
//         <h2 className="inline-block text-[clamp(26px,3.5vw,38px)] font-semibold leading-tight tracking-tight">
//           Big adventures,<br />
//           spectacular savings in Goa
//         </h2>
//       </div>

//       {/* OFFERS CARDS */}
//       <div
//         className="
//           flex flex-col md:flex-row gap-6 
//           md:gap-4 
//           overflow-x-auto md:overflow-visible 
//           no-scrollbar
//           snap-x snap-mandatory
//         "
//       >
//         {offers.map((offer) => (
//           <div
//             key={offer.id}
//             className={`
//               snap-start md:snap-none
//               flex md:flex-row flex-col
//               rounded-[28px]
//               overflow-hidden
//               ${offer.bg} border ${offer.border}
//               min-w-[290px] md:min-w-0
//               md:w-1/2
//               shadow-[0_1px_3px_rgba(0,0,0,0.06)]
//             `}
//           >
//             {/* IMAGE */}
//             <div className="w-full md:w-[38%] h-[170px] md:h-auto overflow-hidden">
//               <img
//                 src={offer.image}
//                 alt={offer.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* TEXT */}
//             <div className="flex flex-col justify-center p-6 space-y-2">
//               <h3 className="text-[20px] font-semibold">{offer.title}</h3>
//               <p className="text-[15px] text-gray-700 leading-relaxed">
//                 {offer.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GoaOffers;
// import GoaHero from "./GoaHero";
// import GoaTabs from "./GoaTabs";

// import GoaOffers from "./GoaOffers";
// import GoaHolidays from "./GoaHolidays";
// import GoaThings from "./GoaThings";
// import GoaSupport from "./GoaSupport";
// import GoaExplore from "./GoaExplore";

// const GoaPage = () => {
//   return (
//     <div className="w-full min-h-screen bg-white overflow-x-hidden animate-fade-in">

//       {/* HERO + HERO TABS */}
//       <div className="w-full flex justify-center bg-white">
//         <div className="w-[1200px] px-6 pb-4" id="goa-hero-anchor">
//           <GoaHero />
//           <div className="pt-4">
//             <GoaTabs variant="hero" />
//           </div>
//         </div>
//       </div>

//       {/* STICKY TABS */}
//       <GoaTabs variant="sticky" />

//       {/* CONTENT ABOVE HOLIDAYS */}
//       <div className="w-full flex justify-center bg-[#fafafa]">
//         <div className="w-[1200px] px-6 pt-20 pb-32 space-y-36">
//           <section id="offers">
//             <GoaOffers />
//           </section>
//         </div>
//       </div>

//       {/* FULL WIDTH HOLIDAYS */}
//       <section id="holidays">
//         <GoaHolidays />
//       </section>

//       {/* CONTENT BELOW HOLIDAYS */}
//       <div className="w-full flex justify-center bg-[#fafafa]">
//         <div className="w-[1200px] px-6 pt-20 pb-32 space-y-36">
//           <section id="things">
//             <GoaThings />
//           </section>

//           <section id="support">
//             <GoaSupport />
//           </section>

//           <section id="explore">
//             <GoaExplore />
//           </section>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default GoaPage;
// const GoaSupport = () => {
//   return (
//     <div className="max-w-[1300px] mx-auto py-20">
//       <h2 className="text-[40px] font-bold mb-6">Travel Support in Goa</h2>
//       <p className="opacity-70">Coming soon...</p>
//     </div>
//   );
// };
// export default GoaSupport;



// // import { useEffect, useState } from "react";

// // const tabs = [
// //   { id: "offers", label: "Offers" },
// //   { id: "holidays", label: "Holidays" },
// //   { id: "things", label: "Things to do" },
// //   { id: "support", label: "Travel Support" },
// //   { id: "explore", label: "Explore Goa" },
// // ];

// // const NAV_HEIGHT = 72;

// // const GoaTabs = ({ variant }: { variant: "hero" | "sticky" }) => {
// //   const [active, setActive] = useState("offers");
// //   const [hovered, setHovered] = useState<string | null>(null);
// //   const [showSticky, setShowSticky] = useState(false);

// //   const scrollTo = (id: string) => {
// //     const el = document.getElementById(id);
// //     if (!el) return;
// //     const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
// //     window.scrollTo({ top: y, behavior: "smooth" });
// //     setActive(id);
// //   };

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         const visible = entries
// //           .filter(e => e.isIntersecting)
// //           .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
// //         if (visible) setActive(visible.target.id);
// //       },
// //       { threshold: [0.2, 0.4, 0.6], rootMargin: `-${NAV_HEIGHT}px 0px 0px 0px` }
// //     );

// //     tabs.forEach(t => {
// //       const sec = document.getElementById(t.id);
// //       if (sec) observer.observe(sec);
// //     });

// //     return () => observer.disconnect();
// //   }, []);

// //   useEffect(() => {
// //     if (variant === "sticky") {
// //       const onScroll = () => {
// //         const heroBottom = document
// //           .getElementById("goa-hero-anchor")
// //           ?.getBoundingClientRect().bottom;

// //         setShowSticky(heroBottom !== undefined && heroBottom <= NAV_HEIGHT);
// //       };

// //       window.addEventListener("scroll", onScroll);
// //       return () => window.removeEventListener("scroll", onScroll);
// //     }
// //   }, [variant]);

// //   const isTabActive = (id: string) => hovered === id || active === id;

// //   const renderTabs = () => (
// //     <>
// //       <div className="hidden sm:flex justify-between w-full gap-2">
// //         {tabs.map((t) => (
// //           <button
// //             key={t.id}
// //             onClick={() => scrollTo(t.id)}
// //             onMouseEnter={() => setHovered(t.id)}
// //             onMouseLeave={() => setHovered(null)}
// //             className={`
// //               flex-1 text-center px-5 py-3 rounded-full text-[15px] font-medium transition-all
// //               ${isTabActive(t.id)
// //                 ? "bg-black text-white border border-black"
// //                 : "bg-white text-black border border-[#dedede] hover:bg-black hover:text-white"
// //               }
// //             `}
// //           >
// //             {t.label}
// //           </button>
// //         ))}
// //       </div>

// //       <div className="flex sm:hidden gap-3 overflow-x-auto no-scrollbar">
// //         {tabs.map((t) => (
// //           <button
// //             key={t.id}
// //             onClick={() => scrollTo(t.id)}
// //             onMouseEnter={() => setHovered(t.id)}
// //             onMouseLeave={() => setHovered(null)}
// //             className={`
// //               whitespace-nowrap px-5 py-2 rounded-full text-sm border transition-all
// //               ${isTabActive(t.id)
// //                 ? "bg-black text-white border-black"
// //                 : "bg-white text-black border-[#dedede]"
// //               }
// //             `}
// //           >
// //             {t.label}
// //           </button>
// //         ))}
// //       </div>
// //     </>
// //   );

// //   if (variant === "hero") {
// //     return (
// //       <div className="pt-5">
// //         {renderTabs()}
// //       </div>
// //     );
// //   }

// //   if (variant === "sticky") {
// //     return showSticky ? (
// //       <div className="sticky top-[72px] z-50 bg-white border-b py-3">
// //         <div className="w-[1200px] mx-auto px-6">
// //           {renderTabs()}
// //         </div>
// //       </div>
// //     ) : null;
// //   }

// //   return null;
// // };

// // export default GoaTabs;













// import { useEffect, useState } from "react";

// const tabs = [
//   { id: "offers", label: "Offers" },
//   { id: "holidays", label: "Holidays" },
//   { id: "things", label: "Things to do" },
//   { id: "support", label: "Travel Support" },
//   { id: "explore", label: "Explore Goa" },
// ];

// const NAV_HEIGHT = 84;

// const GoaTabs = ({ variant }: { variant: "hero" | "sticky" }) => {
//   const [active, setActive] = useState("offers");
//   const [hovered, setHovered] = useState<string | null>(null);
//   const [showSticky, setShowSticky] = useState(false);

//   const scrollTo = (id: string) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
//     window.scrollTo({ top: y, behavior: "smooth" });
//     setActive(id);
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visible = entries
//           .filter(e => e.isIntersecting)
//           .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
//         if (visible) setActive(visible.target.id);
//       },
//       { threshold: 0.4, rootMargin: `-${NAV_HEIGHT}px 0px 0px 0px` }
//     );

//     tabs.forEach(t => {
//       const sec = document.getElementById(t.id);
//       if (sec) observer.observe(sec);
//     });

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (variant === "sticky") {
//       const onScroll = () => {
//         const heroBottom = document
//           .getElementById("goa-hero-anchor")
//           ?.getBoundingClientRect().bottom;

//         setShowSticky(heroBottom !== undefined && heroBottom <= NAV_HEIGHT);
//       };
//       window.addEventListener("scroll", onScroll);
//       return () => window.removeEventListener("scroll", onScroll);
//     }
//   }, [variant]);

//   const isActive = (id: string) => hovered === id || active === id;

//   const renderTabs = () => (
//     <div className="flex w-full justify-between gap-3">
//       {tabs.map((t) => (
//         <button
//           key={t.id}
//           onClick={() => scrollTo(t.id)}
//           onMouseEnter={() => setHovered(t.id)}
//           onMouseLeave={() => setHovered(null)}
//           className={`
//             flex-1 select-none text-center rounded-2xl border
//             h-[48px] px-6 flex items-center justify-center
//             text-[15px] font-semibold tracking-tight transition-all duration-200

//             ${isActive(t.id)
//               ? "bg-black text-white border-black shadow-sm"
//               : "bg-[#fafafa] text-black border-[#e5e5e5] hover:bg-black hover:text-white hover:border-black"
//             }
//           `}
//         >
//           {t.label}
//         </button>
//       ))}
//     </div>
//   );

//   if (variant === "hero") {
//     return (
//       <div className="pt-4">
//         {renderTabs()}
//       </div>
//     );
//   }

//   if (variant === "sticky") {
//     return showSticky ? (
//       <div className="sticky top-[84px] z-[90] bg-white border-b py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
//         <div className="w-[1200px] mx-auto px-6">
//           {renderTabs()}
//         </div>
//       </div>
//     ) : null;
//   }

//   return null;
// };

// export default GoaTabs;


// const GoaThings = () => {
//   return (
//     <div className="max-w-[1300px] mx-auto py-20">
//       <h2 className="text-[40px] font-bold mb-6">Things to Do in Goa</h2>
//       <p className="opacity-70">Coming soon...</p>
//     </div>
//   );
// };
// export default GoaThings;























import React, { useEffect, useState } from "react";
import { Check, MapPin } from "lucide-react";

/* ================= HERO ================= */

const images = [
  "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769619648/Goa_Hero_2_zv16g0.png",
  "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769610625/Goa_Hero_1_lc3uaq.png",
  "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769619648/Goa_Hero_3_icwf86.png",
];

const GoaHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((p) => (p + 1) % images.length);
    }, 2500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative h-[420px] rounded-[28px] overflow-hidden mt-6">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="absolute bottom-8 left-8 text-white z-10">
        <h1 className="text-[42px] font-semibold">Plan Your Goa Trip</h1>
        <p className="opacity-90 mb-4">India’s Beach Capital</p>
        <button className="px-6 py-3 rounded-full bg-white text-black">
          Book Now →
        </button>
      </div>
    </div>
  );
};

/* ================= TABS ================= */

const tabs = [
  { id: "offers", label: "Offers" },
  { id: "holidays", label: "Holidays" },
  { id: "things", label: "Things to do" },
  { id: "support", label: "Travel Support" },
  { id: "explore", label: "Explore Goa" },
];

const NAV_HEIGHT = 84;

const GoaTabs = ({ variant }: { variant: "hero" | "sticky" }) => {
  const [active, setActive] = useState("offers");
  const [showSticky, setShowSticky] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    if (variant === "sticky") {
      const onScroll = () => {
        const heroBottom = document
          .getElementById("goa-hero-anchor")
          ?.getBoundingClientRect().bottom;

        setShowSticky(heroBottom !== undefined && heroBottom <= NAV_HEIGHT);
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [variant]);

  const renderTabs = () => (
    <div className="flex gap-3">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => scrollTo(t.id)}
          className={`flex-1 h-[48px] rounded-xl border ${
            active === t.id ? "bg-black text-white" : "bg-[#fafafa]"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );

  if (variant === "hero") return <div className="pt-4">{renderTabs()}</div>;

  if (variant === "sticky")
    return showSticky ? (
      <div className="sticky top-[84px] bg-white border-b py-3 z-50">
        <div className="w-[1200px] mx-auto px-6">{renderTabs()}</div>
      </div>
    ) : null;

  return null;
};

/* ================= OFFERS ================= */

const GoaOffers = () => {
  const offers = [
    {
      title: "Kids Go FREE",
      desc: "Up to 2 kids enjoy complimentary stays & meals.",
      image:
        "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769609808/Kids_Go_FREE_z4dh6t.png",
    },
    {
      title: "Partner Goes FREE",
      desc: "Book your trip and partner stays free.",
      image:
        "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769609808/Partner_Goes_FREE_rxcweq.png",
    },
  ];

  return (
    <div className="space-y-6">
      {offers.map((o, i) => (
        <div key={i} className="flex rounded-3xl overflow-hidden border">
          <img src={o.image} className="w-[40%] object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold">{o.title}</h3>
            <p className="text-gray-600">{o.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ================= HOLIDAYS ================= */

const goaPackages = [
  {
    title: "Goa Beach Escape",
    duration: "4N/5D",
    location: "4N Goa",
    price: "₹32,499",
    image:
      "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769619648/Goa_Hero_3_icwf86.png",
    features: ["Hotel", "Meals", "Beach", "Transfers"],
  },
];

const GoaHolidays = () => {
  return (
    <section className="bg-[#fff1e6] py-24">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 gap-8">
        {goaPackages.map((trip, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden">
            <img src={trip.image} className="h-[220px] w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{trip.title}</h3>
              <div className="flex items-center text-xs text-gray-500">
                <MapPin size={14} /> {trip.location}
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                {trip.features.map((f, idx) => (
                  <div key={idx} className="flex gap-1">
                    <Check size={14} /> {f}
                  </div>
                ))}
              </div>

              <p className="mt-4 font-semibold">{trip.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ================= PLACEHOLDER SECTIONS ================= */

const GoaThings = () => (
  <div className="py-20 text-3xl font-bold">Things to Do in Goa</div>
);
const GoaSupport = () => (
  <div className="py-20 text-3xl font-bold">Travel Support in Goa</div>
);
const GoaExplore = () => (
  <div className="py-20 text-3xl font-bold">Explore Goa</div>
);

/* ================= MAIN PAGE ================= */

const GoaPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-[1200px] mx-auto px-6" id="goa-hero-anchor">
        <GoaHero />
        <GoaTabs variant="hero" />
      </div>

      <GoaTabs variant="sticky" />

      <div className="w-[1200px] mx-auto px-6 space-y-32 py-20">
        <section id="offers">
          <GoaOffers />
        </section>

        <section id="holidays">
          <GoaHolidays />
        </section>

        <section id="things">
          <GoaThings />
        </section>

        <section id="support">
          <GoaSupport />
        </section>

        <section id="explore">
          <GoaExplore />
        </section>
      </div>
    </div>
  );
};

export default GoaPage;