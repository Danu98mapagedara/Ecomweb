import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='hidden  sm:flex align-items-center px-1 py-1 gap-1  rounded-md ring-1 shadow-2xl '>
<CiSearch />
<input className='text-sm outline-none' type="text" id='search' title='search'  placeholder='Search' />
    </div>
  )
}

export default Search