import React from 'react'
import CourseCard from './CourseCard'
import { courseData } from '../data/data'

const CourseSection = () => {
	return (
		<div className="service-container container mx-auto p-[1rem]" id="services">
			<h2 className="text-2xl font-bold text-center mb-4">Our Courses</h2>
			<div className="grid grid-cols-1 items-center justify-center  md:grid-cols-3 gap-4 lg:mx-auto mx-4">
				{courseData?.map((course, index) => (
					<CourseCard
						key={course + index}
						organization={course.organization}
						title={course.title}
						duration={course.duration}
						date={course.date}
						location={course.location}
						time={course.time}
					/>
				))}


			</div>
		</div>
	)
}

export default CourseSection