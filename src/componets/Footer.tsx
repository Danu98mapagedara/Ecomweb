import React from 'react'

const Footer = () => {
  return (
    <div className='flex-col items-center justify-center w-full p-4  md:flex  flex-start  bg-gray-600 text-white mt-8 rounded-lg'>
   
   <div className='flex-col items-center text-sm md:items-start'>
      <img src="/logo.png" alt="logo" className="w-6 h-6 md:w-9 md:h-9" />
       <p>© 2023 Tredona. All rights reserved.</p>
       <p>Privacy Policy</p>
       <p>Terms of Service</p>
   </div>
  <div className='flex-col text-sm  items-center gap-4 md:items-start'>
      <p>About Us</p>
      <p>Contact</p>
      <p>Support</p>
   </div>
  <div className='flex-col text-sm  items-center gap-4 md:items-start'>
        <p>Follow Us</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
   </div>

    </div>
  )
}

export default Footer