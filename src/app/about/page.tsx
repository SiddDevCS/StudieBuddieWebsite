import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - StudieBuddie',
  description: 'Learn more about StudieBuddie, your AI-powered study assistant, and the team behind it.',
};

export default function AboutPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">About StudieBuddie</h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">Discover the story behind StudieBuddie and our mission to help students study smarter, not harder.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-orange-600 mb-6">Our Mission</h2>
        <p className="mb-8 text-gray-700">StudieBuddie was created to empower students with smart tools and AI-driven insights, making studying more effective and less stressful. We believe every student deserves a personal study coach to help them reach their full potential.</p>
        <h2 className="text-2xl font-bold text-orange-600 mb-6">Who We Are</h2>
        <p className="mb-8 text-gray-700">StudieBuddie is developed by Seemant Sehgal, an educator and technologist passionate about leveraging technology to improve learning outcomes. Our team is dedicated to building intuitive, secure, and impactful tools for students everywhere.</p>
        <h2 className="text-2xl font-bold text-orange-600 mb-6">Contact</h2>
        <p className="mb-8 text-gray-700">Have questions or feedback? Reach out to us at <a href="mailto:siddnative@gmail.com" className="text-orange-600 hover:text-orange-800">siddnative@gmail.com</a>.</p>
      </div>
    </div>
  );
} 