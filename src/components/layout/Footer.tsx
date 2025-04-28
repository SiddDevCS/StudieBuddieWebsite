import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 relative">
                <Image 
                  src="/images/logo.png" 
                  alt="StudieBuddie Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="ml-3 text-lg font-bold text-white">StudieBuddie</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              The smart study companion for students looking to excel in their academic journey.
            </p>
          </div>
          
          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/features" className="text-gray-300 hover:text-white text-sm">
                  Features
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company info */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with social links and copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="mt-8 md:mt-0 text-base text-gray-400">
            &copy; {new Date().getFullYear()} StudieBuddie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 