'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, BarChart2, Globe, DollarSign } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function InvestorsPage() {
  const router = useRouter();

  return (
    <>
      <Navbar />

      <main className="mt-20 text-gray-800">
        {/* Hero */}
        <section className="relative flex items-center justify-center h-72 bg-gradient-to-br from-blue-200 to-teal-200 overflow-hidden">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center px-6"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-2">
              Partner with Aazhimin
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Fuel the next wave of marine-tech innovation. Discover our growth, impact, and vision for a sustainable blue economy.
            </p>
          </motion.div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: DollarSign, label: 'Funding Raised', value: '$ 0' },
              { icon: BarChart2, label: 'future YoY Growth', value: '150%' },
              { icon: Globe, label: 'Markets will Serve', value: '30+' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="flex flex-col items-center bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl shadow"
              >
                <stat.icon className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Invest */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">Why Aazhimin?</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Proven traction with 150% year-over-year revenue growth.</li>
                <li>Scalable B2B & B2C seafood commerce platforms.</li>
                <li>Deep tech stack: IoT, cold-chain intelligence, AI analytics.</li>
                <li>Strong social impact: 100K+ community beneficiaries.</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">Use of Funds</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Expand R&D in marine sustainability and AI-driven yield models.</li>
                <li>Scale operations across 10 new coastal regions.</li>
                <li>Enhance platform & mobile UX for end-to-end traceability.</li>
                <li>Build strategic partnerships with fisheries & regulators.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-gradient-to-br from-teal-600 to-blue-600 text-white text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold mb-4"
          >
            Ready to Dive In?
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-white text-blue-700 px-8 py-3 rounded-full shadow-lg"
            onClick={() => router.push('/contact')}
          >
            Contact Investor Relations <ChevronRight className="ml-2 w-5 h-5" />
          </motion.button>
        </section>
      </main>

      <Footer />
    </>
  );
}
