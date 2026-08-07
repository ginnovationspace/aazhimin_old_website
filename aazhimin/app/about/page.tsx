'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Users,
  Lightbulb,
  Star,
  Globe,
  Linkedin,
  Anchor,
  Zap,
} from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };
  const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 } };

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();

  return (
    <>
      <Navbar />
      <main className="mt-20 text-gray-800">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center px-6 bg-gradient-to-tr from-sky-100 to-white">
          <motion.div
            className="lg:w-1/2 w-full py-16"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4 leading-tight">
              Aazhimin: Ocean Sovereignty by Ginnovation
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Aazhimin is a sovereign marine tech platform developed by Ginnovation to empower coastal economies with traceability, smart logistics, and decentralized blue tech infrastructure.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg"
            >
              Learn More
              <ChevronRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            className="lg:w-1/2 w-full h-full mt-8 lg:mt-0"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/Assets/images/about.png"
              alt="Marine Innovation"
              width={600}
              height={400}
              className="w-full h-full rounded-lg shadow-xl object-cover"
            />
          </motion.div>
        </section>

        {/* Feature Highlights */}
        <section className="py-20 px-6 bg-white">
          <motion.div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Blockchain Traceability', desc: 'From ocean to outlet, trace every catch in real time.', icon: Anchor },
              { title: 'AI-Powered Logistics', desc: 'Smarter cold chains with predictive delivery.', icon: Zap },
              { title: 'Digital Marketplace', desc: 'Direct trade for coastal producers and B2B buyers.', icon: Globe },
            ].map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-6 bg-gradient-to-tr from-sky-50 to-blue-50 rounded-xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feat.title}</h3>
                  <p className="text-gray-600 mb-4">{feat.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-cyan-100">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: 'Our Mission',
                text: 'To modernize the marine economy with traceable, tech-enabled infrastructure that supports sustainability, fairness, and global market access for every coastal stakeholder.',
              },
              {
                title: 'Our Vision',
                text: 'Aazhimin envisions a digital-first ocean economy platform built for climate resilience, food security, and equitable coastal livelihoods — powered by Ginnovation.',
              },
            ].map((block, i) => (
              <motion.div
                key={i}
                className="p-8 bg-white rounded-3xl shadow-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">{block.title}</h2>
                <p className="text-gray-700">{block.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats & CTA */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { label: 'Coastal Producers', value: '20,000+' },
                { label: 'Smart Hubs', value: '60+' },
                { label: 'Digital Trades', value: '500K+' },
                { label: 'Zero-Waste Units', value: '35+' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                >
                  <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
                  <p className="text-gray-600 uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">A Brand by Ginnovation</h3>
              <p className="text-gray-700 mb-6">
                Ginnovation Space Private Limited powers Aazhimin with deep-tech infrastructure in AI, robotics, and blockchain to enable sovereign, sustainable, and smart ocean commerce.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/contact"
                className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full shadow-lg"
              >
                Join Us <ChevronRight className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 bg-sky-50">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              className="text-3xl font-bold mb-12"
            >
              Board of Directors
            </motion.h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
              {[
                // {
                //   name: 'Arunkumar Ayyakannu',
                //   role: 'CEO and Director',
                //   img: '/Assets/images/team/arun.jpeg',
                //   website: 'https://arun.yazhvin.com/',
                //   description:
                //     "Drives Aazhimin's vision and strategic direction, pioneering breakthroughs in AI, autonomous technologies, and maritime innovation.",
                // },
                {
                  name: 'Dynisious Frame Royappan',
                  role: 'Director',
                  img: '/Assets/images/team/dyni.jpeg',
                  website: 'https://www.linkedin.com/in/dynisious-frame-45923317b/',
                  description:
                    'Oversees regulatory and quality initiatives with deep domain expertise in operational compliance.',
                },
                {
                  name: 'Narayana Vadivu Nadar Retnavathi Ramanan',
                  role: 'Director',
                  img: '/Assets/images/team/ramanan.jpeg',
                  website: 'https://www.linkedin.com/in/n-r-ramanan-nadar-3976a413a',
                  description:
                    'Provides capital backing and strategic advisory to drive Ginnovation’s expansion and long-term vision.',
                }
              ].map((person, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center"
                >
                  {person.img ? (
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-40 h-40 rounded-full object-cover mb-4 border-2 border-indigo-600 shadow-md"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-md">
                      {getInitials(person.name)}
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{person.role}</p>
                  {person.description && (
                    <p className="text-gray-500 text-sm mt-2">{person.description}</p>
                  )}
                  {person.website && (
                    <a
                      href={person.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800 transition"
                    >
                      <span className="text-sm font-medium">View Profile</span>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.h2
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              className="text-3xl sm:text-4xl font-bold"
            >
              Join the Aazhimin Journey
            </motion.h2>
            <motion.p
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.2 }}
              className="text-lg max-w-2xl mx-auto"
            >
              Partner with us to scale traceable, sustainable marine futures through tech-powered platforms.
            </motion.p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="/contact"
              className="inline-flex items-center bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md transition"
            >
              Contact Us <ChevronRight className="ml-2 w-5 h-5" />
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
