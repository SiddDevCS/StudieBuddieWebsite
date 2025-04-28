"use client";

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    content: "StudieBuddie completely transformed how I prepare for exams. The AI study coach helped me identify my weak areas and suggested better study techniques. I've improved my grades significantly this semester!",
    author: "Alex Johnson",
    role: "Medical Student",
    avatar: "/images/testimonials/avatar-1.jpg"
  },
  {
    content: "The task management and focus timer features have helped me stay on track with my assignments. I love how the app adapts to my study habits and gives me personalized recommendations.",
    author: "Maya Patel",
    role: "Computer Science Major",
    avatar: "/images/testimonials/avatar-2.jpg"
  },
  {
    content: "As someone with ADHD, staying focused during study sessions has always been challenging. StudieBuddie's focus timer and reminder system have been game-changers for me. Highly recommend!",
    author: "James Wilson",
    role: "Psychology Student",
    avatar: "/images/testimonials/avatar-3.jpg"
  },
  {
    content: "I was skeptical about using an AI study assistant at first, but StudieBuddie proved me wrong. The study coach gives genuinely helpful advice, and the progress analytics help me see my improvement over time.",
    author: "Sophia Chen",
    role: "Business Major",
    avatar: "/images/testimonials/avatar-4.jpg"
  },
  {
    content: "Managing multiple courses and extracurriculars was overwhelming until I found StudieBuddie. Now I can easily track my assignments, set priorities, and make sure I never miss a deadline.",
    author: "David Kim",
    role: "Engineering Student",
    avatar: "/images/testimonials/avatar-5.jpg"
  },
  {
    content: "The cloud sync feature is perfect for me as I switch between my laptop and phone throughout the day. StudieBuddie keeps everything updated so I can study wherever I am.",
    author: "Emily Rodriguez",
    role: "Language Arts Student",
    avatar: "/images/testimonials/avatar-6.jpg"
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Hear from our students
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Students around the world are using StudieBuddie to transform their study habits and academic performance.
          </p>
        </div>

        {/* Mobile Testimonial Carousel */}
        <div className="lg:hidden">
          <div className="relative bg-white rounded-2xl shadow-xl p-8">
            <div className="relative text-lg text-gray-700 font-medium">
              <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3 h-8 w-8 text-indigo-200" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative z-10">{testimonials[activeIndex].content}</p>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex-shrink-0 overflow-hidden rounded-full w-12 h-12 relative">
                <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                {/* Uncomment when you have real images */}
                {/* <Image 
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  fill
                  className="object-cover"
                /> */}
              </div>
              <div className="ml-4">
                <div className="text-base font-medium text-gray-900">{testimonials[activeIndex].author}</div>
                <div className="text-sm text-indigo-600">{testimonials[activeIndex].role}</div>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button 
                onClick={prevTestimonial}
                className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              >
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              >
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Testimonial Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <div className="text-gray-700">
                <svg className="h-8 w-8 text-indigo-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-base italic">{testimonial.content}</p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0 overflow-hidden rounded-full w-10 h-10 relative">
                  <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                  {/* Uncomment when you have real images */}
                  {/* <Image 
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  /> */}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-xs text-indigo-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:p-16">
            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-white">Join thousands of successful students</h3>
              <p className="mt-4 text-lg text-indigo-100">
                Our app is helping students achieve their academic goals every day.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
              <div className="text-center">
                <p className="text-5xl font-extrabold text-white">10k+</p>
                <p className="mt-2 text-base font-medium text-indigo-100">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-extrabold text-white">4.8</p>
                <p className="mt-2 text-base font-medium text-indigo-100">App Store Rating</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-extrabold text-white">92%</p>
                <p className="mt-2 text-base font-medium text-indigo-100">Study Efficiency</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-extrabold text-white">150+</p>
                <p className="mt-2 text-base font-medium text-indigo-100">Universities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 