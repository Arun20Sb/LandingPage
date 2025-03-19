import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden px-4">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src="/bg2.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Elevate Your Business
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          Innovative solutions for modern challenges.
        </p>

        {/* Subheading */}
        <p className="text-md md:text-lg mb-8 text-gray-400">
          We provide tailored strategies and cutting-edge technology to grow
          your business faster.
        </p>

        {/* Primary CTA */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Contact Us
          </a>
          <Link
            to="/usersearch"
            className="bg-white text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            User Search 🔍
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="flex justify-center gap-8 flex-wrap mb-12 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-blue-500 w-5 h-5" /> 24/7 Support
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-blue-500 w-5 h-5" /> 99.9% Uptime
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-blue-500 w-5 h-5" /> Easy Integration
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
