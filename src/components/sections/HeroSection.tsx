import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-blue-500 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Boost Your Study Productivity with StudieBuddie
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-md">
              Your AI-powered study companion that helps you manage tasks, stay focused, and excel in your academic journey.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/download" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium text-lg shadow-md hover:bg-gray-100 transition-colors duration-200">
                Download Now
              </Link>
              <Link href="/features" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-white/10 transition-colors duration-200">
                Learn More
              </Link>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    {/* Replace with actual user images */}
                    <div className="h-full w-full bg-gray-400"></div>
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm text-white font-medium">
                Trusted by 10,000+ students worldwide
              </p>
            </div>
          </div>
          
          <div className="relative h-[500px] md:h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Replace with actual app screenshot */}
              <div className="relative w-[280px] h-[580px] rounded-[40px] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-black/10 z-10 rounded-[40px]"></div>
                <Image 
                  src="/images/app-screenshot.png"
                  alt="StudieBuddie App Screenshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 