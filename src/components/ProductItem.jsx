import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({id, image, name, price}) => {

    const { currency } = useContext(ShopContext);

    return (
        <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
            <div className="overflow-hidden border border-gray-400 rounded-2xl drop-shadow-lg">
                <img className="hover:scale-[1.05] hover:contrast-125 transition duration-500 ease-in-out rounded-2xl" src={image[0]} alt="product-image" />
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-medium">{price}{currency}</p>
        </Link>
    )
}

export default ProductItem