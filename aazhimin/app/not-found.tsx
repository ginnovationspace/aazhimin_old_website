'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-teal-100 text-gray-800 px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-500"
          >
            404
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-xl sm:text-2xl text-gray-700 max-w-lg"
          >
            Oops! We couldn’t find the page you’re looking for.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg transition"
            onClick={() => router.push('/')}
          >
            <ArrowLeftCircle className="w-5 h-5 mr-2" />
            Go Back Home
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 bg-wave-pattern bg-no-repeat bg-bottom opacity-20"
        />
      </main>

      <Footer />
    </>
  );
}
