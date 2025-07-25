import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
 

const Collection = () => {

    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [sortType, setSortType] = useState('relevant');

    const toggleCategory = (e) => {
      if (category.includes(e.target.value)) {
        setCategory(prev => prev.filter(item => item !== e.target.value))
      }
      else {
        setCategory(prev => [...prev, e.target.value])
      }
    }

    const toggleSubCategory = (e) => {
      if (subCategory.includes(e.target.value)) {
        setSubCategory(prev => prev.filter(item => item !== e.target.value))
      }
      else {
        setSubCategory(prev => [...prev, e.target.value])
      }
    }

    const toggleSizes = (e) => {
      if (sizes.includes(e.target.value)) {
        setSizes(prev => prev.filter(item => item !== e.target.value))
      }
      else {
        setSizes(prev => [...prev, e.target.value])
      }
    }

    const applyFilter = () => {
      let productCopy = products.slice();

      if (showSearch && search) {
        productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      }

      if (category.length > 0) {
        productCopy = productCopy.filter(item => category.includes(item.category));
      }
      if (subCategory.length > 0) {
        productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
      }
      if (sizes.length > 0) {
        productCopy = productCopy.filter(item => item.sizes && item.sizes.some(size => sizes.includes(size)));
      }
      setFilterProducts(productCopy)
    }

    const sortProducts = () => {
      let fpCopy = filterProducts.slice();

      switch(sortType) {
        case 'low-high':
          setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
          break;
        
        case 'high-low' :
          setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)));
          break;

        default:
          applyFilter();
          break;
      }
    }

    useEffect(() => {
      applyFilter();
    }, [category, subCategory, sizes, search, showSearch])

    useEffect(() => {
      sortProducts();
    }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10'>
        
        {/* FILTER OPTIONS */}

        <div className='min-w-60'>
          <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
            <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="Dropdown Icon" />
          </p>

          {/* CATEGORY FILTER */}

          <div className={`border border-gray-400 rounded-2xl bg-[#DBE8DC] drop-shadow-lg pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORY</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
                </p>
              </div>
          </div>

          {/* SUBCATEGORY FILTER */}

          <div className={`border border-gray-400 rounded-2xl bg-[#DBE8DC] drop-shadow-lg pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
                </p>
              </div>
          </div>

          {/* SIZES FILTER */}

          <div className={`border border-gray-400 rounded-2xl bg-[#DBE8DC] drop-shadow-lg pl-5 py-3 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>SIZE</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'S'} onChange={toggleSizes} /> S
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'M'} onChange={toggleSizes} /> M
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'L'} onChange={toggleSizes} /> L
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'XL'} onChange={toggleSizes} /> XL
                </p>
              </div>
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />

            {/* PRODUCT SORT */}

            <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-400 rounded-2xl bg-[#DBE8DC] text-sm px-2'>
              <option value="relevant">Sort by: Relevant</option>
              <option value="high-low">Sort by: High to Low</option>
              <option value="low-high">Sort by: Low to High</option>
            </select>
          </div>

          {/* MAP PRODUCTS */}

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 text-center'>
            {
              filterProducts.map((item, index) => (
                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
              )) 
            }
          </div>

        </div>
    </div>
  )
}

export default Collection