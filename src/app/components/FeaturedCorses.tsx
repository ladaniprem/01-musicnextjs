'use client'
import React from 'react'
import { BackgroundGradient } from './ui/background-gradient'
import Link from 'next/link'
import courseData from './data/music_courses.json'

interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  instructor: string,
  isFeatured: boolean,
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className="py-12 px-4 bg-gray-900 text-white relative overflow-hidden">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-fade-in-down">
          FEATURED COURSES
        </h2>
        <p className="text-lg text-gray-300 animate-fade-in-up">
          Learn with the Best
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course: Course, idx) => (
              <div key={course.id} className="relative h-full">
                <BackgroundGradient>
                  <div
                    className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 rounded-xl p-6 shadow-lg flex flex-col h-full transition duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-300 mb-4">{course.description}</p>
                    <span className="text-sm text-gray-400 mb-2">Instructor: {course.instructor}</span>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="mt-auto inline-block px-4 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded shadow-lg hover:scale-105 transition-transform duration-300 animate-bounce"
                    >
                      View Course
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link
              href="/courses"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Courses
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default FeaturedCourses
