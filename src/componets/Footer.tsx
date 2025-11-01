import React from 'react'

const Footer = () => {
  return (
   <div className="w-full bg-gray-800 text-gray-200 mt-12 py-10 px-6 md:px-20">
  <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
    
    {/* LOGO & COPYRIGHT */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="w-10 h-10" />
        <h1 className="text-lg font-semibold text-white">Tredona</h1>
      </div>
      <p className="text-sm text-gray-400">© 2023 Tredona. All rights reserved.</p>
      <div className="flex gap-4 text-sm text-gray-400 hover:text-white transition-all">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>

    {/* QUICK LINKS */}
    <div className="flex flex-col items-center md:items-start gap-3">
      <h2 className="text-white font-medium text-lg">Quick Links</h2>
      <a href="#" className="hover:text-white transition-colors">About Us</a>
      <a href="#" className="hover:text-white transition-colors">Contact</a>
      <a href="#" className="hover:text-white transition-colors">Support</a>
    </div>

    {/* FOLLOW US */}
    <div className="flex flex-col items-center md:items-start gap-3">
      <h2 className="text-white font-medium text-lg">Follow Us</h2>
      <a href="#" className="hover:text-white transition-colors">Facebook</a>
      <a href="#" className="hover:text-white transition-colors">Twitter</a>
      <a href="#" className="hover:text-white transition-colors">Instagram</a>
    </div>
  </div>

  {/* FOOTER LINE */}
  <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
    Crafted with ❤️ by Tredona Team
  </div>
</div>

  )
}

export default Footer