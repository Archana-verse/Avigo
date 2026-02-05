// import React, { useEffect, useState, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Search,
//   ShoppingCart,
//   User,
//   Menu,
//   ChevronDown,
// } from "lucide-react";
// import ExploreCitiesMenu from "./home/ExploreCitiesMenu";

// const Navbar: React.FC = () => {
//   const [visible, setVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const [openExplore, setOpenExplore] = useState(false);
//   const [closingExplore, setClosingExplore] = useState(false);

//   const exploreRef = useRef<HTMLDivElement>(null);
//   const location = useLocation();

//   /* navbar hide / show on scroll */
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 80) {
//         setVisible(false);
//       } else {
//         setVisible(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   /* body scroll lock */
//   useEffect(() => {
//     document.body.style.overflow = openExplore ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [openExplore]);

//   /* close on route change */
//   useEffect(() => {
//     if (openExplore) handleCloseExplore();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [location.pathname]);

//   const handleOpenExplore = () => {
//     if (openExplore) {
//       handleCloseExplore();
//     } else {
//       setOpenExplore(true);
//     }
//   };

//   const handleCloseExplore = () => {
//     setClosingExplore(true);
//     setTimeout(() => {
//       setOpenExplore(false);
//       setClosingExplore(false);
//     }, 260); // MUST match animate-explore-out duration
//   };

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200
//         transition-transform duration-300 ease-out
//         ${visible ? "translate-y-0" : "-translate-y-full"}`}
//       >
//         <div className="relative flex h-[84px] items-center px-8">

//           {/* LOGO */}
//           <Link to="/" className="flex items-center">
//             <img
//               src="/uploads/logo.png"
//               alt="Avigo"
//               className="h-12 w-auto object-contain"
//             />
//           </Link>

//           {/* CENTER NAV */}
//           <div className="absolute left-1/2 -translate-x-[58%] hidden md:flex items-center gap-12 text-[16px] font-medium text-black">

//             {/* EXPLORE CITIES */}
//             <div ref={exploreRef}>
//               <button
//                 type="button"
//                 onClick={handleOpenExplore}
//                 onMouseDown={(e) => e.preventDefault()}
//                 className="flex items-center gap-1 hover:text-orange-500 bg-transparent focus:outline-none"
//               >
//                 Explore Cities
//                 <ChevronDown size={18} />
//               </button>
//             </div>

//             <Link to="/holiday-packages" className="hover:text-orange-500">
//               Holiday Packages
//             </Link>

//             <Link to="/plan" className="hover:text-orange-500">
//               Trip Planner
//             </Link>

//             <Link to="/itinerary" className="hover:text-orange-500">
//               Itinerary Planner
//             </Link>
//           </div>

//           {/* RIGHT ICONS */}
//           <div className="ml-auto flex items-center gap-4">
//             {[Search, ShoppingCart, User, Menu].map((Icon, i) => (
//               <div
//                 key={i}
//                 className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 hover:text-orange-500 cursor-pointer"
//               >
//                 <Icon className="h-6 w-6 text-gray-700" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* EXPLORE MENU */}
//       {openExplore && (
//         <ExploreCitiesMenu
//           onClose={handleCloseExplore}
//           closing={closingExplore}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;








import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Search,
  User,
  Menu,
  ChevronDown,
} from "lucide-react";
import ExploreCitiesMenu from "./home/ExploreCitiesMenu";

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [openExplore, setOpenExplore] = useState(false);
  const [closingExplore, setClosingExplore] = useState(false);

  const exploreRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  /* navbar hide / show on scroll */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* body scroll lock */
  useEffect(() => {
    document.body.style.overflow = openExplore ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openExplore]);

  /* close explore on route change */
  useEffect(() => {
    if (openExplore) handleCloseExplore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleOpenExplore = () => {
    if (openExplore) {
      handleCloseExplore();
    } else {
      setOpenExplore(true);
    }
  };

  const handleCloseExplore = () => {
    setClosingExplore(true);
    setTimeout(() => {
      setOpenExplore(false);
      setClosingExplore(false);
    }, 260);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200
        transition-transform duration-300 ease-out
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="relative flex h-[84px] items-center px-8">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/uploads/logo.png"
              alt="Avigo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* CENTER NAV */}
          <div className="absolute left-1/2 -translate-x-[58%] hidden md:flex items-center gap-12 text-[16px] font-medium text-black">

            {/* EXPLORE CITIES */}
            <div ref={exploreRef}>
              <button
                type="button"
                onClick={handleOpenExplore}
                onMouseDown={(e) => e.preventDefault()}
                className="flex items-center gap-1 hover:text-orange-500 bg-transparent focus:outline-none"
              >
                Explore Cities
                <ChevronDown size={18} />
              </button>
            </div>

            {/* HOLIDAY PACKAGES */}
            <Link to="/holiday-packages" className="hover:text-orange-500">
              Holiday Packages
            </Link>

            {/* TRIP PLANNER (FINAL) */}
            <Link to="/plan" className="hover:text-orange-500">
              Trip Planner
            </Link>
          </div>

          {/* RIGHT ICONS */}
          <div className="ml-auto flex items-center gap-4">
            <Link
              to="/search"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 hover:text-orange-500"
            >
              <Search className="h-6 w-6 text-gray-700" />
            </Link>

            <Link
              to="/login"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 hover:text-orange-500"
            >
              <User className="h-6 w-6 text-gray-700" />
            </Link>

            <button
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 hover:text-orange-500"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* EXPLORE CITIES MENU */}
      {openExplore && (
        <ExploreCitiesMenu
          onClose={handleCloseExplore}
          closing={closingExplore}
        />
      )}
    </>
  );
};

export default Navbar;
