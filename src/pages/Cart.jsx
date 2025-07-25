import React, { useEffect, useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {

    const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

    const [ cartData, setCartData ] = useState([]);

    useEffect(() => {

      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData);
    }, [cartItems])

  return (
    <div className='border-t pt-14'>
        <div className='text-2xl mb-3'>
          <Title text1={'YOUR'} text2={'CART'} />
        </div>
        <div>
          {
            cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);

              return (
                <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                  <div className='flex items-start gap-6'>
                    <img className='w-16 sm:w-20 border border-gray-400 rounded-2xl' src={productData.image[0]} alt="Product Image" />
                    <div>
                      <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                      <div className='flex items-center gap-5 mt-2'>
                        <p className='font-medium'>Price per Item :</p>
                        <p>{productData.price}{currency}</p>
                        <p className='font-medium'>Size :</p>
                        <p className='px-3 sm:px-3 sm:py-1 border bg-slate-100'>{item.size}</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-5'>
                  <p className='items-center'>Quantity :</p>
                  <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 bg-slate-100' type="number" min={1} defaultValue={item.quantity} />
                  </div>
                  <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="Bin Icon" />
                
                </div>
              )
            })
          }
        </div>

        <div className='flex justify-end my-20'>
          <div className='w-full sm:w-[450px]'>
            <CartTotal />
            <div className='w-full text-end'>
              <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3 hover:bg-slate-100 hover:text-black transition-all'>PROCEED TO CHECKOUT</button>
                <div className='my-[25%]'></div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Cart