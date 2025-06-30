import FeaturedCourses from "./components/FeaturedCorses";
import HeroSection from "./components/HeroSection";
import Infinitycard from "./components/Infinitycard";
import Instructor from "./components/Instructor";
import UpcomingWebinar from "./components/UpcomingWebinar";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* Navbar */}
      <nav className="w-full py-4 px-6 border-b border-white/10">
        <div className="text-white text-center text-lg">  Welcome to the Music Store</div>
      </nav>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <Infinitycard />
      <UpcomingWebinar />
       <Instructor />
    </main>
  )
}
