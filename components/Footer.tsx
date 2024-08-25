"use client";
import React from "react";

const Footer: React.FC = () => {
  const handleClick = (message: string) => {
    alert(message);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t-2 border-indigo-600">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-800 rounded-lg p-4 sm:p-6 border border-indigo-600 hover:shadow-indigo-500/30 transition-shadow duration-300">
          <p className="text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} AsramWojak. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
            <a
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-xs sm:text-sm cursor-pointer text-center hover:scale-105 transform"
              onClick={() => handleClick("Privacy Policy is not added yet!")}
            >
              Privacy Policy
            </a>
            <a
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-xs sm:text-sm cursor-pointer text-center hover:scale-105 transform"
              onClick={() => handleClick("Terms of Service is not added yet!")}
            >
              Terms of Service
            </a>
            <a
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-xs sm:text-sm cursor-pointer text-center hover:scale-105 transform"
              onClick={() => handleClick("Contact Us page is not added yet!")}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
