'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const categorizedProducts = [
  {
    category: 'Seafood Categories',
    items: [
      {
        name: 'Wild Catch',
        href: '/products/wild-catch',
        description: 'Ethically sourced seafood harvested by traditional and monitored fleets.',
      },
      {
        name: 'Mariculture',
        href: '/products/mariculture',
        description: 'Digitally monitored aquaculture of seabass, shrimp, and other marine species.',
      },
      {
        name: 'Shellfish',
        href: '/products/shellfish',
        description: 'Crabs, lobsters, and mollusks caught with traceable practices.',
      },
      {
        name: 'Speciality Marine Foods',
        href: '/products/speciality-marine-foods',
        description: 'Pickled, fermented, or prepared seafood delicacies for global markets.',
      },
    ],
  },
  {
    category: 'Ocean Produce',
    items: [
      {
        name: 'Fresh Seafood',
        href: '/products/fresh-seafood',
        description: 'Daily harvested and packed seafood with digital origin verification.',
      },
      {
        name: 'Ready-to-Cook',
        href: '/products/ready-to-cook',
        description: 'Pre-cleaned, cut, and portioned packs for home and horeca use.',
      },
      {
        name: 'Frozen Seafood',
        href: '/products/frozen-seafood',
        description: 'IQF and frozen blocks for institutional and international buyers.',
      },
      {
        name: 'Byproducts & Extracts',
        href: '/products/byproducts-extracts',
        description: 'Fish oil, chitosan, collagen, and other marine waste-derived products.',
      },
      {
        name: 'Consumer Packs',
        href: '/products/consumer-packs',
        description: 'Retail-ready seafood with traceability QR and branded packaging.',
      },
      {
        name: 'Bulk Orders',
        href: '/products/bulk-orders',
        description: 'Large-scale seafood orders for distributors, processors, and exporters.',
      },
    ],
  },
];



export default function ProductsPage() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen mt-20 px-6 py-20 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-16 text-center text-teal-800">
        Our Product Categories
      </h1>

      <div className="max-w-6xl mx-auto space-y-16">
        {categorizedProducts.map((group, groupIdx) => (
          <section key={group.category}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-teal-700 mb-6"
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
                  className="bg-teal-50 hover:bg-teal-100 border border-teal-100 rounded-xl p-6 shadow-md transition-all"
                >
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-700 mb-4">{item.description}</p>
                  <Link
                    href={item.href}
                    className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-teal-600 text-white hover:bg-teal-700 transition-all"
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
    <Footer/>
    </>
    
  );
}
