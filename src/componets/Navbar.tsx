import Link from 'next/link'
import React from 'react'
import Search from './Search'
import { FaHome } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between border-b  border-gray-200 '>
        <Link href={"/"}>
        <img src={"/logo.png"} alt="logo" width={30} height={30} className="w-6 h-6 md:w-9 md:h-9" /> 
        <p className='text=md font-medium hidden md:block'>Tredona</p>
        </Link>
<div className='flex gap-2'>
    <Search/>
    <Link href={'/'} className='ml-4'>
      <FaHome className='text-gray-600 hover:text-gray-900 size-5' />
    </Link>
    <Link href={'/cart'} className='ml-4'>  
    <FaCartArrowDown  size={20}/>
    </Link>
</div>
    </nav>
  )
}

export default Navbar