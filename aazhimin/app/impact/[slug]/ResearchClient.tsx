'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import impactData from './impact.json'; // Ensure this is a flat array
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import {
  Brain,
  Rocket,
  Cloud,
  Shield,
  Code,
  BookOpen,
  Users,
  Globe,
  Video,
  Wrench,
  MoveVertical,
  Waves,
  ThermometerSnowflake,
  SlidersHorizontal,
  BarChart3,Recycle,Factory,
  ShieldCheck,
  ActivitySquare,
  CloudRain
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Brain,
  Rocket,
  Cloud,
  Shield,
  Code,
  BookOpen,
  Users,
  Globe,
  Video,
  Wrench,
  MoveVertical,
  Waves,
  ThermometerSnowflake,
  SlidersHorizontal,
  BarChart3,Recycle,Factory,
  ShieldCheck,
  ActivitySquare,
  CloudRain
};

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const hoverScale = {
  scale: 1.03,
  transition: { type: 'spring' as const, stiffness: 200 }
};

export default function ImpactClient() {
  const { slug } = useParams() as { slug: string };

  // FIXED: Removed `.impact` since JSON is likely a flat array
  const item = (impactData as any).impact.find((r: any) => r.slug === slug);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  if (!item) {
    return <div className="py-20 text-center text-[#F2545B]">Impact program not found.</div>;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <motion.section className="py-28 px-6 lg:px-32 bg-[#E6F4F1] text-center" initial="hidden" animate="visible" variants={reveal}>
          <h1 className="text-5xl font-bold text-navy mb-4">{item.title}</h1>
          <p className="text-xl max-w-3xl mx-auto text-sea">{item.subtitle}</p>
        </motion.section>

        {/* Overview */}
        <motion.section className="py-20 px-6 lg:px-32 bg-[#F6FBFD]" initial="hidden" whileInView="visible" variants={reveal}>
          <h2 className="text-3xl font-bold text-navy mb-6 text-center">Overview</h2>
          <p className="text-lg text-center text-sea max-w-3xl mx-auto">{item.overview}</p>
        </motion.section>

        {/* Goals */}
        {item.goals && (
          <motion.section className="py-20 px-6 lg:px-32" initial="hidden" whileInView="visible" variants={reveal}>
            <h2 className="text-3xl font-bold text-navy mb-6 text-center">Goals</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {item.goals.map((g: any, i: number) => {
                const Icon = ICON_MAP[g.icon];
                return (
                  <motion.div key={i} className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm text-center" whileHover={hoverScale}>
                    <Icon className="w-8 h-8 mx-auto mb-4 text-[#5FA8D3]" />
                    <h3 className="text-lg font-semibold text-[#0D1B2A]">{g.title}</h3>
                    <p className="text-sm text-[#555] mt-2">{g.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Activities */}
        {item.activities && (
          <motion.section className="py-20 px-6 lg:px-32 bg-[#F0F9F9]" initial="hidden" whileInView="visible" variants={reveal}>
            <h2 className="text-3xl font-bold text-navy mb-10 text-center">Key Activities</h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {item.activities.map((a: any, i: number) => (
                <motion.div key={i} className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow" whileHover={hoverScale}>
                  <h4 className="text-xl font-semibold text-navy mb-2">{a.title}</h4>
                  <p className="text-sea">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Impact Summary */}
        {item.impact && (
          <motion.section className="py-20 px-6 lg:px-32 bg-[#DFF6F0]" initial="hidden" whileInView="visible" variants={reveal}>
            <h2 className="text-3xl font-bold text-navy mb-6 text-center">Impact</h2>
            <p className="text-lg text-center text-sea max-w-4xl mx-auto">{item.impact}</p>
          </motion.section>
        )}

        {/* Metrics */}
        {item.metrics && (
          <motion.section className="py-20 px-6 lg:px-32" initial="hidden" whileInView="visible" variants={reveal}>
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Key Metrics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {Object.entries(item.metrics).map(([key, value]: any, i: number) => (
                <motion.div key={i} className="bg-white p-6 rounded-xl border text-center border-[#E5E7EB] shadow-md">
                  <h4 className="text-xl font-bold text-blue-700">{value}</h4>
                  <p className="text-sm text-sea capitalize mt-1">{key.replace(/([A-Z])/g, ' $1')}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Partners */}
        {item.partners && (
          <motion.section className="py-20 px-6 lg:px-32 bg-[#E6F2F4]" initial="hidden" whileInView="visible" variants={reveal}>
            <h2 className="text-3xl font-bold text-center text-navy mb-8">Partners</h2>
            <div className="flex flex-wrap gap-8 justify-center">
              {item.partners.map((src: string, i: number) => (
                <motion.div key={i} className="w-32 h-16 relative">
                  <Image
                    src={`/Assets/images/logo/partners/${src}`}
                    alt={`Partner ${i}`}
                    layout="fill"
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* CTA */}
        <motion.section className="py-20 px-6 lg:px-32 bg-blue-900 text-white text-center" initial="hidden" whileInView="visible" variants={reveal}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Movement</h2>
          <p className="text-lg mb-6">Partner with us to drive impact across coastal communities and ecosystems.</p>
          <Link href="/contact" className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Get Involved
          </Link>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
