'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const technologyCategories = [
  {
    category: 'Autonomous Systems',
    items: [
      {
        name: 'CatchBot',
        href: '/technology/catchbot',
        description: 'Autonomous fishing drones with species recognition and quota control.'
      },
      {
        name: 'CargoFin',
        href: '/technology/cargofin',
        description: 'Autonomous marine logistics vessels for fish, fuel, and supply transport.'
      },
      {
        name: 'PortGrid',
        href: '/technology/portgrid',
        description: 'Smart robotic ports with scheduling, thermal imaging, and customs automation.'
      },
      {
        name: 'SkyFleet',
        href: '/technology/skyfleet',
        description: 'Coordinated drone swarms for surveillance, patrol, and marine search and rescue.'
      },
      {
        name: 'DropNet',
        href: '/technology/dropnet',
        description: 'Autonomous aerial drones for port-to-vessel and island delivery logistics.'
      }
    ]
  },
  {
    category: 'Environmental Intelligence',
    items: [
      {
        name: 'OceanIQ',
        href: '/technology/oceaniq',
        description: 'Sensor mesh for weather, fish density, route optimization, and alerts.'
      },
      {
        name: 'EcoVault',
        href: '/technology/ecovault',
        description: 'ESG accounting for carbon, plastic, biodiversity, and bycatch.'
      },
      {
        name: 'BlueTwin',
        href: '/technology/bluetwin',
        description: 'Digital twin simulations of ocean spaces for forecasting and planning.'
      },
      {
        name: 'HorizonAI',
        href: '/technology/horizonai',
        description: 'Predictive AI for ocean futures based on biology, climate, and trade.'
      }
    ]
  },
  {
    category: 'Governance Systems',
    items: [
      {
        name: 'SeaLedger',
        href: '/technology/sealedger',
        description: 'Blockchain-based record of catch, transit, and compliance with full traceability.'
      },
      {
        name: 'RegNet',
        href: '/technology/regnet',
        description: 'AI engine for real-time validation of maritime regulations and rules.'
      }
    ]
  },
  {
    category: 'BlueTech Systems',
    items: [
      {
        name: 'Fleet & Compliance IoT',
        href: '/technology/fleet-compliance-iot',
        description: 'Track vessel trips, catch logs, and regulatory status in real time.'
      },
      {
        name: 'Cold Chain Intelligence',
        href: '/technology/cold-chain-intelligence',
        description: 'Smart reefer units and sensors ensuring cold chain compliance.'
      },
      {
        name: 'Smart Weighing & Sorting',
        href: '/technology/weighing-sorting',
        description: 'Automated grading and sorting systems for catch efficiency and accuracy.'
      },
      {
        name: 'Catch Monitoring Systems',
        href: '/technology/catch-monitoring',
        description: 'Real-time onboard systems for logging catch size, species, and origin.'
      },
      {
        name: 'Aazhimin Control Hub',
        href: '/technology/control-hub',
        description: 'Central platform to manage inventory, traceability, quality, and trade.'
      },
      {
        name: 'Digital Contracts & Docs',
        href: '/technology/contracts-docs',
        description: 'Secure generation and verification of trade and regulatory documents.'
      },
      {
        name: 'Last-Mile Delivery',
        href: '/technology/last-mile-delivery',
        description: 'Optimized logistics for seafood distribution from dock to destination.'
      },
      {
        name: 'B2B Marketplace',
        href: '/technology/b2b-marketplace',
        description: 'Wholesale seafood trading platform for verified buyers and sellers.'
      },
      {
        name: 'Wholesale Tech',
        href: '/technology/wholesale-tech',
        description: 'Tools and systems tailored for large-scale distributors and logistics.'
      }
    ]
  }
];


export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen mt-20 px-6 py-20 bg-white text-gray-900">
        <h1 className="text-4xl font-bold mb-16 text-center text-teal-800">
          Aazhimin Technology Stack
        </h1>

        <div className="max-w-6xl mx-auto space-y-16">
          {technologyCategories.map((group, groupIdx) => (
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
      <Footer />
    </>
  );
}
