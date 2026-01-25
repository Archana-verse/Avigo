// import React, { useEffect, useState } from "react";

// interface Props {
//   onClose: () => void;
//   // when provided by parent, this controls the exit animation state
//   closing?: boolean;
// }

// type SectionKey = "popular" | "month" | "north" | "west" | "south";

// const img = (name: string) =>
//   `https://via.placeholder.com/400x280?text=${encodeURIComponent(name)}`;

// /* ---------- DATA ---------- */

// const GRID_12 = (cities: string[]) =>
//   cities.slice(0, 12).map((c) => ({ title: c, img: img(c) }));

// const REGION_GRID: Record<
//   Exclude<SectionKey, "month">,
//   { title: string; img: string }[]
// > = {
//   popular: GRID_12([
//     "Jaipur","Delhi","Mumbai","Goa","Udaipur","Manali",
//     "Kerala","Ooty","Rishikesh","Agra","Varanasi","Munnar",
//   ]),
//   north: GRID_12([
//     "Delhi","Jaipur","Manali","Agra","Rishikesh","Varanasi",
//     "Shimla","Amritsar","Nainital","Mussoorie","Haridwar","Kasol",
//   ]),
//   west: GRID_12([
//     "Goa","Udaipur","Mumbai","Jaisalmer","Mount Abu","Ajmer",
//     "Alibaug","Lonavala","Panchgani","Daman","Mandvi","Saputara",
//   ]),
//   south: GRID_12([
//     "Kerala","Ooty","Coorg","Munnar","Wayanad","Chennai",
//     "Bangalore","Mysore","Varkala","Pondicherry","Kodaikanal","Coonoor",
//   ]),
// };

// const MONTHS = [
//   ["January","Jaipur · Udaipur · Goa"],
//   ["February","Delhi · Agra · Varanasi"],
//   ["March","Manali · Rishikesh · Kasol"],
//   ["April","Ooty · Munnar · Coorg"],
//   ["May","Shimla · Mussoorie · Nainital"],
//   ["June","Ladakh · Spiti · Tawang"],
//   ["July","Lonavala · Mahabaleshwar · Wayanad"],
//   ["August","Udaipur · Mount Abu · Jaipur"],
//   ["September","Goa · Alibaug · Diu"],
//   ["October","Jaisalmer · Jodhpur · Pushkar"],
//   ["November","Varanasi · Haridwar · Rameshwaram"],
//   ["December","Manali · Gulmarg · Auli"],
// ];

// /* ---------- COMPONENT ---------- */

// const ExploreCitiesMenu: React.FC<Props> = ({ onClose, closing: closingProp }) => {
//   const [active, setActive] = useState<SectionKey>("popular");
//   const [closing, setClosing] = useState(false);

//   useEffect(() => {
//     if (typeof closingProp !== "undefined") {
//       setClosing(closingProp);
//     }
//   }, [closingProp]);

//   useEffect(() => {
//     const esc = (e: KeyboardEvent) => e.key === "Escape" && setClosing(true);
//     window.addEventListener("keydown", esc);
//     return () => window.removeEventListener("keydown", esc);
//   }, []);

//   return (
//     <>
//       {/* BACKDROP */}
//       <div
//         className="fixed inset-0 top-[84px] z-30 bg-black/30 backdrop-blur-[2px] animate-backdrop"
//         onClick={() => setClosing(true)}
//       />

//       {/* PANEL */}
//       <div
//         className={`fixed top-[84px] left-0 right-0 z-40 bg-white shadow-2xl ${
//           closing ? "animate-explore-out" : "animate-explore-in"
//         }`}
//       >
//         <div className="mx-auto flex max-w-[1440px] px-10 pt-9 pb-5">

//           {/* LEFT */}
//           <div className="w-[260px] border-r pr-6">
//             <p className="mb-6 text-xs font-semibold uppercase text-gray-400">
//               Explore
//             </p>

//             {["Cities","Experiences","Holiday Packages"].map((item) => (
//               <div
//                 key={item}
//                 className="mb-4 cursor-pointer text-[16px] text-gray-600 hover:text-black hover:font-semibold transition"
//               >
//                 {item}
//               </div>
//             ))}
//           </div>

