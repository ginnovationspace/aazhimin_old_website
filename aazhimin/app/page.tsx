// pages/index.tsx
import type { NextPage } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import HeroBanner from '@/components/HeroBanner/SwipeBanner';
import MissionComponent from '@/components/Box_model/box_model';
import { sections } from '@/components/Utils/Constants';

interface Banner {
  title: string;
  subtitle: string;
  cta?: string;
  ctaLink?: string;
  theme?: 'water' | 'agriculture' | 'sunrise' | 'deepsea' | 'sunset' | 'urban' | 'forest' | 'sand' | 'ice' | 'midnight' | 'fire';
}

const banners: Banner[] = [
  {
    title: 'Digitizing India’s Marine Supply Chain',
    subtitle: 'Aazhimin empowers coastal producers with blockchain traceability, solar-powered cold-chains, and direct access to buyers across India.',
    cta: 'See How It Works',
    theme: 'water',
  },
  {
    title: 'Green Cold-Chain. Guaranteed Freshness.',
    subtitle: 'Our solar-enabled hubs and AI-optimized logistics ensure next-day delivery and 20% lower spoilage for seafood businesses.',
    cta: 'Explore Our Logistics',
    theme: 'ice',
  },
  {
    title: 'Empowering Producers, Serving Cities',
    subtitle: 'Aazhimin connects 200+ rural fishers and farmers to modern markets with transparent pricing, fair payments, and reliable fulfillment.',
    cta: 'Join Our Network',
    theme: 'urban',
  },
  {
    title: 'Trace Every Catch in Real Time',
    subtitle: 'End-to-end blockchain tracking from net to plate ensures authenticity and boosts export compliance.',
    cta: 'Discover Traceability',
    theme: 'deepsea',
  },
  {
    title: 'Smart Hubs Powered by Renewables',
    subtitle: 'Our coastal aggregation centers run on solar micro-grids, reducing carbon footprint and energy costs.',
    cta: 'View Our Hubs',
    theme: 'sunrise',
  },
  {
    title: 'AI-Driven Quality Grading',
    subtitle: 'Automated vision systems classify and sort seafood by size, weight, and freshness with 99% accuracy.',
    cta: 'See Grading in Action',
    theme: 'forest',
  },
  {
    title: 'Women-Led Fishery Cooperatives',
    subtitle: 'Supporting over 50 women’s self-help groups with training, market access, and micro-financing.',
    cta: 'Learn More',
    theme: 'sand',
  },
  {
    title: 'Zero-Waste Processing',
    subtitle: 'Turning by-products into fish oil, collagen, and chitosan for high-value nutraceuticals.',
    cta: 'Explore By-products',
    theme: 'sunset',
  },
  {
    title: 'Community Health & Safety',
    subtitle: 'On-site training programs on hygiene, handling, and maritime safety for coastal communities.',
    cta: 'Join a Workshop',
    theme: 'midnight',
  },
  {
    title: 'Climate-Resilient Fisheries',
    subtitle: 'Data-driven models help fishers adapt to changing sea temperatures and preserve livelihoods.',
    cta: 'See Resilience Tools',
    theme: 'agriculture',
  },
  {
    title: 'Digital Contracts in Seconds',
    subtitle: 'Generate, sign, and verify trade documents on our platform—no paperwork, no delays.',
    cta: 'Get Started',
    theme: 'fire',
  },
  {
    title: 'B2B Wholesale Marketplace',
    subtitle: 'Connect directly with chefs, hotels, and exporters through our curated seafood exchange.',
    cta: 'Browse Deals',
    theme: 'sunset',
  },
  {
    title: 'R&D-Backed Sustainability',
    subtitle: 'Partner with our marine lab to co-develop eco-friendly fishing gear and aquaculture best practices.',
    cta: 'Partner With Us',
    theme: 'forest',
  },
];



const Home: NextPage = () => { 
  return (
    <div className="">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroBanner banners={banners} />

        {/* Mission Sections */}
        {sections.map((section, idx) => (
          <MissionComponent key={idx} sectionId={idx + 1} sections={[section]} />
        ))}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
