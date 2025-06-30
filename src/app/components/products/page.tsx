'use client'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
import courseData from '@/app/components/data/music_courses.json';

function ProductsPage() {
  return (
    <div className='min-h-screen bg-black py-12 pt-36 px-4 sm:px-6 lg:px-8'>
    <h1 className='text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white'>All Products ({courseData.courses.length})</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full max-w-7xl mx-auto'>
      {courseData.courses.map((course) => (
        <CardContainer key={course.id} className="w-80">
          <CardBody>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={course.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={course.title}
          />
        </CardItem>
        <CardItem>
          <h2 className="text-xl font-bold text-white mt-4">{course.title}</h2>
        </CardItem>
        <CardItem>
          <p className="text-gray-300 mt-2">{course.description}</p>
        </CardItem>
          </CardBody>
        </CardContainer>
      ))}
      </div>
    </div>
  )
}

export default ProductsPage
