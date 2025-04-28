import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - StudieBuddie',
  description: 'Frequently Asked Questions about StudieBuddie, your AI-powered study assistant.',
};

export default function FAQPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">Find answers to common questions about StudieBuddie and how it can help you study smarter.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-orange-600">What is StudieBuddie?</h2>
            <p className="mt-2 text-gray-700">StudieBuddie is an AI-powered study assistant that helps you plan, organize, and optimize your study sessions for better results.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-orange-600">Is StudieBuddie free?</h2>
            <p className="mt-2 text-gray-700">Yes! StudieBuddie is free to download and use, with optional premium features for advanced users.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-orange-600">What platforms are supported?</h2>
            <p className="mt-2 text-gray-700">StudieBuddie is available for iPhone (iOS 17.5+), Mac (macOS 14.5+), and Apple Vision (visionOS 1.2+).</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-orange-600">How does the AI Study Coach work?</h2>
            <p className="mt-2 text-gray-700">The AI Study Coach provides personalized study tips, reminders, and motivation based on your habits and goals.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-orange-600">Is my data private?</h2>
            <p className="mt-2 text-gray-700">Yes, your data is securely stored and handled according to our privacy policy. You are always in control of your information.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 