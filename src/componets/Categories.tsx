"use client"
import { FaTshirt } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";
import { FaBagShopping } from "react-icons/fa6";

const Categories = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4">
      <div className="flex flex-col items-center">
        <FaTshirt className="text-4xl mb-2" />
        <span>Clothing</span>
      </div>
      <div className="flex flex-col items-center">
        <GiConverseShoe className="text-4xl mb-2" />
        <span>Shoes</span>
      </div>
      <div className="flex flex-col items-center">
        <FaBagShopping className="text-4xl mb-2" />
        <span>Accessories</span>
      </div>
    </div>
  )
}

export default Categories