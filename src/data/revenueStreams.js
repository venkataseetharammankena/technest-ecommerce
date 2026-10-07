// TechNest Revenue Generation Streams Dataset (CA2 Requirement K)

export const revenueStreams = [
  {
    id: 1,
    title: "Direct Product Sales",
    roleInModel: "Core Revenue Engine",
    contributionPct: 60,
    margin: "35% - 48%",
    icon: "ShoppingBag",
    color: "from-blue-500 to-indigo-600",
    explanation: "TechNest sources quality-inspected electronics directly from OEM contract manufacturers and sells them directly to end consumers (B2C/D2C) without multi-tier distributor markups, capturing healthy gross retail margins.",
    example: "Selling the TechNest Mechanical Keyboard at ₹2,999 (manufactured and packaged at ₹1,650 unit cost) yields ₹1,349 gross profit per unit.",
    scalability: "High. Scales directly with catalog expansion and paid/organic marketing reach."
  },
  {
    id: 2,
    title: "Product Bundles",
    roleInModel: "AOV Expansion",
    contributionPct: 14,
    margin: "40% - 45%",
    icon: "PackagePlus",
    color: "from-indigo-500 to-purple-600",
    explanation: "Curating synergistic combinations into discounted starter packs encourages consumers to purchase multiple complementary items in one transaction, increasing the Average Order Value (AOV) and optimizing shipping logistics costs.",
    example: "'The Ultimate College Desk Bundle' combining the Flex Laptop Stand (₹1,199), Pro Wireless Mouse (₹899), and Smart LED Lamp (₹1,499) for a bundled package price of ₹3,199 (saving ₹398 for student).",
    scalability: "High. Easy to configure and promotes slow-moving inventory alongside bestsellers."
  },
  {
    id: 3,
    title: "Premium / Extended Warranty (TechNest Shield+)",
    roleInModel: "Pure Profit Add-on",
    contributionPct: 7,
    margin: "80% - 85%",
    icon: "ShieldCheck",
    color: "from-emerald-500 to-teal-600",
    explanation: "Offering optional 1-Year or 2-Year extended accidental damage and replacement protection plans at checkout creates an ultra-high margin recurring service revenue stream with low claim frequencies.",
    example: "Customers adding 1-Year 'TechNest Shield+ Protection' to their Pulse Smartwatch for ₹299 at checkout. With an actuarial claim rate below 4%, 85% of this fee translates directly to net operating income.",
    scalability: "Exceptional. Software-driven margin with zero incremental shipping or manufacturing cost."
  },
  {
    id: 4,
    title: "Accessories Cross-Selling (In-Cart Upsell)",
    roleInModel: "Basket Size Maximization",
    contributionPct: 8,
    margin: "55% - 65%",
    icon: "Layers",
    color: "from-violet-500 to-purple-700",
    explanation: "Intelligent in-cart recommendations trigger impulsive add-ons for high-margin consumable tech sundries like braided cables, screen cleaning kits, cable organizers, and silicone pouches during checkout.",
    example: "When a customer adds the TechNest FastCharge 65W Adapter, an algorithmic modal suggests adding the Type-C Fast Charging Cable for just ₹349, increasing checkout cart value instantly.",
    scalability: "Automated via e-commerce recommendation algorithms at zero customer acquisition cost (CAC)."
  },
  {
    id: 5,
    title: "Promotional Partnerships & Co-branding",
    roleInModel: "Strategic Brand Collaboration",
    contributionPct: 4,
    margin: "70% - 75%",
    icon: "Handshake",
    color: "from-amber-500 to-orange-600",
    explanation: "Collaborating with student fintech applications (e.g., Slice, Uni, Cred), edtech platforms, and collegiate tech symposiums for sponsored landing pages, co-branded vouchers, and promotional newsletter inserts.",
    example: "Partnering with student neo-bank apps to offer an exclusive 'TechNest ₹250 Cashback' voucher to 50,000 enrolled university students for a fixed promotional sponsorship fee.",
    scalability: "Medium. High enterprise relationship value and brand prestige builder."
  },
  {
    id: 6,
    title: "Affiliate Marketing & Software Referrals",
    roleInModel: "Passive Commission Flow",
    contributionPct: 3,
    margin: "90% - 95%",
    icon: "Percent",
    color: "from-pink-500 to-rose-600",
    explanation: "Recommending complementary software tools, cloud storage subscriptions, antivirus suites, or coding bootcamp platforms in TechNest educational blog posts earns recurring affiliate commission payouts per conversion.",
    example: "TechNest blog articles comparing study apps recommend Notion Pro, NordVPN, and Canva Student plans using tracked affiliate links, earning 20% to 30% recurring software referral commissions.",
    scalability: "Evergreen. Compounds steadily with organic blog SEO ranking and readership growth."
  },
  {
    id: 7,
    title: "Featured Product Placements & OEM Showcase",
    roleInModel: "Monetized Platform Real Estate",
    contributionPct: 2,
    margin: "85% - 90%",
    icon: "Sparkles",
    color: "from-cyan-500 to-blue-600",
    explanation: "Offering prime homepage banner hero carousels and top-of-category placement to selected emerging hardware accessory manufacturers seeking immediate visibility among student demographics.",
    example: "Charging third-party smart audio brands a weekly promotional listing fee of ₹15,000 to feature in the 'Editor's Choice Spotlight' banner on the TechNest homepage.",
    scalability: "High once marketplace monthly active user (MAU) thresholds exceed 100k visitors."
  },
  {
    id: 8,
    title: "Repeat Customer Loyalty & Subscription Drops",
    roleInModel: "Lifetime Value (LTV) Engine",
    contributionPct: 2,
    margin: "45% - 50%",
    icon: "Repeat",
    color: "from-green-500 to-emerald-700",
    explanation: "Nurturing existing customers through the 'NestClub' loyalty rewards program, milestone birthday discount codes, and periodic consumable replacement reminders (e.g., cable refreshers and earbud tip upgrades).",
    example: "Retargeting past year buyers of the Pulse Smartwatch with exclusive 40% launch discount on the new TechNest Smart Fitness Band (TN-016), acquiring repeat orders at virtually ₹0 ad spend.",
    scalability: "Very High. Every dollar spent on retention yields 5x the ROI of cold customer acquisition."
  }
];

export const revenueModelFlow = [
  { step: "Direct Product Sales", role: "Main Revenue Anchor", share: "60%", color: "bg-blue-600", border: "border-blue-500" },
  { step: "Bundles & Starter Kits", role: "Higher Average Order Value (AOV)", share: "14%", color: "bg-indigo-600", border: "border-indigo-500" },
  { step: "Cross-Selling Sundries", role: "Increased Cart Basket Size", share: "8%", color: "bg-violet-600", border: "border-violet-500" },
  { step: "Extended Warranty (Shield+)", role: "High-Margin Service Upsell", share: "7%", color: "bg-emerald-600", border: "border-emerald-500" },
  { step: "Brand & Affiliate Partnerships", role: "Pure Commission Revenue", share: "7%", color: "bg-amber-600", border: "border-amber-500" },
  { step: "Customer Retention & Loyalty", role: "Zero-CAC Lifetime Value", share: "4%", color: "bg-rose-600", border: "border-rose-500" }
];
