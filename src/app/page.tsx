import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-orange-50 to-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Study smarter,</span>
                <span className="block text-orange-600">not harder</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                StudieBuddie is your personal AI-powered study assistant, designed to help students organize, focus, and excel in their academic journey.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="https://apps.apple.com/us/app/studiebuddie/id6742738406" 
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md"
                >
                  Download Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link 
                  href="/features" 
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 shadow-md"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-6 flex items-center justify-center">
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                  <Image
                    src="/images/app-screenshot.png"
                    alt="StudieBuddie App Screenshot"
                    width={272}
                    height={572}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Features that make studying easier
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Designed with students in mind, StudieBuddie helps you stay on track and achieve your academic goals.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-orange-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">AI-Powered Study Plans</h3>
              <p className="mt-2 text-base text-gray-600">
                Personalized study plans that adapt to your learning style and schedule.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-orange-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Focus Timer</h3>
              <p className="mt-2 text-base text-gray-600">
                Stay productive with our Pomodoro-inspired focus timer with break reminders.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-orange-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Progress Tracking</h3>
              <p className="mt-2 text-base text-gray-600">
                Track your study progress and celebrate your achievements along the way.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link 
              href="/features" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700"
            >
              See all features
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What our users say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of students who have improved their study habits with StudieBuddie.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-black">Aki Sehgal</h4>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "StudieBuddie has completely transformed how I prepare for exams. The AI coach gives me personalized advice that actually works!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-black">Wilbur Wood</h4>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "The focus timer has helped me stay on track with my studies. I'm much more productive now and my grades have improved!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-black">Jack Broad</h4>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "I love how StudieBuddie helps me organize my research and track my progress. It's been essential for my academic work."
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link 
              href="https://apps.apple.com/us/app/studiebuddie/id6742738406" 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 shadow-md"
            >
              Download Now
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to transform your study habits?
          </h2>
          <p className="mt-4 text-xl text-white opacity-90">
            Join thousands of students who are already studying smarter with StudieBuddie.
          </p>
          <div className="mt-8">
            <Link 
              href="https://apps.apple.com/us/app/studiebuddie/id6742738406" 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 shadow-md"
            >
              Download Now
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
