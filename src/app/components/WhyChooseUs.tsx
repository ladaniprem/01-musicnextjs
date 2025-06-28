'use client';
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const musicSchoolContent = [
    {
        title: "Expert Instructors",
        description: "Learn from industry professionals with years of experience in music education.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80" // Person with headphones (music studio)
    },
    {
        title: "Comprehensive Curriculum",
        description: "Our courses cover everything from basic theory to advanced techniques.",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" // Sheet music
    },
    {
        title: "Flexible Learning",
        description: "Study at your own pace with our online and in-person classes.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" // Laptop and headphones
    },
    {
        title: "Community Support",
        description: "Join a vibrant community of music enthusiasts and get support from peers and mentors.",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" // Group playing music
    },
    {
        title: "State-of-the-Art Facilities",
        description: "Access to top-notch instruments and recording studios for hands-on learning.",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" // Recording studio
    },
    {
        title: "Career Opportunities",
        description: "Get guidance on building a successful career in music with our career services.",
        image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80" // Microphone on stage
    }
]
function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs
