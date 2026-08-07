export type NavItem = {
  label: string;
  path?: string;
  href?: string;
  dropdownItems?: NavItem[];
  sections?: {
    title: string;
    items: { label: string; path: string }[];
  }[];
};

export const navItems: NavItem[] = [
  {
    label: 'Products',
    path: '/products',
    sections: [
      {
        title: 'Seafood Categories',
        items: [
          { label: 'Wild Catch', path: '/products/wild-catch' },
          { label: 'Mariculture', path: '/products/mariculture' },
          { label: 'Shellfish', path: '/products/shellfish' },
          { label: 'Speciality Marine Foods', path: '/products/speciality-marine-foods' },
        ],
      },
      {
        title: 'Ocean Produce',
        items: [
          { label: 'Fresh Seafood', path: '/products/fresh-seafood' },
          { label: 'Ready-to-Cook', path: '/products/ready-to-cook' },
          { label: 'Frozen Seafood', path: '/products/frozen-seafood' },
          { label: 'Byproducts & Extracts', path: '/products/byproducts-extracts' },
          { label: 'Consumer Packs', path: '/products/consumer-packs' },
          { label: 'Bulk Orders', path: '/products/bulk-orders' },
        ],
      },
    ],
  },

  {
    label: 'Technology',
    path: '/technology',
    sections: [
      {
        title: 'BlueTech Systems',
        items: [
          { label: 'Fleet & Compliance IoT', path: '/technology/fleet-compliance-iot' },
          { label: 'Cold Chain Intelligence', path: '/technology/cold-chain-intelligence' },
          { label: 'Smart Weighing & Sorting', path: '/technology/weighing-sorting' },
          { label: 'Catch Monitoring Systems', path: '/technology/catch-monitoring' },
          { label: 'Aazhimin Control Hub', path: '/technology/control-hub' },
          { label: 'Digital Contracts & Docs', path: '/technology/contracts-docs' },
        ],
      },
      {
        title: 'Autonomous Systems',
        items: [
          { label: 'CatchBot', path: '/technology/catchbot' },
          { label: 'CargoFin', path: '/technology/cargofin' },
          { label: 'PortGrid', path: '/technology/portgrid' },
          { label: 'SkyFleet', path: '/technology/skyfleet' },
          { label: 'DropNet', path: '/technology/dropnet' },
        ],
      },
      {
        title: 'Environmental Intelligence',
        items: [
          { label: 'OceanIQ', path: '/technology/oceaniq' },
          { label: 'EcoVault', path: '/technology/ecovault' },
          { label: 'BlueTwin', path: '/technology/bluetwin' },
          { label: 'HorizonAI', path: '/technology/horizonai' },
        ],
      },
      {
        title: 'Governance Systems',
        items: [
          { label: 'SeaLedger', path: '/technology/sealedger' },
          { label: 'RegNet', path: '/technology/regnet' },
        ],
      },
    ],
  },

  {
    label: 'Impact & Development',
    path: '/impact',
    sections: [
      {
        title: 'Community & Sustainability',
        items: [
          { label: 'Marine R&D Lab', path: '/impact/research-lab' },
          { label: 'Women in Fisheries', path: '/impact/women-in-fisheries' },
          { label: 'Community Outreach', path: '/impact/community-outreach' },
          { label: 'Safety & Training', path: '/impact/safety-training' },
        ],
      },
      {
        title: 'Climate & Zero Waste',
        items: [
          { label: 'Zero Waste', path: '/impact/zero-waste' },
          { label: 'Climate Resilience', path: '/impact/climate-resilience' },
        ],
      },
      {
        title: 'Safety & Resilience',
        items: [
          { label: 'SafeCast', path: '/impact/safecast' },
          { label: 'CleanHull', path: '/impact/cleanhull' },
        ],
      },
    ],
  },

  {
    label: 'Company',
    dropdownItems: [
      { label: 'About Us', path: '/about' },
      { label: 'GInnovation', path: 'https://ginnovationspace.com/' },
      { label: 'Careers', path: '/careers' },
      // { label: 'Newsroom', path: '/news' },
      { label: 'Investors', path: '/investors' },
      { label: 'Contact', path: '/contact' },
    ],
  },

  {
    label: 'Shop',
    dropdownItems: [
      { label: 'B2C Storefront', path: '/shop/b2c' },
      { label: 'B2B Wholesale', path: '/shop/b2b' },
    ],
  },
];



export interface SectionItem {
  id: number;
  name: string;
  description: string;
  image: string;
  href: string;
}

export interface Section {
  title: string;
  items: SectionItem[];
}

