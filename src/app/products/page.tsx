'use client'
import Image from 'next/image'
import { CardBody, CardContainer,CardItem} from '../components/ui/3d-card'
import courseData from '@/app/components/data/music_courses.json'

function page() {
  return (
    <div className='min-h-screen bg-black py-12 pt-36  '>
    <h1 className='text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white'>All Products ({courseData.courses.length})</h1>
    <div className='flex flex-wrap justify-center gap-8'>
      {courseData.courses.map((course) => (
        <CardContainer key={course.id} className="w-80">
          <CardBody>
        <CardItem>
          <Image
            src={course.image}
            alt={course.title}
            width={320}
            height={180}
            className="rounded-lg"
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

export default page
