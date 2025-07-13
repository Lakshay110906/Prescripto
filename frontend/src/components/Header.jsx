import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary px-6 md:px-10 lg:px-20 rounded-lg '>

        {/* left side */}
        <div className=' flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
            Book Appointment<br />With Trusted Doctors
            </p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white font-light text-sm fo'>
                <img className='w-28' src={assets.group_profiles} alt="" />
                <p>Simply Browse through our extensive list of trusted doctors, <br className='hidden sm:block'/>schedule your appointment hassle free  </p>

            </div>
            <a href="#speciality" className='flex items-center gap-2 bg-white text-sm  py-3 px-8 rounded-full text-gray-600 md:m-0 m-auto hover:scale-105 transition-all 30s'>
                Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
            </a>
        </div>

        {/* right side */}

        <div className='md:w-1/2 relative'>
            <img className=' md:absolute h-auto w-full bottom-0 rounded-lg'src={assets.header_img} alt="" />
        </div>
      
    </div>
  )
}

export default Header
