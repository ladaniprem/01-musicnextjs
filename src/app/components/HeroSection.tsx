'use client';
import FeaturedCorses from "./FeaturedCorses";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Spotlight } from "./ui/Spotlight";
import WhyChooseUs from "./WhyChooseUs";


export default function HeroSection() {
  return (
    <div>
      <Spotlight className="absolute inset-0 z-0" />
      <div className="h-screen w-full rounded-md flex-col items-center justify-center relative overflow-auto mx-auto py-10 md:py-0">
        <div className="p-4 relative z-10 w-full text-center mt-10 md:mt-20">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-fade-in-up flex items-center justify-center gap-2">
              <ContainerTextFlip />
              <span className="mx-2">the Art of Music</span>
            </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Dive into our comprehensive courses and unleash your musical potential. From rhythm to melody, discover the harmony that awaits your creative journey.
          </p>
         
          <div className="mt-12 flex justify-center">
              <HoverBorderGradient className="group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    Explore Courses 
                  </span>
                  <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 ml-1">
                    →
                  </span>
              </HoverBorderGradient>
          </div>         
        </div>
        <div className="w-full mt-4">
          <FeaturedCorses />
          <br/>
          <br/>
          <br/>
      <WhyChooseUs/>
        </div>
      </div>
    </div>
  )
}
