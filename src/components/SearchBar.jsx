import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';


const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [ visible, setVisible ] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    },[location])


    return showSearch && visible ? (
        <div className='border-t border-b bg-[#E8F0FF] text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 bg-[#DBE8DC] rounded-lg px-5 my-2'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type='text' placeholder='Search...'/>
                <img className='w-4' src={assets.search_icon} alt='search-icon'/>
            </div>
            <img onClick={() => {setShowSearch(false)}} className='inline w-3 cursor-pointer ml-5' src={assets.cross_icon} alt='close-icon'/>
        </div>
    ) : null

}

export default SearchBar