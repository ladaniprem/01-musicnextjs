'use client';

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/app/lib/utils";

const card = [
  {
    quote: "Master the art of coding with our comprehensive courses. Unlock advanced concepts, build real-world projects, and become a proficient developer with hands-on experience.",
    name: "prem",
    title: "The Art of Coding",
  },
  {
    quote: "Explore new technologies and enhance your skills. Stay ahead in the tech world by diving into the latest frameworks, tools, and best practices.",
    name: "jeel",
    title: "Explore New Technologies",
  },
  {
    quote: "Learn from industry experts and gain practical knowledge. Access curated resources, interactive lessons, and mentorship to accelerate your learning journey.",
    name: "Raman",
    title: "Learn from Experts",
  }
];

function Infinitycard() {
  return (
    <div className="relative flex h-[50rem] w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Dotted background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <h2 className="relative z-20 text-2xl text-amber-50 mb-8">Hear our Harmony : voices of Success</h2>
      <div className="relative z-20 flex justify-center items-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">  
        <InfiniteMovingCards
          items={card}
          direction="right"
          speed="fast"
        />
      </div>
    </div>
  )
}

export default Infinitycard
