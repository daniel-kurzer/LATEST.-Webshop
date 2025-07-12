import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={' US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px] border border-gray-400 rounded-2xl' src={assets.contact_img} alt="Contact Image" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Königstr. 3 <br /> 70173 Stuttgart, Germany</p>
          <p className='text-gray-500'>Tel: +49711/985632 <br /> Email: contact@latest-Store.de</p> 
          <p className='font-semibold text-xl text-gray-600'>Careers at Latest &copy;</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='bg-black text-white font-light text-sm my-4 px-8 py-3 rounded-2xl cursor-pointer hover:bg-[#DBE8DC] hover:text-black transition-all hover:border-double border border-black'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact