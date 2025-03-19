import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-20">
      <nav className="flex justify-between items-center px-6 py-4 md:px-12 backdrop-blur-md bg-black/30">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-wide">
          YourLogo
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-white text-sm font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-blue-500 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-blue-500 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="hover:text-blue-500 transition duration-300"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-500 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition duration-300 text-sm"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu className="text-white w-6 h-6" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
