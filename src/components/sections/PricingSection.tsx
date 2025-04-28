"use client";

import { useState } from 'react';
import Link from 'next/link';

const PricingSection = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Free',
      description: 'Essential features for casual students',
      price: {
        monthly: 0,
        annual: 0,
      },
      features: [
        'Basic task management',
        'Focus timer',
        'Limited AI assistant (5 uses/week)',
        'Basic study analytics',
        'Single device sync',
      ],
      mostPopular: false,
      cta: 'Start Free',
      ctaLink: '/download'
    },
    {
      name: 'Premium',
      description: 'Advanced features for dedicated students',
      price: {
        monthly: 4.99,
        annual: 3.99,
      },
      features: [
        'Unlimited task management',
        'Advanced focus tools',
        'Unlimited AI assistant access',
        'Detailed study analytics',
        'Multi-device sync',
        'Priority support',
        'Ad-free experience',
      ],
      mostPopular: true,
      cta: 'Get Premium',
      ctaLink: '/download'
    },
    {
      name: 'Teams',
      description: 'Perfect for study groups and classrooms',
      price: {
        monthly: 9.99,
        annual: 7.99,
      },
      features: [
        'All Premium features',
        'Group task management',
        'Shared notes and resources',
        'Team analytics dashboard',
        'Collaborative study sessions',
        'Admin controls',
        'Dedicated support',
      ],
      mostPopular: false,
      cta: 'Contact Sales',
      ctaLink: '/contact'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Plans for every student's needs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Choose the perfect plan to support your academic journey, from casual studying to intensive exam preparation.
          </p>
          
          {/* Billing toggle */}
          <div className="relative mt-12 flex justify-center">
            <div className="flex items-center space-x-3">
              <span className={`text-sm ${annual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                Annual
                <span className="hidden md:inline"> billing</span>
                {annual && <span className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">Save 20%</span>}
              </span>
              <button
                type="button"
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${annual ? 'bg-indigo-600' : 'bg-gray-200'}`}
                onClick={() => setAnnual(!annual)}
              >
                <span className="sr-only">Toggle billing frequency</span>
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${annual ? 'translate-x-5' : 'translate-x-0'}`}
                />
              </button>
              <span className={`text-sm ${!annual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                Monthly
                <span className="hidden md:inline"> billing</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* Plans */}
        <div className="mt-12 space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {plans.map((plan, i) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border ${plan.mostPopular ? 'border-indigo-600 shadow-xl' : 'border-gray-300'} p-6 lg:p-8`}
            >
              {plan.mostPopular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-600 text-white">
                  Most Popular
                </div>
              )}
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">${annual ? plan.price.annual : plan.price.monthly}</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p className="mt-6 text-gray-500">{plan.description}</p>
                
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                href={plan.ctaLink}
                className={`mt-8 block w-full rounded-md py-3 px-6 text-center text-base font-medium ${
                  plan.mostPopular 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        
        {/* FAQ */}
        <div className="mt-24">
          <h3 className="text-2xl font-extrabold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-medium text-gray-900">Can I switch plans later?</h4>
              <p className="mt-2 text-base text-gray-500">
                Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes to your subscription will take effect in the next billing cycle.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-medium text-gray-900">Do you offer student discounts?</h4>
              <p className="mt-2 text-base text-gray-500">
                Yes! Students with a valid .edu email address can get an additional 15% off any plan. Contact our support team to apply for the discount.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-medium text-gray-900">What payment methods do you accept?</h4>
              <p className="mt-2 text-base text-gray-500">
                We accept all major credit cards, PayPal, and Apple Pay. For Teams plans, we also offer invoicing options.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-medium text-gray-900">Is there a free trial?</h4>
              <p className="mt-2 text-base text-gray-500">
                Yes, all paid plans include a 14-day free trial so you can experience the full features before committing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 