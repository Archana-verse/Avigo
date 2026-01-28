// const cities = [
//   { name: "Goa", image: "/images/cities/goa.jpg" },
//   { name: "Kerala", image: "/images/cities/kerala.jpg" },
//   { name: "Manali", image: "/images/cities/manali.jpg" },
//   { name: "Jaipur", image: "/images/cities/jaipur.jpg" },
//   { name: "Udaipur", image: "/images/cities/udaipur.jpg" },
//   { name: "All Cities", image: "/images/cities/all-cities.jpg", isAll: true },
// ];

// const PopularIndia = () => {
//   return (
//     <section className="w-full bg-white pt-14 pb-20">
//       <div className="max-w-[1200px] mx-auto px-6">

//         <h2 className="text-center text-[46px] leading-[1.2] font-bold mb-16">
//           Discover travellers’ <br />
//           favourite destinations in India
//         </h2>

//         <div className="flex items-center justify-between gap-8">
//           {cities.map((city, index) => (
//             <div
//               key={index}
//               className="relative w-[185px] h-[185px] rounded-3xl overflow-hidden group cursor-pointer"
//             >
//               <img
//                 src={city.image}
//                 alt={city.name}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black/30 flex items-end p-4">
//                 <span className="text-white text-base font-semibold">
//                   {city.isAll ? "All Cities →" : `📍 ${city.name}`}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PopularIndia;







import { useNavigate } from "react-router-dom";

const cities = [
  { name: "Goa", image: "/images/cities/goa.jpg" },
  { name: "Kerala", image: "/images/cities/kerala.jpg" },
  { name: "Manali", image: "/images/cities/manali.jpg" },
  { name: "Jaipur", image: "/images/cities/jaipur.jpg" },
  { name: "Udaipur", image: "/images/cities/udaipur.jpg" },
  { name: "All Cities", image: "/images/cities/all-cities.jpg", isAll: true },
];

const PopularIndia = () => {
  const navigate = useNavigate();

  const handleClick = (city: string, isAll?: boolean) => {
    if (isAll) {
      navigate("/cities");
    } else {
      // convert Goa → goa, Kerala → kerala etc.
      const slug = city.toLowerCase();
      navigate(`/cities/${slug}`);
    }
  };

  return (
    <section className="w-full bg-white pt-14 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-center text-[46px] leading-[1.2] font-bold mb-16">
          Discover travellers’ <br />
          favourite destinations in India
        </h2>

        <div className="flex items-center justify-between gap-8">
          {cities.map((city, index) => (
            <div
              key={index}
              onClick={() => handleClick(city.name, city.isAll)}
              className="relative w-[185px] h-[185px] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <span className="text-white text-base font-semibold">
                  {city.isAll ? "All Cities →" : `📍 ${city.name}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularIndia;
