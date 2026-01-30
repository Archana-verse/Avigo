


// import { useEffect, useState } from "react";

// const tabs = [
//   { id: "offers", label: "Offers" },
//   { id: "holidays", label: "Holidays" },
//   { id: "things", label: "Things to do" },
//   { id: "support", label: "Travel Support" },
//   { id: "explore", label: "Explore Goa" },
// ];

// const NAV_HEIGHT = 72;

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
//       { threshold: [0.2, 0.4, 0.6], rootMargin: `-${NAV_HEIGHT}px 0px 0px 0px` }
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

//   const isTabActive = (id: string) => hovered === id || active === id;

//   const renderTabs = () => (
//     <>
//       <div className="hidden sm:flex justify-between w-full gap-2">
//         {tabs.map((t) => (
//           <button
//             key={t.id}
//             onClick={() => scrollTo(t.id)}
//             onMouseEnter={() => setHovered(t.id)}
//             onMouseLeave={() => setHovered(null)}
//             className={`
//               flex-1 text-center px-5 py-3 rounded-full text-[15px] font-medium transition-all
//               ${isTabActive(t.id)
//                 ? "bg-black text-white border border-black"
//                 : "bg-white text-black border border-[#dedede] hover:bg-black hover:text-white"
//               }
//             `}
//           >
//             {t.label}
//           </button>
//         ))}
//       </div>

//       <div className="flex sm:hidden gap-3 overflow-x-auto no-scrollbar">
//         {tabs.map((t) => (
//           <button
//             key={t.id}
//             onClick={() => scrollTo(t.id)}
//             onMouseEnter={() => setHovered(t.id)}
//             onMouseLeave={() => setHovered(null)}
//             className={`
//               whitespace-nowrap px-5 py-2 rounded-full text-sm border transition-all
//               ${isTabActive(t.id)
//                 ? "bg-black text-white border-black"
//                 : "bg-white text-black border-[#dedede]"
//               }
//             `}
//           >
//             {t.label}
//           </button>
//         ))}
//       </div>
//     </>
//   );

//   if (variant === "hero") {
//     return (
//       <div className="pt-5">
//         {renderTabs()}
//       </div>
//     );
//   }

//   if (variant === "sticky") {
//     return showSticky ? (
//       <div className="sticky top-[72px] z-50 bg-white border-b py-3">
//         <div className="w-[1200px] mx-auto px-6">
//           {renderTabs()}
//         </div>
//       </div>
//     ) : null;
//   }

//   return null;
// };

// export default GoaTabs;













import { useEffect, useState } from "react";

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
  const [hovered, setHovered] = useState<string | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActive(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: 0.4, rootMargin: `-${NAV_HEIGHT}px 0px 0px 0px` }
    );

    tabs.forEach(t => {
      const sec = document.getElementById(t.id);
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

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

  const isActive = (id: string) => hovered === id || active === id;

  const renderTabs = () => (
    <div className="flex w-full justify-between gap-3">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => scrollTo(t.id)}
          onMouseEnter={() => setHovered(t.id)}
          onMouseLeave={() => setHovered(null)}
          className={`
            flex-1 select-none text-center rounded-2xl border
            h-[48px] px-6 flex items-center justify-center
            text-[15px] font-semibold tracking-tight transition-all duration-200

            ${isActive(t.id)
              ? "bg-black text-white border-black shadow-sm"
              : "bg-[#fafafa] text-black border-[#e5e5e5] hover:bg-black hover:text-white hover:border-black"
            }
          `}
        >
          {t.label}
        </button>
      ))}
    </div>
  );

  if (variant === "hero") {
    return (
      <div className="pt-4">
        {renderTabs()}
      </div>
    );
  }

  if (variant === "sticky") {
    return showSticky ? (
      <div className="sticky top-[84px] z-[90] bg-white border-b py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div className="w-[1200px] mx-auto px-6">
          {renderTabs()}
        </div>
      </div>
    ) : null;
  }

  return null;
};

export default GoaTabs;
