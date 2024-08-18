"use client";

import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b border-sky-500">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Image
            src="/image.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="mr-3 rounded-full"
          />
          <h1 className="text-2xl font-semibold text-white">Asram Wojak</h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Full Menu for Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="https://panel.asram-wojak.my.id"
            className="text-white font-semibold hover:text-sky-500 transition duration-300 flex items-center"
            target="_blank"
          >
            Panel
            <FiExternalLink className="ml-1" />
          </a>
          <a
            href="https://admin.asram-wojak.my.id"
            className="text-white font-semibold hover:text-sky-500 transition duration-300 flex items-center"
            target="_blank"
          >
            Dashboard
            <FiExternalLink className="ml-1" />
          </a>
          <a
            href="https://panel.asram-wojak.my.id/status"
            className="text-white font-semibold hover:text-sky-500 transition duration-300 flex items-center"
            target="_blank"
          >
            Server Status
            <FiExternalLink className="ml-1" />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="font-medium flex flex-col p-4 space-y-2 border-t border-sky-500">
            <li className="relative">
              <a
                href="https://panel.asram-wojak.my.id"
                className="flex items-center justify-between rounded px-2 py-2 text-sm text-white font-semibold bg-gray-800 hover:bg-gray-700 transition duration-300"
                target="_blank"
              >
                <span className="ml-1">Panel</span>
                <FiExternalLink className="ml-2" />
              </a>
            </li>
            <li className="relative">
              <a
                href="https://admin.asram-wojak.my.id"
                className="flex items-center justify-between rounded px-2 py-2 text-sm text-white font-semibold bg-gray-800 hover:bg-gray-700 transition duration-300"
                target="_blank"
              >
                <span className="ml-1">Dashboard</span>
                <FiExternalLink className="ml-2" />
              </a>
            </li>
            <li className="relative">
              <a
                href="https://panel.asram-wojak.my.id/status"
                className="flex items-center justify-between rounded px-2 py-2 text-sm text-white font-semibold bg-gray-800 hover:bg-gray-700 transition duration-300"
                target="_blank"
              >
                <span className="ml-1">Server Status</span>
                <FiExternalLink className="ml-2" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
