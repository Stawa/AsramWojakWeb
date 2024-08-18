import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-sky-500 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-md mb-2">
          &copy; {new Date().getFullYear()} Stawa. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a className="text-gray-400 hover:text-white">Terms of Service</a>
          <a className="text-gray-400 hover:text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
