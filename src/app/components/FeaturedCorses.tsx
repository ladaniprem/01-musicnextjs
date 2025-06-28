import React from 'react'
import { BackgroundGradient } from './ui/background-gradient'
function FeaturedCorses() {
  return (
    <div className='py-12 bg-gray-900 text-white'>
      <BackgroundGradient />
      <div className="">
        <div className='text-center'>
          <h2 className="text-3xl font-bold mb-2 animate-fade-in-down bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            FEATURED COURSES
          </h2>
          <p className="text-lg animate-fade-in-up text-gray-300">
            Learn with the Best
          </p>
        </div>
      </div>
      <div className="">2</div>
      <div className="">3</div>
    </div>
  )
 }


export default FeaturedCorses
