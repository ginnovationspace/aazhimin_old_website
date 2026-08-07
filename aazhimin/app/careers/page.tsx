'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock,ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  applyLink: string;
}

const openRoles: Job[] = [
  {
    id: 'j1',
    title: 'Full-Stack Engineer',
    location: 'Remote / Chennai',
    type: 'Full-Time',
    description:
      'Build and maintain our marine-tech platform. React, Node.js, PostgreSQL experience a plus.',
    applyLink: '/careers/full-stack-engineer',
  },
  {
    id: 'j2',
    title: 'DevOps Engineer',
    location: 'Bengaluru Office',
    type: 'Full-Time',
    description:
      'Own CI/CD, infrastructure as code, and cloud operations (AWS/GCP).',
    applyLink: '/careers/devops-engineer',
  },
  {
    id: 'j3',
    title: 'Product Designer',
    location: 'Remote',
    type: 'Contract',
    description:
      'Design intuitive interfaces and flows for fishermen, distributors, and enterprise dashboards.',
    applyLink: '/careers/product-designer',
  },
  {
    id: 'j4',
    title: 'Marine Data Scientist',
    location: 'Kochi Office',
    type: 'Full-Time',
    description:
      'Analyze catch & supply-chain data; build ML models for yield optimization.',
    applyLink: '/careers/data-scientist',
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main className="mt-20 text-gray-800">
        {/* Hero */}
        <section className="relative flex items-center justify-center h-64 bg-gradient-to-br from-teal-400 to-blue-500 text-white">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-6"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
              Join Our Team
            </h1>
            <p className="text-lg sm:text-xl">
              Be part of Aazhimin’s mission to transform the blue economy.
            </p>
          </motion.div>
        </section>

        {/* Open Roles */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Current Openings
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {openRoles.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                  <Briefcase className="w-6 h-6 text-teal-500 mr-2" />
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-1" /> {job.location}
                  <span className="mx-2">&bull;</span>
                  <Clock className="w-5 h-5 mr-1" /> {job.type}
                </p>
                <p className="text-gray-700 mb-6">{job.description}</p>
                <a
                  href={job.applyLink}
                  className="inline-flex items-center text-teal-600 font-medium hover:underline"
                >
                  Apply Now
                  <ChevronRight className="ml-1 w-5 h-5" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 px-6 bg-gradient-to-r from-blue-50 to-teal-50 text-center rounded-lg mx-6 md:mx-auto md:max-w-4xl shadow-inner">
          <motion.h2
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900 mb-3"
          >
            Don’t see a role that fits?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-700 mb-6"
          >
            Send us your resume at{' '}
            <a
              href="mailto:careers@aazhimin.com"
              className="text-teal-600 hover:underline"
            >
              careers@aazhimin.com
            </a>
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full shadow-lg"
          >
            Reach Out
            <ChevronRight className="ml-2 w-5 h-5" />
          </motion.button>
        </section>
      </main>

      <Footer />
    </>
  );
}
