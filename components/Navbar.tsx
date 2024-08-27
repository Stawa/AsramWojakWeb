"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [{ href: "#", label: "Coming Soon", available: false }];

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg border-b-2 border-purple-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/Java_Edition.webp"
              alt="Logo"
              width={48}
              height={48}
              priority
            />
            <h1 className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Asram Wojak
            </h1>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 flex items-center ${
                    item.available
                      ? "text-blue-300 hover:bg-blue-700 hover:text-blue-100"
                      : "text-gray-400 opacity-50 cursor-not-allowed"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-blue-300 hover:text-blue-100 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-blue-500 transition duration-300"
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

      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-900 to-purple-900 border-t border-purple-500">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block px-4 py-3 rounded-md text-base font-medium transition duration-300 flex items-center justify-between ${
                  item.available
                    ? "text-blue-300 hover:bg-blue-700 hover:text-blue-100"
                    : "text-gray-400 opacity-50 cursor-not-allowed"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
