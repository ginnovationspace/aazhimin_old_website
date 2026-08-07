'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag,ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: 'n1',
    title: 'Aazhimin Launches Smart Cold-Chain Integration',
    date: '2025-05-15',
    tags: ['Cold Chain', 'Tech'],
    excerpt:
      'We’ve rolled out our next-gen IoT cold-storage monitors to ensure seafood stays at peak freshness from dock to door.',
    link: '/news/smart-cold-chain',
  },
  {
    id: 'n2',
    title: 'Secures $3.5M Series A to Scale Mariculture Units',
    date: '2025-04-10',
    tags: ['Funding', 'Mariculture'],
    excerpt:
      'Our recent Series A round will help expand sustainable shrimp and seabass farms across South India’s coastlines.',
    link: '/news/series-a-mariculture',
  },
  {
    id: 'n3',
    title: 'Partnered with Coastal Communities for Zero-Waste Pilot',
    date: '2025-03-22',
    tags: ['Sustainability', 'Community'],
    excerpt:
      'In collaboration with 5 fishing villages, we’re turning 100% of catch byproducts into new revenue streams.',
    link: '/news/zero-waste-pilot',
  },
];

export default function NewsroomPage() {
  return (
    <>
      <Navbar />

      <main className="mt-20 text-gray-800">
        {/* Hero */}
        <section className="text-center py-16 bg-gradient-to-br from-teal-100 to-blue-200">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-blue-900"
          >
            Newsroom
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Stay up to date with the latest announcements, partnerships, and innovations from Aazhimin.
          </motion.p>
        </section>

        {/* News List */}
        <section className="py-12 px-6 max-w-4xl mx-auto space-y-8">
          {newsItems.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">
                <a href={item.link} className="hover:underline">
                  {item.title}
                </a>
              </h2>
              <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
                <time className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(item.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </time>
                <div className="flex items-center space-x-2">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className="flex items-center bg-gradient-to-r from-teal-200 to-blue-200 text-teal-800 px-2 py-0.5 rounded-full text-xs"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">{item.excerpt}</p>
              <a
                href={item.link}
                className="inline-flex items-center text-teal-600 font-medium hover:underline"
              >
                Read More
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </motion.article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
