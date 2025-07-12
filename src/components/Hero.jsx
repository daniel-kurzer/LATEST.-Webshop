import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border sm:rounded-2xl border-gray-400 mt-4 drop-shadow-lg'>
        
        {/* Hero Left Side */}

        <div className='w-full sm:w-1/2 flex items-center sm:rounded-l-2xl justify-center py-10 sm:py-0 bg-[#DBE8DC]'>
            <div className='text-[#414141] bg-[#DBE8DC]'>
                <div className='flex items-center ml-8 gap-2 bg-[#DBE8DC]'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base bg-[#DBE8DC]'>SHOP NOW</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed bg-[#DBE8DC]'>SUMMER SALE 2025</h1>
                <div className='flex ml-[50%] items-center gap-2 bg-[#DBE8DC]'>
                    <p className='font-semibold text-sm md:text-base bg-[#DBE8DC]'>LATEST. Fashion &copy;</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>

        {/* Hero Right Side */}
        <img className='w-full sm:w-1/2 sm:rounded-r-2xl' src={assets.hero_img_2} alt="Hero IMG" />
    </div>
  )
}

export default Hero