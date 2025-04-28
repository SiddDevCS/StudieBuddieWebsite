import FeaturesSection from '@/components/sections/FeaturesSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'StudieBuddie Features - AI Study Coach and Productivity Tools',
  description: 'Explore the powerful features of StudieBuddie - AI study coaching, task management, focus timers, and more to help you excel in your studies.',
};

export default function FeaturesPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            StudieBuddie Features
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Discover how our app's powerful features can transform your study habits and academic performance.
          </p>
        </div>
      </div>
      <FeaturesSection />
    </div>
  );
} 