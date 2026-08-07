'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import productData from './products.json';

import {
  Brain,
  Cloud,
  Shield,
  Rocket,
  Anchor,
  FishSymbol,
  Globe,
  ScanSearch,
  Thermometer,
  ShipWheel,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Cloud,
  Shield,
  Rocket,
  Anchor,
  FishSymbol,
  Globe,
  ScanSearch,
  Thermometer,
  ShipWheel,
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Reusable UI components
const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className={`bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg p-6 ${className}`}
  >
    {children}
  </motion.div>
);

const Section = ({
  id,
  className = '',
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeUp}
    className={`transition-all duration-700 ${className}`}
  >
    {children}
  </motion.section>
);

export default function ProductClient() {
  const { slug } = useParams() as { slug: string };
  const product = productData.products.find((p) => p.slug === slug);

  if (!product) return <div className="text-center mt-20 text-red-600 text-xl">Product not found.</div>;

  const { hero, features, valueProps, techSpecs, success, faqs, comparisons, comparisonColumns, partners } = product;

  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-gray-900 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-28 pb-20 px-6 lg:px-20 text-center">
        <motion.h1 className="text-5xl md:text-6xl font-extrabold text-emerald-800 mb-6 tracking-tight">
          {hero.title}
        </motion.h1>
        <motion.p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700">{hero.description}</motion.p>
        {hero.cta && (
          <Link
            href={hero.cta.target}
            className="mt-8 inline-block px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition"
          >
            {hero.cta.text}
          </Link>
        )}
      </Section>

      {/* Image Banner */}
      <Section className="max-w-7xl mx-auto px-6 lg:px-20">
        <Card>
          <Image
            src={`/Assets/images/products/${hero.image}`}
            alt={hero.title}
            width={1400}
            height={700}
            className="w-full h-auto object-cover rounded-xl"
            priority
          />
        </Card>
      </Section>

      {/* Features */}
      {features && features.length > 0 && (
        <Section id="features" className="py-20 px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">Key Features</h2>
          <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
            {features.map((f) => {
              const Icon = iconMap[f.icon];
              return (
                <Card key={f.title} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-emerald-100 rounded-full text-emerald-600">
                      {Icon && <Icon className="w-6 h-6" />}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </Card>
              );
            })}
          </div>
        </Section>
      )}

      {/* Value Propositions */}
      {valueProps && (
        <Section className="py-20 px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">Why It Matters</h2>
          <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
            {valueProps.map((v) => {
              const Icon = iconMap[v.icon];
              return (
                <motion.div key={v.title} className="flex items-start space-x-4" variants={fadeUp}>
                  {Icon && <Icon className="p-2 bg-emerald-100 rounded-lg text-emerald-600 w-6 h-6" />}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{v.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Section>
      )}

      {/* Technical Specs */}
      {techSpecs && (
        <Section className="py-20 px-6 lg:px-20 bg-emerald-50">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">Technical Specifications</h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {techSpecs.map((spec) => (
              <Card key={spec.title}>
                <h4 className="text-xl font-semibold text-emerald-700 mb-4">{spec.title}</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {spec.items.map((item) => (
                    <li
                      key={item}
                      className="bg-white border border-emerald-100 px-4 py-2 rounded-xl shadow-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* Field Success */}
      {success && (
        <Section className="py-20 px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">In the Field</h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {success.map((item) => (
              <Card key={item.title}>
                <h4 className="text-lg font-semibold text-emerald-700">{item.title}</h4>
                <p className="text-sm text-gray-700 mt-2">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* FAQs */}
      {faqs && (
        <Section className="py-20 px-6 lg:px-20 bg-gray-100">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="bg-white p-4 rounded-lg shadow">
                <summary className="cursor-pointer font-medium text-emerald-700 hover:underline">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>
      )}

      {/* Comparison */}
      {comparisons && comparisonColumns && (
        <Section className="py-20 px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg">
            <table className="w-full text-sm bg-white border-collapse">
              <thead className="bg-emerald-100 text-emerald-800">
                <tr>
                  {comparisonColumns.map((col, i) => (
                    <th key={i} className="px-6 py-4 text-left font-semibold">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-emerald-50/40'}`}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-6 py-4 border-t">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      {/* Partners */}
      {/* {partners && (
        <Section className="py-20 px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center max-w-6xl mx-auto">
            {partners.map((logo, idx) => (
              <Image
                key={idx}
                src={`/Assets/images/logo/partners/${logo}`}
                alt={`Partner ${idx + 1}`}
                width={120}
                height={60}
                className="opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </Section>
      )} */}

      {/* CTA */}
      <Section className="mt-20 mb-12 bg-emerald-800 py-16 text-center text-white px-6 lg:px-20 lg:rounded-3xl mx-auto max-w-4xl">
        <h3 className="text-3xl font-bold mb-4">Want to Bring This to Your Port?</h3>
        <p className="mb-6 text-lg text-emerald-100">Talk to our team and get your custom traceability solution.</p>
        <Link href="/contact" className="inline-block bg-white text-emerald-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
          Contact Aazhimin
        </Link>
      </Section>

      <Footer />
    </main>
  );
}
