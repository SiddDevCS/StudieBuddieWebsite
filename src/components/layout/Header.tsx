"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              {/* Replace with your actual logo */}
              <div className="h-10 w-10 relative">
                <Image 
                  src="/images/logo.png" 
                  alt="StudieBuddie Logo" 
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
              <span className="ml-3 text-xl font-bold text-orange-600">StudieBuddie</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">
              Features
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block text-gray-700 hover:bg-gray-50 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/features" className="block text-gray-700 hover:bg-gray-50 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium">
            Features
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:bg-gray-50 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="mt-3 px-2 space-y-1">
            <Link
              href="/download"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-orange-500 to-amber-500"
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 