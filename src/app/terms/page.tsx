import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - StudieBuddie',
  description: 'Terms of Service for StudieBuddie, your AI-powered study assistant.',
};

export default function TermsPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Service</h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">Please read these terms and conditions carefully before using StudieBuddie.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-orange-600 mb-6">1. Acceptance of Terms</h2>
        <p className="mb-8 text-gray-700">By accessing or using StudieBuddie, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use the app.</p>
        <h2 className="text-2xl font-bold text-orange-600 mb-6">2. Use of the Service</h2>
        <p className="mb-8 text-gray-700">You may use StudieBuddie for personal, non-commercial purposes only. You agree not to misuse the app or attempt to access it in any unauthorized way.</p>
        <h2 className="text-2xl font-bold text-orange-600 mb-6">3. User Content</h2>
        <p className="mb-8 text-gray-700">You are responsible for any content you submit or create using StudieBuddie. Do not upload or share content that is illegal, harmful, or violates the rights of others.</p>
        <h2 className="text-2xl font-bold text-orange-600 mb-6">4. Privacy</h2>
        <p className="mb-8 text-gray-700">Your privacy is important to us. Please review our Privacy Policy to understand how your data is handled.</p>
        <h2 className="text-2xl font-bold text-orange-600 mb-6">5. Changes to Terms</h2>
        <p className="mb-8 text-gray-700">We may update these Terms of Service from time to time. Continued use of StudieBuddie means you accept any changes.</p>
        <h2 className="text-2xl font-bold text-orange-600 mb-6">6. Contact</h2>
        <p className="mb-8 text-gray-700">If you have any questions about these Terms, please contact us at siddnative@gmail.com.</p>
      </div>
    </div>
  );
} 