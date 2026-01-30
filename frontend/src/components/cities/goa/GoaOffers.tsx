import React from "react";

const GoaOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Kids Go FREE",
      desc:
        "Up to 2 kids enjoy complimentary stays, meals, and curated holiday experiences.",
      image:
        "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769609808/Kids_Go_FREE_z4dh6t.png",
      bg: "bg-[#EAF3FF]",
      border: "border-[#B9D6FF]",
    },
    {
      id: 2,
      title: "Partner Goes FREE",
      desc:
        "Book your trip and your partner’s stay, meals, and activities are fully complimentary.",
      image:
        "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769609808/Partner_Goes_FREE_rxcweq.png",
      bg: "bg-[#FFF3E9]",
      border: "border-[#FFD7BA]",
    },
  ];

  return (
    <div className="w-full flex flex-col">

      {/* HEADLINE */}
      <div className="pb-10 text-center">
        <h2 className="inline-block text-[clamp(26px,3.5vw,38px)] font-semibold leading-tight tracking-tight">
          Big adventures,<br />
          spectacular savings in Goa
        </h2>
      </div>

      {/* OFFERS CARDS */}
      <div
        className="
          flex flex-col md:flex-row gap-6 
          md:gap-4 
          overflow-x-auto md:overflow-visible 
          no-scrollbar
          snap-x snap-mandatory
        "
      >
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`
              snap-start md:snap-none
              flex md:flex-row flex-col
              rounded-[28px]
              overflow-hidden
              ${offer.bg} border ${offer.border}
              min-w-[290px] md:min-w-0
              md:w-1/2
              shadow-[0_1px_3px_rgba(0,0,0,0.06)]
            `}
          >
            {/* IMAGE */}
            <div className="w-full md:w-[38%] h-[170px] md:h-auto overflow-hidden">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="flex flex-col justify-center p-6 space-y-2">
              <h3 className="text-[20px] font-semibold">{offer.title}</h3>
              <p className="text-[15px] text-gray-700 leading-relaxed">
                {offer.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoaOffers;
