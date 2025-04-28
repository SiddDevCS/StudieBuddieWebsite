import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - StudieBuddie',
  description: 'Get in touch with the StudieBuddie team for support, feedback, or business inquiries.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            We're here to help with any questions or concerns about StudieBuddie
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Support</h3>
              <p className="text-gray-600 mb-4">
                Need help with the app or have questions about your account? Our support team is ready to assist you.
              </p>
              <div className="flex items-center mt-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:siddnative@gmail.com" className="ml-3 text-orange-600 hover:text-orange-800">
                  siddnative@gmail.com
                </a>
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Time</h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
            
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">FAQ</h3>
              <p className="text-gray-600 mb-4">
                Before reaching out, you might find answers to common questions in our FAQ section.
              </p>
              <Link href="/faq" className="text-orange-600 hover:text-orange-800">
                View Frequently Asked Questions →
              </Link>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Concerns</h3>
              <p className="text-gray-600 mb-4">
                For questions related to your privacy or data, please refer to our Privacy Policy or contact us directly.
              </p>
              <Link href="/privacy" className="text-orange-600 hover:text-orange-800">
                View Privacy Policy →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 