export const sections: Section[] = [
  {
    title: 'Traceable Coastal Commerce',
    items: [
      { id: 1, name: 'Wild Catch Division', description: 'Sustainable sourcing of seafood with vessel-level traceability and catch verification.', image: '/Assets/images/seafood/Wild.png', href: '/products/wild-catch' },
      { id: 2, name: 'Mariculture Units', description: 'Controlled aquaculture with digital monitoring for quality and compliance.', image: '/Assets/images/seafood/mariculture.png', href: '/products/mariculture' },
      { id: 3, name: 'Landing Centres', description: 'Geo-tagged coastal hubs for catch weighing, logging, and certification.', image: '/Assets/images/seafood/landing.png', href: '/products/landing-centres' },
      { id: 4, name: 'Harvest Certification', description: 'Catch origin, sustainability, and vessel-level digital certification.', image: '/Assets/images/seafood/certification.png', href: '/products/harvest-certification' },
      { id: 19, name: 'Shellfish', description: 'Includes crabs, lobsters, and other shellfish varieties sourced sustainably.', image: '/Assets/images/seafood/shellfish.png', href: '/products/shellfish' },
    ],
  },
  {
    title: 'Smart Ocean Produce',
    items: [
      { id: 5, name: 'Fresh Seafood Line', description: 'Hygienically packed traceable seafood for regional distribution.', image: '/Assets/images/seafood/fresh_fish.png', href: '/products/fresh-seafood' },
      { id: 6, name: 'Ready-to-Cook Packs', description: 'Portioned seafood with QR-enabled traceability to harvest source.', image: '/Assets/images/seafood/Ready-to-Cook.png', href: '/products/ready-to-cook' },
      { id: 7, name: 'Frozen Blocks & IQF', description: 'Export-grade frozen seafood with cold-chain trace assurance.', image: '/Assets/images/seafood/frozen_blocks.png', href: '/products/frozen-seafood' },
      { id: 8, name: 'Byproducts & Extracts', description: 'High-value extracts from seafood waste to support zero-waste goals.', image: '/Assets/images/seafood/byproducts.png', href: '/products/byproducts-extracts' },
      { id: 20, name: 'Speciality Marine Foods', description: 'Value-added seafood like pickles and meals for niche markets.', image: '/Assets/images/seafood/speciality.png', href: '/products/speciality-marine-foods' },
      { id: 21, name: 'Consumer Packs', description: 'Packaged seafood products tailored for consumer retail markets.', image: '/Assets/images/seafood/consumer-packs.png', href: '/products/consumer-packs' },
      { id: 22, name: 'Bulk Orders', description: 'Large quantity seafood sales for institutional and wholesale buyers.', image: '/Assets/images/seafood/bulk-orders.png', href: '/products/bulk-orders' },
    ],
  },
  {
    title: 'Digital Ocean Infrastructure',
    items: [
      { id: 9, name: 'Fleet & Compliance IoT', description: 'Smart trackers and onboard IoT to monitor trips, capacity, and compliance.', image: '/Assets/images/seafood/fleet-iot.png', href: '/technology/fleet-compliance-iot' },
      { id: 10, name: 'Cold Chain Intelligence', description: 'Temperature-logged smart storage and reefer trucks with live trace alerts.', image: '/Assets/images/seafood/cold-chain.png', href: '/technology/cold-chain-intelligence' },
      { id: 11, name: 'Catch Monitoring Systems', description: 'Onboard systems to log catch size, species, and location in real-time.', image: '/Assets/images/seafood/catch-monitoring.png', href: '/technology/catch-monitoring' },
      { id: 12, name: 'Trade Infrastructure', description: 'B2B Marketplace, digital contracts, payments, and wholesale integration.', image: '/Assets/images/seafood/b2b-marketplace.png', href: '/technology/b2b-marketplace' },
      { id: 13, name: 'Aazhimin Control Hub', description: 'Unified command center to manage supply chain, trade, and data analytics.', image: '/Assets/images/seafood/hub.png', href: '/technology/control-hub' },
      { id: 23, name: 'Digital Contracts & Docs', description: 'Generate, sign, and verify trade documents, quality reports, and licenses online.', image: '/Assets/images/seafood/contracts.png', href: '/technology/contracts-docs' },
      { id: 24, name: 'Smart Fishing Tools', description: 'Advanced tools and devices to enhance fishing efficiency and sustainability.', image: '/Assets/images/seafood/fishing-tools.png', href: '/technology/smart-fishing-tools' },
      { id: 25, name: 'Last-Mile Delivery', description: 'Optimized delivery systems to ensure seafood reaches consumers fresh and on time.', image: '/Assets/images/seafood/last-mile-delivery.png', href: '/technology/last-mile-delivery' },
      { id: 26, name: 'Wholesale Tech', description: 'Technology solutions tailored for large-scale seafood wholesalers and distributors.', image: '/Assets/images/seafood/wholesale-tech.png', href: '/technology/wholesale-tech' },
    ],
  },
  {
    title: 'Autonomous Ocean Systems',
    items: [
      { id: 27, name: 'CatchBot', description: 'Autonomous fishing drones with species recognition, quota control, and ethical deployment.', image: '/Assets/images/seafood/catchbot.png', href: '/technology/catchbot' },
      { id: 28, name: 'CargoFin', description: 'Autonomous marine logistics units for delivering fish, fuel, or supplies.', image: '/Assets/images/seafood/cargofin.png', href: '/technology/cargofin' },
      { id: 29, name: 'PortGrid', description: 'Robotic ports with thermal imaging, scheduling, unloading arms, and customs automation.', image: '/Assets/images/seafood/portgrid.png', href: '/technology/portgrid' },
      { id: 30, name: 'SkyFleet', description: 'Coordinated drone swarms for patrols, surveys, and search and rescue.', image: '/Assets/images/seafood/skyfleet.png', href: '/technology/skyfleet' },
      { id: 31, name: 'DropNet', description: 'Autonomous delivery drones for port-to-vessel and island logistics.', image: '/Assets/images/seafood/dropnet.png', href: '/technology/dropnet' },
    ],
  },
  {
    title: 'Ecological Intelligence',
    items: [
      { id: 32, name: 'OceanIQ', description: 'Sensor mesh for weather, route optimization, fish density, and environmental alerts.', image: '/Assets/images/seafood/oceaniq.png', href: '/technology/oceaniq' },
      { id: 33, name: 'EcoVault', description: 'ESG accounting for carbon, plastic, biodiversity, emissions, and bycatch.', image: '/Assets/images/seafood/ecovault.png', href: '/technology/ecovault' },
      { id: 34, name: 'BlueTwin', description: 'Digital twin simulations for ocean spaces and planning scenarios.', image: '/Assets/images/seafood/bluetwin.png', href: '/technology/bluetwin' },
      { id: 35, name: 'HorizonAI', description: 'Predictive intelligence for ocean futures based on trade, biology, and climate.', image: '/Assets/images/seafood/horizonai.png', href: '/technology/horizonai' },
    ],
  },
  {
    title: 'Programmable Governance',
    items: [
      { id: 36, name: 'SeaLedger', description: 'Tamper-proof record of catch, inspection, transit, and sale with cryptographic integrity.', image: '/Assets/images/seafood/sealedger.png', href: '/technology/sealedger' },
      { id: 37, name: 'RegNet', description: 'AI law interpreter for real-time rule validation and maritime compliance.', image: '/Assets/images/seafood/regnet.png', href: '/technology/regnet' },
    ],
  },
  {
    title: 'Ecosystem & Impact',
    items: [
      { id: 14, name: 'Marine R&D Lab', description: 'Innovation in aquatech, hatchery optimization, and ecological modeling.', image: '/Assets/images/seafood/Research.png', href: '/impact/research-lab' },
      { id: 15, name: 'Women in Fisheries', description: 'Upskilling women in value chains and digital seafood operations.', image: '/Assets/images/seafood/women.png', href: '/impact/women-in-fisheries' },
      { id: 16, name: 'Community Outreach', description: 'Health, literacy, and inclusion programs in fishing villages.', image: '/Assets/images/seafood/community.png', href: '/impact/community-outreach' },
      { id: 17, name: 'Zero Waste Targets', description: 'Circular practices to eliminate waste across harvest and production.', image: '/Assets/images/seafood/zerowaste.png', href: '/impact/zero-waste' },
      { id: 18, name: 'Climate Resilience Planning', description: 'Predictive adaptation tools to manage ocean and climate shifts.', image: '/Assets/images/seafood/climate.png', href: '/impact/climate-resilience' },
    ],
  },
];








// Footer columns derived from navItems
export interface FooterColumn {
  title: string;
  items: { label: string; href: string }[];
}

const navItemsToInclude = navItems.filter((nav) => nav.label !== 'Home');

export const footerColumns: FooterColumn[] = navItemsToInclude.map((nav) => ({
  title: nav.label,
  items: nav.sections
    ? nav.sections.flatMap((sec) =>
        sec.items.map((item) => ({
          label: item.label,
          href: item.path, // ✅ map path → href
        }))
      )
    : nav.dropdownItems
    ? nav.dropdownItems.map((item) => ({
        label: item.label,
        href: item.path ?? item.href ?? '',
      }))
    : [{ label: nav.label, href: nav.path ?? nav.href ?? '' }],
}));

// Social links
export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  // { label: 'Facebook', href: 'https://facebook.com/kazhaneer' },
  // { label: 'Twitter', href: 'https://twitter.com/kazhaneer' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/aazhimin/' },
  { label: 'Instagram', href: 'https://www.instagram.com/aazhimin' },
];
