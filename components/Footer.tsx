"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-gray-300 py-8 sm:py-10 border-t-4 border-t-blue-500">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="mb-6 sm:mb-0 text-center sm:text-left">
            <p className="text-xs sm:text-sm font-light">
              &copy; {new Date().getFullYear()} AsramWojak. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/privacy" className="footer-link mb-2 sm:mb-0">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-link mb-2 sm:mb-0">
              Terms of Service
            </Link>
            <Link href="/contact" className="footer-link mb-2 sm:mb-0">
              Contact Us
            </Link>
            <a
              href="https://github.com/Stawa/AsramWojakWeb"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link flex items-center"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
