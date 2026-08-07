'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { motion, easeOut } from 'framer-motion';
import techData from './tech.json';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

// Aazhimin color themes for technology pages
const theme = {
  bgPrimary: 'bg-gradient-to-br from-emerald-50 to-sky-100',
  bgSection: 'bg-white',
  textPrimary: 'text-emerald-800',
  textSecondary: 'text-sky-600',
  ctaBg: 'bg-emerald-600',
  ctaHover: 'hover:bg-emerald-700',
  ctaText: 'text-white',
};

export default function TechnologyClient() {
  const { slug } = useParams();
  const tech = techData.technology.find((t) => t.slug === slug);

  if (!tech) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <p className="text-red-500 text-xl">Technology not found</p>
      </div>
    );
  }

  return (
    <main className={`${theme.bgPrimary} ${theme.textPrimary} min-h-screen`}>  
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-24 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <h1 className="text-5xl font-extrabold mb-4">{tech.title}</h1>
          <p className="text-lg mb-8 text-gray-700">{tech.subtitle}</p>
          {tech.image && (
            <div className="mx-auto w-full max-w-4xl">
              <Image
                src={`/Assets/images/technology/${tech.image}`}
                alt={tech.title}
                width={1200}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
          )}
        </motion.div>
      </section>

      {/* Why This Technology */}
      {tech.why && (
        <motion.section className="py-16 px-6 lg:px-24" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <div className={`${theme.bgSection} rounded-xl p-8 shadow-md`}>  
            <h2 className="text-3xl font-bold mb-4">Why This Technology</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{tech.why}</p>
          </div>
        </motion.section>
      )}

      {/* Where We Use It */}
      {tech.usedIn?.length > 0 && (
        <motion.section className="py-16 px-6 lg:px-24" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <h2 className="text-3xl font-bold text-center mb-10">Where We Use It</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tech.usedIn.map((item, idx) => (
              <div key={idx} className={`${theme.bgSection} border border-gray-200 rounded-xl p-6 shadow-sm`}>
                <h4 className="text-xl font-semibold mb-2 text-secondary">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Key Benefits */}
      {tech.benefits?.length > 0 && (
        <motion.section className="py-16 px-6 lg:px-24" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <h2 className="text-3xl font-bold text-center mb-10">Key Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tech.benefits.map((b, idx) => (
              <div key={idx} className={`${theme.bgSection} border border-gray-200 rounded-xl p-6 shadow-sm`}>
                <h4 className="text-xl font-semibold mb-2 text-secondary">{b.title}</h4>
                <p className="text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Impact Section */}
      {tech.impact && (
        <motion.section className="py-16 px-6 lg:px-24" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <div className={`${theme.bgSection} rounded-xl p-8 shadow-md`}>  
            <h2 className="text-3xl font-bold mb-4 text-center">Impact on Operations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center">{tech.impact}</p>
          </div>
        </motion.section>
      )}

      {/* Call to Action */}
      <motion.section className="py-20 px-6 lg:px-24 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
        <div className={`${theme.ctaBg} rounded-xl p-10 mx-auto max-w-2xl`}>
          <h2 className="text-3xl font-bold mb-4 text-white">Want to explore this technology?</h2>
          <p className="text-white mb-6">Reach out to understand how we deploy this innovation in real-world maritime environments.</p>
          <Link href="/contact" className={`${theme.ctaBg} ${theme.ctaHover} ${theme.ctaText} px-8 py-3 rounded-full font-semibold shadow inline-block`}>Contact / Collaborate</Link>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
