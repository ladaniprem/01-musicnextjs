'use client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
// import Image from 'next/image'
// import { image } from 'motion/react-client'
import { AnimatedTooltip } from './ui/animated-tooltip'

const InstructorData = [
    {
       id: 1,
       name: 'John Doe',
       designation: 'Music Instructor',
       image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        id: 2,
        name: 'Jane Smith',
        designation: 'Dance Instructor',
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Bob Brown',
      designation: 'Vocal Coach',
      image: 'https://randomuser.me/api/portraits/men/65.jpg'
    },
    {
      id: 4,
      name: 'Alice Green',
      designation: 'Music Teacher',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
]
const Instructor = () => {
  return (
      <div className='relative h-[40rem] overflow-hidden flex items-center justify-center '>
      <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
        <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet Our Instructors</h2>
        <p className='text-base md:text-lg text-white text-center mb-4'>Discover the talented proessional who will guide your musical journey</p>
        <div className='flex flex-row items-center justify-center mb-10 w-full'> 
          <AnimatedTooltip items={InstructorData} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructor
