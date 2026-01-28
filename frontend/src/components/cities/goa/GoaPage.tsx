import GoaHero from "./GoaHero";
import GoaTabs from "./GoaTabs";

import GoaOffers from "./GoaOffers";
import GoaHolidays from "./GoaHolidays";
import GoaThings from "./GoaThings";
import GoaSupport from "./GoaSupport";
import GoaExplore from "./GoaExplore";

const GoaPage = () => {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden animate-fade-in">

      {/* HERO + HERO TABS */}
      <div className="w-full flex justify-center bg-white">
        <div className="w-[1200px] px-6 pb-4" id="goa-hero-anchor">
          <GoaHero />
          <div className="pt-4">
            <GoaTabs variant="hero" />
          </div>
        </div>
      </div>

      {/* STICKY TABS */}
      <GoaTabs variant="sticky" />

      {/* MAIN CONTENT */}
      <div className="w-full flex justify-center bg-[#fafafa]">
        <div className="w-[1200px] px-6 pt-20 pb-32 space-y-36">

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
    </div>
  );
};

export default GoaPage;
