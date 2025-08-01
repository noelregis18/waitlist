'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import WaitlistModal from '@/components/WaitlistModal'

export default function SolutionsPage() {
  const features = [
    {
      title: 'Smart Split',
      description: 'Automatically allocate your income into bills, savings, taxes, and investments based on your personalized goals.',
      image: '/images/smart-split.svg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Goal Tracker',
      description: 'Visualize your progress towards savings goals, debt repayment, and investment growth with intuitive tracking tools.',
      image: '/images/goal-tracker.svg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Real-time Sync',
      description: 'Seamlessly connect your bank accounts through Plaid integration for automatic transaction tracking and updates.',
      image: '/images/real-time-sync.svg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'Smart Dashboard',
      description: 'Get a comprehensive overview of your finances with real-time insights and personalized recommendations.',
      image: '/images/dashboard.svg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  const [showWaitlistModal, setShowWaitlistModal] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-blue-950 via-black to-purple-950 shadow-xl">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center rounded-3xl shadow-2xl bg-gray-900/70 p-12 border border-gray-800">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">Smart Money Management Made Simple</h1>
            <p className="text-2xl text-gray-200 mb-10 font-medium">AnkFin automates your finances, eliminating manual budgeting stress and helping you build wealth efficiently through intelligent money management.</p>
            <div className="flex justify-center gap-6 mt-8">
              <button
                className="btn btn-primary text-lg px-10 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 whitespace-nowrap shadow-lg font-semibold"
                onClick={() => setShowWaitlistModal(true)}
              >
                Join Waitlist
              </button>
              <Link href="/pricing" className="btn btn-secondary text-lg px-10 py-4 rounded-xl shadow-lg font-semibold">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-xl border border-gray-700 p-10 flex items-start gap-8"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-lg text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Key Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Why Choose AnkFin?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-blue-900/60 to-gray-900/80 rounded-2xl shadow-xl border border-blue-700/30 p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">Automated Money Management</h3>
                <p className="text-lg text-gray-300">Set your preferences once and let our intelligent system handle the rest. No more manual budgeting or guesswork.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/60 to-pink-900/80 rounded-2xl shadow-xl border border-purple-700/30 p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">Real-time Financial Insights</h3>
                <p className="text-lg text-gray-300">Get instant updates on your financial health with detailed analytics and personalized recommendations.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-900/60 to-blue-900/80 rounded-2xl shadow-xl border border-pink-700/30 p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">Secure & Reliable</h3>
                <p className="text-lg text-gray-300">Bank-level security with Plaid integration ensures your financial data is always protected and up-to-date.</p>
              </div>
              <div className="bg-gradient-to-br from-green-900/60 to-gray-900/80 rounded-2xl shadow-xl border border-green-700/30 p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">Smart Notifications</h3>
                <p className="text-lg text-gray-300">Stay informed with timely alerts about bills, savings goals, and important financial milestones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Ready to Transform Your Financial Management?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of users who trust AnkFin to automate their finances and achieve their financial goals.</p>
          <div className="flex justify-center gap-6">
            <button
              className="btn btn-primary text-lg px-10 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 whitespace-nowrap shadow-lg font-semibold"
              onClick={() => setShowWaitlistModal(true)}
            >
              Start Free Trial
            </button>
            <a
              href="mailto:ventureai2025@gmail.com?subject=AnkFin Solutions Inquiry&body=Hello,%0D%0A%0D%0AI'm interested in learning more about AnkFin's solutions.%0D%0A%0D%0ABest regards,"
              className="btn btn-secondary text-lg px-10 py-4 rounded-xl shadow-lg font-semibold"
            >
              Contact Sales
            </a>
          </div>
          <WaitlistModal open={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />
        </div>
      </section>
    </div>
  )
} 