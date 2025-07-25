import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const Bestseller = () => {

    const {products} = useContext(ShopContext);
    const [bestseller, setBestseller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestseller(bestProduct.slice(0,5))
    },[products])

  return (
    <div className='my-6'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 pb-6'>
            Our most popular styles! Trendy basics and must-have pieces.
            </p>
        

          {/* RENDERING PRODUCTS */}

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
              bestseller.map((item, index) => (
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Bestseller