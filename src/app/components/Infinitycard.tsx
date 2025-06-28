'use client';

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const card = [
    {
        id: 1,
        title: "The Art of Coding",
        description: "Master the art of coding with our comprehensive courses. Unlock advanced concepts, build real-world projects, and become a proficient developer with hands-on experience.",
    },
    {
        id: 2,
        title: "Explore New Technologies",
        description: "Explore new technologies and enhance your skills. Stay ahead in the tech world by diving into the latest frameworks, tools, and best practices.",
    },
    {
        id: 3,
        title: "Learn from Experts",
        description: "Learn from industry experts and gain practical knowledge. Access curated resources, interactive lessons, and mentorship to accelerate your learning journey.",
    }
];

function Infinitycard() {
  return (
    <div>
      <h2 className="text-2xl text-amber-50 text-center">Hear our Harmony : voices of Success</h2>
      <InfiniteMovingCards
        items={card.map(item => ({
          title: item.title,
          quote: item.description,
          name: item.id.toString(),
        }))}
      />
    </div>
  )
}

export default Infinitycard