//           {/* MIDDLE */}
//           <div className="w-[380px] px-8 space-y-3">
//             {[
//               { key:"popular", title:"Popular destinations", desc:"See where Indians are travelling more often" },
//               { key:"month", title:"Top cities by month", desc:"Popular cities you want to visit for every month" },
//               { key:"north", title:"North India", desc:"Delhi · Jaipur · Manali" },
//               { key:"west", title:"West India", desc:"Goa · Udaipur · Mumbai" },
//               { key:"south", title:"South India", desc:"Kerala · Coorg · Ooty" },
//             ].map((item) => (
//               <div
//                 key={item.key}
//                 onMouseEnter={() => setActive(item.key as SectionKey)}
//                 className={`rounded-xl px-4 py-3 cursor-pointer transition
//                   ${active === item.key ? "bg-orange-50" : "hover:bg-orange-50"}`}
//               >
//                 <h3
//                   className={`text-[16.5px] font-semibold
//                     ${active === item.key ? "text-orange-600" : "text-black"}`}
//                 >
//                   {item.title}
//                 </h3>
//                 <p className="text-[14px] text-gray-600 leading-tight">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}

//             <div className="pt-2 text-sm font-medium cursor-pointer hover:underline">
//               View All →
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="flex-1 pl-6">
//             {active === "month" ? (
//               <div className="grid grid-cols-2 gap-x-20 gap-y-5">
//                 {MONTHS.map(([m, c]) => (
//                   <div key={m}>
//                     <h4 className="text-[19px] font-semibold mb-1">{m}</h4>
//                     <p className="text-[15px] text-gray-600 leading-snug">{c}</p>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="grid grid-cols-4 gap-x-7 gap-y-6">
//                 {REGION_GRID[active as Exclude<SectionKey,"month">].map((c) => (
//                   <button
//                     key={c.title}
//                     type="button"
//                     className="text-center"
//                     onClick={() => console.log("City clicked:", c.title)}
//                   >
//                     <div className="h-[124px] rounded-2xl overflow-hidden bg-gray-200">
//                       <img
//                         src={c.img}
//                         alt={c.title}
//                         className="h-full w-full object-cover"
//                       />
//                     </div>
//                     <p className="mt-2 text-[13.5px] font-medium transition hover:text-orange-600">
//                       {c.title}
//                     </p>
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* breathable bottom */}
//         <div className="h-14" />
//       </div>
//     </>
//   );
// };

// export default ExploreCitiesMenu;



import React, { useEffect, useState } from "react";
import { CITY_IMAGES } from "@/data/cities"; // adjust import path if different

interface Props {
  onClose: () => void;
  closing?: boolean;
}

type SectionKey = "popular" | "month" | "north" | "west" | "south";

/* ---------- DATA ---------- */

const GRID_12 = (cities: string[]) =>
  cities.slice(0, 12).map((c) => ({
    title: c,
    img: CITY_IMAGES[c],
  }));

const REGION_GRID: Record<
  Exclude<SectionKey, "month">,
  { title: string; img: string }[]
> = {
  popular: GRID_12([
    "Jaipur","Delhi","Mumbai","Goa","Udaipur","Manali",
    "Kerala","Ooty","Rishikesh","Agra","Varanasi","Munnar",
  ]),
  north: GRID_12([
    "Delhi","Jaipur","Manali","Agra","Rishikesh","Varanasi",
    "Shimla","Amritsar","Nainital","Mussoorie","Haridwar","Kasol",
  ]),
  west: GRID_12([
    "Goa","Udaipur","Mumbai","Jaisalmer","Mount Abu","Ajmer",
    "Alibaug","Lonavala","Panchgani","Daman","Mandvi","Saputara",
  ]),
  south: GRID_12([
    "Kerala","Ooty","Coorg","Munnar","Wayanad","Chennai",
    "Bangalore","Mysore","Varkala","Pondicherry","Kodaikanal","Coonoor",
  ]),
};

const MONTHS = [
  ["January","Jaipur · Udaipur · Goa"],
  ["February","Delhi · Agra · Varanasi"],
  ["March","Manali · Rishikesh · Kasol"],
  ["April","Ooty · Munnar · Coorg"],
  ["May","Shimla · Mussoorie · Nainital"],
  ["June","Ladakh · Spiti · Tawang"],
  ["July","Lonavala · Mahabaleshwar · Wayanad"],
  ["August","Udaipur · Mount Abu · Jaipur"],
  ["September","Goa · Alibaug · Diu"],
  ["October","Jaisalmer · Jodhpur · Pushkar"],
  ["November","Varanasi · Haridwar · Rameshwaram"],
  ["December","Manali · Gulmarg · Auli"],
];

/* ---------- COMPONENT ---------- */

const ExploreCitiesMenu: React.FC<Props> = ({ onClose, closing: closingProp }) => {
  const [active, setActive] = useState<SectionKey>("popular");
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (typeof closingProp !== "undefined") {
      setClosing(closingProp);
    }
  }, [closingProp]);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setClosing(true);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 top-[84px] z-30 bg-black/30 backdrop-blur-[2px] animate-backdrop"
        onClick={() => setClosing(true)}
      />

      <div
        className={`fixed top-[84px] left-0 right-0 z-40 bg-white shadow-2xl ${
          closing ? "animate-explore-out" : "animate-explore-in"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] px-10 pt-9 pb-5">

          <div className="w-[260px] border-r pr-6">
            <p className="mb-6 text-xs font-semibold uppercase text-gray-400">
              Explore
            </p>

            {["Cities","Experiences","Holiday Packages"].map((item) => (
              <div
                key={item}
                className="mb-4 cursor-pointer text-[16px] text-gray-600 hover:text-black hover:font-semibold transition"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="w-[380px] px-8 space-y-3">
            {[
              { key:"popular", title:"Popular destinations", desc:"See where Indians are travelling more often" },
              { key:"month", title:"Top cities by month", desc:"Popular cities you want to visit for every month" },
              { key:"north", title:"North India", desc:"Delhi · Jaipur · Manali" },
              { key:"west", title:"West India", desc:"Goa · Udaipur · Mumbai" },
              { key:"south", title:"South India", desc:"Kerala · Coorg · Ooty" },
            ].map((item) => (
              <div
                key={item.key}
                onMouseEnter={() => setActive(item.key as SectionKey)}
                className={`rounded-xl px-4 py-3 cursor-pointer transition
                  ${active === item.key ? "bg-orange-50" : "hover:bg-orange-50"}`}
              >
                <h3
                  className={`text-[16.5px] font-semibold
                    ${active === item.key ? "text-orange-600" : "text-black"}`}
                >
                  {item.title}
                </h3>
                <p className="text-[14px] text-gray-600 leading-tight">
                  {item.desc}
                </p>
              </div>
            ))}

            <div className="pt-2 text-sm font-medium cursor-pointer hover:underline">
              View All →
            </div>
          </div>

          <div className="flex-1 pl-6">
            {active === "month" ? (
              <div className="grid grid-cols-2 gap-x-20 gap-y-5">
                {MONTHS.map(([m, c]) => (
                  <div key={m}>
                    <h4 className="text-[19px] font-semibold mb-1">{m}</h4>
                    <p className="text-[15px] text-gray-600 leading-snug">{c}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-x-7 gap-y-6">
                {REGION_GRID[active as Exclude<SectionKey,"month">].map((c) => (
                  <button
                    key={c.title}
                    type="button"
                    className="text-center"
                    onClick={() => console.log("City clicked:", c.title)}
                  >
                    <div className="h-[124px] rounded-2xl overflow-hidden bg-gray-200">
                      <img
                        src={c.img}
                        alt={c.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="mt-2 text-[13.5px] font-medium transition hover:text-orange-600">
                      {c.title}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="h-14" />
      </div>
    </>
  );
};

export default ExploreCitiesMenu;
