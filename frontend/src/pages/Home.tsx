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

