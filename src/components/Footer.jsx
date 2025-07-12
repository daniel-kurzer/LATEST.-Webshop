import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[1fr_1fr_1fr] gap-14 my-10 mt-20 text-sm'>
            
            <div className='mx-auto'>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className='mx-auto'>
                <img className='w-60 mx-auto' src={assets.Latest_Logo} alt="Logo" />
                <p className='w-full md:w-2/3 text-gray-600 text-center mx-auto mt-5'>High-quality Clothings for everbody. Satisfied customers since 2025. <br /> <br /> AGB | Data protection | Imprint</p>
            </div>

            <div className='mx-auto'>
                <p className='text-xl font-medium mb-10'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+49711/985632</li>
                    <li>contact@latest-Store.de</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright &copy; 2025 @ Latest.com - All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer