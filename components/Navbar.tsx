"use client";

import { useState } from "react";
import { FiExternalLink, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [{ href: "#", label: "Coming Soon", available: false }];

  return (
    <nav className="bg-gray-900 shadow-lg border-b-2 border-indigo-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src="/Java_Edition.webp"
              alt="Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <h1 className="text-xl font-bold text-indigo-300">Asram Wojak</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.available ? item.href : "#"}
                  className={`text-gray-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center ${
                    item.available
                      ? "hover:bg-indigo-700 hover:text-indigo-200"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  target={item.available ? "_blank" : "_self"}
                  rel={item.available ? "noopener noreferrer" : ""}
                  onClick={(e) => !item.available && e.preventDefault()}
                >
                  {item.label}
                  {item.available && <FiExternalLink className="ml-1" />}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-indigo-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-indigo-600">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.available ? item.href : "#"}
                className={`text-gray-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300 flex items-center justify-between ${
                  item.available
                    ? "hover:bg-indigo-700 hover:text-indigo-200"
                    : "opacity-50 cursor-not-allowed"
                }`}
                target={item.available ? "_blank" : "_self"}
                rel={item.available ? "noopener noreferrer" : ""}
                onClick={(e) => !item.available && e.preventDefault()}
              >
                {item.label}
                {item.available && <FiExternalLink className="ml-2" />}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
