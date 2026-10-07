// TechNest WhatsApp Marketing Campaign Dataset (CA2 Requirement H)

export const campaignOverview = {
  campaignName: "TechNest Fest – Smart Deals for Everyone",
  tagline: "Unbeatable Deals on Everyday Smart Gear",
  objective: [
    "Increase brand & product awareness across mobile-first student demographic",
    "Generate qualified direct traffic to the TechNest e-commerce portal",
    "Accelerate order volume and conversion rates for CA2 catalog additions",
    "Promote new products (Fitness Band, Mini Projector, 7.1 Gaming Headset)",
    "Encourage repeat purchases and reactivate dormant past customers"
  ],
  targetAudience: [
    "College & University Students (Ages 18–24 seeking budget tech gear)",
    "Young Working Professionals (Remote & hybrid workers needing desk accessories)",
    "Existing TechNest Customers (Buyers of audio & power banks from CA1)",
    "Technology Enthusiasts & Gamers (Looking for high-spec mechanical peripherals)"
  ],
  duration: "7 Days (Festive Semester Kickoff Week)",
  promotionalOffer: "Flat Up to 50% OFF + Extra 10% Instant Discount with coupon code 'TECHNEST10' + Free Express Shipping on orders above ₹999",
  callToAction: "Shop Now on TechNest Storefront or Reply 'DEAL' to Chat Directly",
  expectedResults: "Reach 25,000+ targeted tech shoppers, achieve 85%+ open rates, drive over 5,500 store visits, and generate 800+ completed orders with an ROI of 4.8x."
};

export const sampleMetrics = {
  messagesSent: 25000,
  messagesDelivered: 24650, // 98.6%
  deliveryRate: "98.6%",
  messagesOpened: 21200,    // 86.0%
  openRate: "86.0%",
  linkClicks: 5850,         // 27.6% click-through
  clickRate: "27.6%",
  expectedConversions: 820, // 14.0% of clicks
  conversionRate: "14.0%",
  estimatedRevenue: "₹13,53,000",
  avgOrderValue: "₹1,650",
  campaignCost: "₹28,500 (API & Messaging Cost)",
  estimatedROI: "47.5x Revenue Multiple (3.8x Net Margin)"
};

export const whatsappMessages = [
  {
    id: "msg-1",
    phase: "Day 1: Campaign Launch",
    title: "1. Festive Launch Announcement",
    timestamp: "Monday, 10:00 AM",
    status: "Delivered & Read",
    badge: "Blast 1 (Launch)",
    header: "🎉 TechNest Fest is Officially LIVE! 🚀",
    body: `Hey {{CustomerName}}! 👋

Ready to upgrade your everyday study & work setup? 

✨ TechNest Fest – Smart Deals for Everyone is here! 

🔥 Enjoy up to 50% OFF on all smart electronics:
• 🎧 AirBeat ANC Earbuds – ₹1,899 (Was ₹3,499)
• ⌚ Pulse AMOLED Smartwatch – ₹2,499 (Was ₹4,999)
• ⌨️ Mechanical Brown Switch Keyboard – ₹2,999 (Was ₹5,499)
• 🔋 20000mAh PowerMax Power Bank – ₹1,699 (Was ₹2,999)

🎁 Bonus: Use code *TECHNEST10* at checkout for an extra 10% instant student discount!
🚚 FREE Express Delivery on orders above ₹999.

Hurry! Limited stock available for early birds. 👇`,
    buttons: [
      { text: "🛍️ Shop Now", action: "shop" },
      { text: "👀 View Products", action: "shop" },
      { text: "💬 Contact Support", action: "support" }
    ]
  },
  {
    id: "msg-2",
    phase: "Day 4: Mid-Campaign Spotlight",
    title: "2. New Product Spotlight & Student Bundles",
    timestamp: "Thursday, 2:30 PM",
    status: "Delivered & Read",
    badge: "Blast 2 (Product Promotion)",
    header: "⚡ Just Dropped: 10 New Smart Tech Peripherals!",
    body: `Hi {{CustomerName}},

Meet our freshest additions engineered for peak productivity & entertainment:

🎮 *TechNest 7.1 Surround Gaming Headset* – ₹2,299
🏃 *Smart Fitness Band (5ATM & 14-day battery)* – ₹1,699
🎥 *TechNest 1080p Mini Cinema Projector* – ₹5,499
💾 *1050MB/s NVMe Portable SSD (512GB)* – ₹4,999

🌟 Special Bundle Alert:
Grab the *Study Desk Productivity Kit* (Aluminum Stand + Silent Wireless Mouse + Eye-Care LED Lamp) and save an extra ₹400!

Verified 4.8★ customer rating. 1-Year doorstep replacement warranty on all gadgets.`,
    buttons: [
      { text: "🛍️ Shop Now", action: "shop" },
      { text: "👀 View Products", action: "shop" },
      { text: "💬 Contact Support", action: "support" }
    ]
  },
  {
    id: "msg-3",
    phase: "Day 7: Last-Day Urgency",
    title: "3. Final Hours / Urgency Reminder",
    timestamp: "Sunday, 6:00 PM",
    status: "Delivered & Read",
    badge: "Blast 3 (Final Call)",
    header: "⏳ FINAL CALL: TechNest Fest Ends Tonight at 11:59 PM!",
    body: `Hi {{CustomerName}},

This is your last chance! 🚨

The clock is ticking on our biggest electronics sale of the semester. 

Don't leave your favorite gear in the cart:
❌ Discounts disappear tonight at midnight
❌ Voucher *TECHNEST10* expires in 6 hours
❌ Stocks running low on Bestsellers

🔒 100% Safe Demo Checkout | COD Available | 7-Day Easy Returns

Claim your tech upgrade before prices revert to normal! 👇`,
    buttons: [
      { text: "🛍️ Shop Now", action: "shop" },
      { text: "👀 View Products", action: "shop" },
      { text: "💬 Contact Support", action: "support" }
    ]
  }
];
