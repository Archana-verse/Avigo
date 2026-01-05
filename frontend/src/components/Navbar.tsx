// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Search,
//   ShoppingCart,
//   User,
//   Menu,
//   ChevronDown,
// } from "lucide-react";

// const Navbar = () => {
//   const [visible, setVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 80) {
//         // scroll down → hide
//         setVisible(false);
//       } else {
//         // scroll up → show
//         setVisible(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <nav
//       className={`absolute top-0 left-0 right-0 z-50 bg-white border-b border-gray-200
//       transition-transform duration-300 ease-out
//       ${visible ? "translate-y-0" : "-translate-y-full"}`}
//     >
//       {/* OUTER BAR */}
//       <div className="relative flex h-[84px] items-center px-8">

//         {/* LOGO — LEFT */}
//         <Link to="/" className="flex items-center">
//           <img
//             src="/uploads/logo.png"
//             alt="Avigo"
//             className="h-12 w-auto object-contain"
//           />
//         </Link>

//         {/* CENTER NAV — OPTICAL CENTER (ALIKE STYLE) */}
//         <div className="absolute left-1/2 -translate-x-[58%] hidden md:flex items-center gap-12 text-[16px] font-medium text-black">
//           <Link
//             to="/explore"
//             className="group flex items-center gap-1 transition-colors hover:text-orange-500"
//           >
//             Explore Cities
//             <ChevronDown
//               size={18}
//               className="transition-transform group-hover:rotate-180"
//             />
//           </Link>

//           <Link
//             to="/holiday-packages"
//             className="transition-colors hover:text-orange-500"
//           >
//             Holiday Packages
//           </Link>

//           <Link
//             to="/plan"
//             className="transition-colors hover:text-orange-500"
//           >
//             Trip Planner
//           </Link>

//           <Link
//             to="/itinerary"
//             className="transition-colors hover:text-orange-500"
//           >
//             Itinerary Planner
//           </Link>
//         </div>

//         {/* RIGHT ICONS — ALIKE STYLE */}
//         <div className="ml-auto flex items-center gap-4">
//           <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200 hover:text-orange-500 cursor-pointer">
//             <Search className="h-6 w-6 text-gray-700" />
//           </div>

//           <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200 hover:text-orange-500 cursor-pointer">
//             <ShoppingCart className="h-6 w-6 text-gray-700" />
//           </div>

//           <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200 hover:text-orange-500 cursor-pointer">
//             <User className="h-6 w-6 text-gray-700" />
//           </div>

//           <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200 hover:text-orange-500 cursor-pointer">
//             <Menu className="h-6 w-6 text-gray-700" />
//           </div>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
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
          <Link
            to="/explore"
            className="group flex items-center gap-1 hover:text-orange-500"
          >
            Explore Cities
            <ChevronDown
              size={18}
              className="transition-transform group-hover:rotate-180"
            />
          </Link>

          <Link to="/holiday-packages" className="hover:text-orange-500">
            Holiday Packages
          </Link>

          <Link to="/plan" className="hover:text-orange-500">
            Trip Planner
          </Link>

          <Link to="/itinerary" className="hover:text-orange-500">
            Itinerary Planner
          </Link>
        </div>

        {/* RIGHT ICONS */}
        <div className="ml-auto flex items-center gap-4">
          {[Search, ShoppingCart, User, Menu].map((Icon, i) => (
            <div
              key={i}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 hover:text-orange-500 cursor-pointer"
            >
              <Icon className="h-6 w-6 text-gray-700" />
            </div>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
