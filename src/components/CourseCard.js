import React from 'react'
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineOpenAI } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineDownloadForOffline } from "react-icons/md";
import Register from './Register';


const CourseCard = ({ organization, title, duration, date, location, time }) => {
	return (
		<div className='relative bg-white lg:h-[350px] h-[350px] lg:w-[400px]  rounded-md shadow-sm shadow-[#008000] '>
			<p className='text-sm text-gray-400 p-2 pt-4'>{organization}</p>
			<p className='text-center text-lg font-semibold '>{title}</p>

			<div className='pb-4'>
				<div className='mx-20 flex items-center gap-2 justify-center mt-4 border border-[#008000]  rounded-full p-2'>
					<MdOutlineDownloadForOffline size={25} color='#008000' />
					<p className='text-sm font-semibold text-[#008000]'>Course Content</p>
				</div>
				<div className='mx-14 flex flex-row items-center justify-center mt-4 gap-1 '>
					<AiOutlineClockCircle size={20} color='#008000' />
					<p className='text-sm'>

						Duration: <span className='font-bold'>{duration}</span></p>
				</div>
				<div className='mx-1 flex items-center gap-1 justify-center mt-4 '>
					<AiOutlineClockCircle size={20} color='#008000' />
					<p className='text-sm'>{date}</p>
					<IoLocationSharp size={20} color='#008000' />
					<p className='text-sm'>Online </p>
				</div>
				<div className='mx-14 flex items-center justify-center mt-4 '>
					{/* <MdOutlineDownloadForOffline /> */}
					<p className='text-sm'>{time} {location}</p>
				</div>
				<div className='mx-4 mt-4 absolute bottom-4 left-0 right-0'>
					{/* <button className="px-2 p-1 rounded-lg w-full bg-[#008000] text-white">Register Now</button> */}
					<Register
						title={title}
						time={time}
					/>
				</div>
			</div>
		</div>
	)
}

export default CourseCard