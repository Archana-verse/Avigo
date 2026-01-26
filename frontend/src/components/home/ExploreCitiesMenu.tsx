import { useEffect, useState } from "react";
import { EXPERIENCE_CITIES, EXPERIENCES } from "@/data/experiences";
import { CITY_IMAGES } from "@/data/cities";
import { TRIP_IDEAS } from "@/data/tripIdeas";

interface Props {
  onClose: () => void;
  closing?: boolean;
}

type CitySectionKey = "popular" | "month" | "north" | "west" | "south";
type Mode = "cities" | "experiences" | "tripideas";

const GRID_12 = (cities: string[]) =>
  cities.slice(0, 12).map((c) => ({
    title: c,
    img: CITY_IMAGES[c],
  }));

const REGION_GRID: Record<
  Exclude<CitySectionKey, "month">,
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

const ExploreCitiesMenu = ({ onClose, closing: closingProp }: Props) => {
  const [closing, setClosing] = useState(false);
  const [mode, setMode] = useState<Mode>("cities");

  const [activeCitySection, setActiveCitySection] = useState<CitySectionKey>("popular");
  const [activeExpCity, setActiveExpCity] =
    useState<typeof EXPERIENCE_CITIES[number]["city"]>("Goa");

  const [activeTripTheme, setActiveTripTheme] = useState(TRIP_IDEAS[0].theme);
  const [hoverTripTheme, setHoverTripTheme] = useState<string | null>(null);

  useEffect(() => {
    if (closingProp !== undefined) setClosing(closingProp);
  }, [closingProp]);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setClosing(true);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const handleLeftHover = (label: string) => {
    if (label === "Experiences") setMode("experiences");
    else if (label === "Trip Ideas") setMode("tripideas");
    else setMode("cities");
  };

  return (
    <>
      <div
        className="fixed inset-0 top-[84px] z-30 bg-black/30 backdrop-blur-[2px]"
        onClick={() => setClosing(true)}
      />

      <div
        className={`fixed top-[84px] left-0 right-0 z-40 bg-white shadow-2xl transition-all
          ${closing ? "animate-explore-out" : "animate-explore-in"}`}
      >
        <div className="mx-auto flex max-w-[1440px] px-10 pt-9 pb-5">
          {/* LEFT PANEL */}
          <div className="w-[260px] border-r pr-6">
            <p className="mb-6 text-xs font-semibold uppercase text-gray-400">
              Explore
            </p>

            {["Cities", "Experiences", "Trip Ideas"].map((label) => {
              const active =
                (label === "Cities" && mode === "cities") ||
                (label === "Experiences" && mode === "experiences") ||
                (label === "Trip Ideas" && mode === "tripideas");

              return (
                <div
                  key={label}
                  onMouseEnter={() => handleLeftHover(label)}
                  className={`mb-4 cursor-pointer text-[16px] transition
                    ${
                      active
                        ? "text-orange-600 font-semibold"
                        : "text-gray-700 hover:text-orange-600 hover:font-medium"
                    }`}
                >
                  {label}
                </div>
              );
            })}
          </div>

          {/* CITIES MIDDLE PANEL */}
          {mode === "cities" && (
            <div className="w-[380px] px-8 space-y-3">
              {[
                { key: "popular", title: "Popular destinations", desc: "See where Indians are travelling more often" },
                { key: "month", title: "Top cities by month", desc: "Popular cities you want to visit for every month" },
                { key: "north", title: "North India", desc: "Delhi · Jaipur · Manali" },
                { key: "west", title: "West India", desc: "Goa · Udaipur · Mumbai" },
                { key: "south", title: "South India", desc: "Kerala · Coorg · Ooty" },
              ].map((item) => (
                <div
                  key={item.key}
                  onMouseEnter={() => setActiveCitySection(item.key as CitySectionKey)}
                  className={`rounded-xl px-4 py-3 cursor-pointer transition
                    ${activeCitySection === item.key ? "bg-orange-50" : "hover:bg-orange-50"}`}
                >
                  <h3 className={`text-[17px] font-semibold transition
                    ${activeCitySection === item.key ? "text-orange-600" : "text-black hover:text-orange-600"}`}>
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* EXPERIENCES MIDDLE PANEL */}
          {mode === "experiences" && (
            <div className="w-[380px] px-8 space-y-1">
              {EXPERIENCE_CITIES.map((item) => (
                <div
                  key={item.city}
                  onMouseEnter={() => setActiveExpCity(item.city)}
                  className={`rounded-xl px-4 py-3 cursor-pointer transition
                    ${activeExpCity === item.city ? "bg-orange-50" : "hover:bg-orange-50"}`}
                >
                  <h3 className={`text-[18px] font-semibold
                    ${activeExpCity === item.city ? "text-orange-600" : "text-black hover:text-orange-600"}`}>
                    {item.city}
                  </h3>
                  <p className="text-[14.5px] text-gray-500 leading-tight pb-[2px]">
                    {item.tagline}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TRIP IDEAS MIDDLE PANEL */}
          {mode === "tripideas" && (
            <div className="w-[380px] pl-8 space-y-3">
              {TRIP_IDEAS.map((item) => {
                const isActive = activeTripTheme === item.theme;
                const isHover = hoverTripTheme === item.theme;

                return (
                  <div
                    key={item.theme}
                    onMouseEnter={() => setHoverTripTheme(item.theme)}
                    onMouseLeave={() => setHoverTripTheme(null)}
                    onClick={() => setActiveTripTheme(item.theme)}
                    className={`rounded-xl px-4 py-3 cursor-pointer transition
                      ${
                        isActive || isHover
                          ? "bg-orange-50"
                          : "hover:bg-orange-50"
                      }`}
                  >
                    <p
                      className={`text-[17px] transition font-medium
                        ${
                          isActive
                            ? "text-orange-600 font-semibold"
                            : isHover
                            ? "text-orange-600"
                            : "text-gray-800 hover:text-orange-600"
                        }`}
                    >
                      {item.theme}
                    </p>
                    <p className="text-[14.5px] text-gray-500 leading-tight pb-[2px]">
                      {item.tagline}
                    </p>
                  </div>
                );
              })}

              <div className="pt-2 text-sm font-medium cursor-pointer hover:underline hover:text-orange-600">
                View More →
              </div>
            </div>
          )}

          {/* RIGHT PANEL */}
          <div className="flex-1 pl-8">
            {/* CITIES */}
            {mode === "cities" && (
              <>
                {activeCitySection === "month" ? (
                  <div className="grid grid-cols-2 gap-x-20 gap-y-5">
                    {MONTHS.map(([m, c]) => (
                      <div key={m}>
                        <h4 className="text-[19px] font-semibold mb-1 hover:text-orange-600 transition">{m}</h4>
                        <p className="text-[15px] text-gray-600">{c}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-4 gap-x-7 gap-y-6">
                    {REGION_GRID[activeCitySection as Exclude<CitySectionKey, "month">].map((c) => (
                      <div key={c.title} className="text-center cursor-pointer">
                        <div className="h-[124px] rounded-2xl overflow-hidden bg-gray-200">
                          <img
                            src={c.img}
                            alt={c.title}
                            className="h-full w-full object-cover hover:scale-[1.03] transition"
                          />
                        </div>
                        <p className="mt-2 text-[13.5px] font-medium hover:text-orange-600 transition">{c.title}</p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* EXPERIENCES */}
            {mode === "experiences" && (
              <>
                <h3 className="text-[20px] font-semibold mb-4">Activities</h3>
                <div className="grid grid-cols-2 gap-y-6 gap-x-14 mb-10">
                  {EXPERIENCES[activeExpCity].activities.map((a) => (
                    <div key={a.title} className="flex items-center gap-4 cursor-pointer">
                      <div className="h-[70px] w-[90px] rounded-xl bg-gray-200 overflow-hidden">
                        {a.img && <img src={a.img} className="h-full w-full object-cover" />}
                      </div>
                      <p className="text-[16px] font-medium">{a.title}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-[20px] font-semibold mb-4">Attractions</h3>
                <div className="grid grid-cols-2 gap-y-6 gap-x-14">
                  {EXPERIENCES[activeExpCity].attractions.map((a) => (
                    <div key={a.title} className="flex items-center gap-4 cursor-pointer">
                      <div className="h-[70px] w-[90px] rounded-xl bg-gray-200 overflow-hidden">
                        {a.img && <img src={a.img} className="h-full w-full object-cover" />}
                      </div>
                      <p className="text-[16px] font-medium">{a.title}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* TRIP IDEAS */}
            {mode === "tripideas" && (
              <>
                {(() => {
                  const theme = TRIP_IDEAS.find(
                    (t) => t.theme === (hoverTripTheme || activeTripTheme)
                  );

                  if (!theme) return null;

                  return (
                    <>
                      <h3 className="text-[20px] font-semibold mb-5">
                        {theme.theme}
                      </h3>

                      <div className="mb-8 flex gap-5">
                        {theme.cards.slice(0, 3).map((c) => (
                          <div key={c.city} className="cursor-pointer">
                            <div className="h-[178px] w-[220px] rounded-2xl overflow-hidden bg-gray-200 shadow-sm hover:shadow-md transition">
                              <img
                                src={c.img}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <p className="mt-2 text-[14px] text-gray-800 font-medium">
                              {c.city}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-[15px] text-gray-800 mb-6">
                        {theme.clusters.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>

                      <div className="mt-3">
                        <span className="text-sm font-medium cursor-pointer hover:underline hover:text-orange-600">
                          View More →
                        </span>
                      </div>
                    </>
                  );
                })()}
              </>
            )}
          </div>
        </div>

        <div className="h-14" />
      </div>
    </>
  );
};

export default ExploreCitiesMenu;
