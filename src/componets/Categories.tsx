"use client"
import { FaTshirt } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";
import { FaBagShopping } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import { TbJacket } from "react-icons/tb";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useActionState, useState } from "react";


 const categories = [
  {
    name: "All",
    icon: <FaBasketShopping className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <FaTshirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <GiConverseShoe className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <FaBagShopping className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <FaBagShopping className="w-4 h-4" />,
    slug: "bags",
  },

  {
    name: "Jackets",
    icon: <TbJacket className="w-4 h-4" />,
    slug: "jackets",
  },
 
];

const Categories = () => {
const  searchParams=useSearchParams();
const selectedCategory=searchParams.get("category")
const router=useRouter();
const pathname=usePathname();

const handleChange=(value:string|null)=>{
  router.push(`${pathname}/?category=${value}`);
}


  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
      {categories.map((category) => (
        <div
          className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${
            category.slug === selectedCategory ? "bg-white" : "text-gray-500"
          }`}
          key={category.name}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  )
}

export default Categories