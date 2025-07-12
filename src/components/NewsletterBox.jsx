import React from "react";

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return(
        <div className="text-center">
            <p className="text-2xl font-medium text-gray-800">Subscribe now & get 10% off</p>
            <p className="text-gray-400 mt-3">Subscribe to our newsletter for exclusive offers, style updates, and latest trends!</p>
            <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 bg-[#DBE8DC] rounded-2xl">
                <input className="w-full sm:flex-1 outline-none bg-[#DBE8DC]" placeholder="Enter your Email..." type="email" required />
                <button type="submit" className="bg-black text-white text-xs px-10 py-4 cursor-pointer rounded-r-2xl">Subscribe now</button>
            </form>
        </div>
    )
}

export default NewsletterBox