'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
//import { Card } from './ui/card-hover-effect'

function UpcomingWebinar() {
     const featuredWebibars = [
        {
            title: 'Exploring the Future of Music Production',
            description: 'Join us for an insightful webinar on the latest trends in music production and technology.',
            slug: 'exploring-future-music-production',
            isFeatured: true,
            date: new Date('2023-11-15T10:00:00Z'),
        },
        {
            title: 'Unlocking the Power of AI in Creative Industries',
            description: 'Discover how AI is transforming the creative industries and what it means for musicians and producers.',
            slug: 'unlocking-power-ai-creative-industries',
            isFeatured: true,
            date: new Date('2023-11-22T10:00:00Z'),
        },
        {
            title: 'The Evolution of Music Distribution',
            description: 'Learn about the changing landscape of music distribution and how artists can adapt.',
            slug: 'evolution-music-distribution',
            isFeatured: true,
            date: new Date('2023-11-29T10:00:00Z'),
        },
        {
            title: 'Mastering Music Marketing in the Digital Age',
            description: 'Get tips and strategies for effectively marketing your music in today’s digital world.',
            slug: 'mastering-music-marketing-digital-age',
            isFeatured: true,
            date: new Date('2023-12-06T10:00:00Z'),
        },
        {
            title: 'The Art of Music Collaboration',
            description: 'Explore the benefits and challenges of collaborating with other musicians and producers.',
            slug: 'art-music-collaboration',
            isFeatured: true,
            date: new Date('2023-12-13T10:00:00Z'),
        },
        {
            title: 'Navigating Copyright in the Music Industry',
            description: 'Understand the complexities of copyright law and how it affects musicians and producers.',
            slug: 'navigating-copyright-music-industry',
            isFeatured: true,
            date: new Date('2023-12-20T10:00:00Z'),
        },
    ]
  return (
    <div className='p-12 bg-gray-900 rounded-lg shadow-lg mt-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6' />
        <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-teal-600'>Upcoming Webinars</h2>
            <p className='text-gray-400 mt-4'>Join us for our upcoming webinars to enhance your music knowledge and skills.</p>
        </div>
        <div className='mt-10'>
          <HoverEffect
            items={featuredWebibars.map(({ title, description, slug }) => ({
              title,
              description,
              link: `/webinars/${slug}`,
            }))}
          />
        </div>
        <div className='mt-10 text-center'>
            <Link href={"/"}
             className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200 ease-in-out'>
            View All Webinars
            </Link>
        </div>
      
    </div>
  )
}

export default UpcomingWebinar
