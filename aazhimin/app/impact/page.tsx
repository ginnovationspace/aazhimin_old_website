'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const impactCategories = [
  {
    category: 'Community & Sustainability',
    items: [
      {
        name: 'Marine R&D Lab',
        href: '/impact/research-lab',
        description: 'Innovation in aquatech, hatchery optimization, and ecological modeling.',
      },
      {
        name: 'Women in Fisheries',
        href: '/impact/women-in-fisheries',
        description: 'Upskilling and empowering women in seafood operations and leadership.',
      },
      {
        name: 'Community Outreach',
        href: '/impact/community-outreach',
        description: 'Health, literacy, and youth programs in coastal communities.',
      },
      {
        name: 'Safety & Training',
        href: '/impact/safety-training',
        description: 'Marine safety, hygiene, and certified training programs for workers.',
      },
    ],
  },
  {
    category: 'Climate & Zero Waste',
    items: [
      {
        name: 'Zero Waste',
        href: '/impact/zero-waste',
        description: 'Circular economy practices using 100% of harvest waste responsibly.',
      },
      {
        name: 'Climate Resilience',
        href: '/impact/climate-resilience',
        description: 'Data-driven models for protecting fisheries from climate disruption.',
      },
    ],
  },
  {
    category: 'Safety & Resilience',
    items: [
      {
        name: 'SafeCast',
        href: '/impact/safecast',
        description: 'Marine wearables, alert networks, and weather sensors to keep crews safe.',
      },
      {
        name: 'CleanHull',
        href: '/impact/cleanhull',
        description: 'Robotic cleaning and anti-fouling systems for vessels and tanks.',
      },
    ],
  },
];


export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 mt-20 py-20 bg-white text-gray-900">
        <h1 className="text-4xl font-bold mb-16 text-center text-emerald-800">
          Impact & Development
        </h1>

        <div className="max-w-6xl mx-auto space-y-16">
          {impactCategories.map((group, groupIdx) => (
            <section key={group.category}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-emerald-700 mb-6"
              >
                {group.category}
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {group.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: itemIdx * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 rounded-xl p-6 shadow-md transition-all"
                  >
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-700 mb-4">{item.description}</p>
                    <Link
                      href={item.href}
                      className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-all"
                    >
                      Learn More →
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
