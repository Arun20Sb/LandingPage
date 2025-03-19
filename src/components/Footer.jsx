import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left - Logo or Name */}
        <div className="text-lg font-semibold text-white mb-4 md:mb-0">
          YourBrand<span className="text-indigo-500">.</span>
        </div>

        {/* Center - Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right - Social Icons (Optional) */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.005 3.657 9.127 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.878C18.343 21.127 22 17.005 22 12z" />
            </svg>
          </a>
          <a href="#" className="hover:text-white transition">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M21.543 7.104c-.77.342-1.597.572-2.466.675a4.301 4.301 0 001.887-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.292 3.9A12.154 12.154 0 013 5.16a4.28 4.28 0 001.326 5.716 4.266 4.266 0 01-1.938-.537v.054a4.284 4.284 0 003.437 4.2 4.29 4.29 0 01-1.932.074 4.283 4.283 0 004 2.976 8.588 8.588 0 01-5.317 1.834A8.64 8.64 0 012 19.54a12.145 12.145 0 006.574 1.926c7.886 0 12.204-6.533 12.204-12.204 0-.186-.004-.37-.012-.553A8.728 8.728 0 0022 6.423a8.61 8.61 0 01-2.457.674z" />
            </svg>
          </a>
          <a href="#" className="hover:text-white transition">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c-5.467 0-9.837 4.37-9.837 9.837 0 4.352 2.818 8.043 6.764 9.366.494.09.675-.214.675-.477 0-.236-.009-.864-.014-1.696-2.753.598-3.33-1.328-3.33-1.328-.449-1.142-1.096-1.447-1.096-1.447-.897-.613.068-.601.068-.601  .993.07 1.516 1.02 1.516 1.02 .88 1.506 2.31 1.071 2.876.819.09-.638.344-1.071.626-1.318-2.196-.249-4.506-1.098-4.506-4.887 0-1.08.39-1.963 1.029-2.655-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.02a9.564 9.564 0 012.5-.336 9.564 9.564 0 012.5.336c1.91-1.29 2.748-1.02 2.748-1.02 .545 1.378.202 2.397.1 2.65 .64.692 1.028 1.575 1.028 2.655 0 3.8-2.312 4.635-4.514 4.878 .355.306.674.916.674 1.846 0 1.333-.012 2.406-.012 2.733 0 .265.18.57.682.473C19.185 20.042 22 16.352 22 12c0-5.467-4.37-9.837-9.837-9.837z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
