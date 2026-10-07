// TechNest Omnichannel Sales Strategy Dataset (CA1 Requirement F)

export const salesChannels = [
  {
    id: "web",
    name: "TechNest Official Website",
    icon: "Globe",
    tagline: "Primary Direct-to-Consumer (D2C) Engine",
    color: "from-blue-600 to-indigo-600",
    badge: "Core Channel (55% Sales)",
    purpose: "Acts as the central transaction hub offering the full catalog of 25 products, seamless checkout, real-time inventory synchronization, dynamic customer reviews, and order tracking.",
    targetCustomers: "College students, working professionals, and tech researchers who prefer comparing detailed technical specifications, reading verified reviews, and selecting preferred payment methods.",
    exampleActivity: "Flash Deal of the Day: Offering 50% discount on the TechNest Mechanical Keyboard with countdown banners and automated bundle recommendations at checkout.",
    keyMetrics: {
      share: "55%",
      conversionRate: "3.8%",
      avgOrderValue: "₹2,150",
      monthlyTraffic: "125,000 Visits"
    },
    actionLabel: "Visit Storefront",
    actionLink: "shop"
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business API",
    icon: "MessageSquare",
    tagline: "Conversational Commerce & Real-time Support",
    color: "from-emerald-500 to-teal-600",
    badge: "High Engagement (18% Sales)",
    purpose: "Enables instant 1-to-1 conversational selling, automated catalog browsing inside WhatsApp, instant order tracking notifications, abandoned cart recovery nudges, and prompt customer grievance resolution.",
    targetCustomers: "Mobile-first Indian consumers who prefer chatting directly, inquiring about delivery pin code viability, or requesting quick product recommendations without creating formal website accounts.",
    exampleActivity: "Broadcast Push: 'TechNest Fest – Smart Deals for Everyone' campaign with interactive quick-reply buttons ('Shop Now', 'View Specs', 'Speak with Specialist').",
    keyMetrics: {
      share: "18%",
      conversionRate: "14.2%",
      avgOrderValue: "₹1,650",
      openRate: "86.0%"
    },
    actionLabel: "View WhatsApp Campaign",
    actionLink: "whatsapp-campaign"
  },
  {
    id: "instagram",
    name: "Instagram Shop & Social Commerce",
    icon: "Instagram",
    tagline: "Visual Storytelling & Gen-Z Micro-Influencers",
    color: "from-pink-500 via-rose-500 to-amber-500",
    badge: "Fastest Growing (12% Sales)",
    purpose: "Showcases aesthetic workspace setups, reel unboxing videos, desk aesthetic transformations, student study vlog collaborations, and direct in-app product tagging via Instagram Shop.",
    targetCustomers: "College youth and creative professionals aged 18–28 looking for visually appealing desk setups, aesthetic accessories, and trending tech gadgets.",
    exampleActivity: "Reels Campaign: '#StudyWithTechNest' featuring engineering students organizing minimal hostel study desks using the Flex Laptop Stand and Smart LED Desk Lamp.",
    keyMetrics: {
      share: "12%",
      conversionRate: "2.4%",
      avgOrderValue: "₹1,850",
      followers: "42,800 Followers"
    },
    actionLabel: "Explore Social Feed",
    actionLink: "shop"
  },
  {
    id: "facebook",
    name: "Facebook Marketplace & Community Groups",
    icon: "Facebook",
    tagline: "Demographic Reach & Community Discussions",
    color: "from-blue-700 to-blue-900",
    badge: "Value Segment (8% Sales)",
    purpose: "Leverages targeted Meta carousel ads, tech gadget review groups, community discussion boards, and university student buy/sell groups to drive cost-effective retargeting.",
    targetCustomers: "Cost-conscious shoppers, working parents buying study gadgets for teenagers, and second-tier city consumers looking for proven budget reliability.",
    exampleActivity: "Meta Dynamic Product Ads (DPA): Retargeting users who viewed the PowerMax 20000mAh Power Bank with customer testimonial snippets and a limited 10% coupon code.",
    keyMetrics: {
      share: "8%",
      conversionRate: "2.1%",
      avgOrderValue: "₹1,420",
      roas: "3.4x ROAS"
    },
    actionLabel: "View Community",
    actionLink: "reviews"
  },
  {
    id: "email",
    name: "Email Marketing & Automated Newsletters",
    icon: "Mail",
    tagline: "Customer Retention & Lifecycle Remarketing",
    color: "from-purple-600 to-indigo-800",
    badge: "High Margin (7% Sales)",
    purpose: "Drives customer lifetime value (LTV) through automated post-purchase onboarding emails, warranty registration reminders, educational blog newsletters, and early VIP access to festive deals.",
    targetCustomers: "Existing customers, subscribers to the TechNest tech blog, and academic campus ambassadors who appreciate thoughtful buying guides and exclusive promo codes.",
    exampleActivity: "Bi-weekly Tech Digest: 'Top 5 Tech Hacks for Semester Exams' featuring embedded links to the TechNest Pro Wireless Mouse and fast chargers.",
    keyMetrics: {
      share: "7%",
      conversionRate: "4.6%",
      avgOrderValue: "₹2,380",
      clickToOpenRate: "22.5%"
    },
    actionLabel: "Read Blogs",
    actionLink: "blogs"
  }
];
