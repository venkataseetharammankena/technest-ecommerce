// TechNest Customer Reviews & Sentiment Analysis Dataset (CA1 Requirement C)

export const initialReviews = [
  {
    id: "REV-101",
    customerName: "Aarav Sharma",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    productPurchased: "TechNest AirBeat Wireless Earbuds",
    productId: "TN-001",
    date: "14 Sep 2026",
    rating: 5,
    reviewText: "The Active Noise Cancellation on the AirBeat is surprisingly good for this price point! Punchy bass, instant pairing with my laptop and phone, and battery easily lasts 7 hours on a single charge.",
    sentiment: "Positive",
    sentimentScore: 0.94,
    aspects: { audioQuality: "High", battery: "Excellent", value: "Great" }
  },
  {
    id: "REV-102",
    customerName: "Pooja Venkataraman",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    productPurchased: "TechNest Pulse Smartwatch",
    productId: "TN-002",
    date: "18 Sep 2026",
    rating: 5,
    reviewText: "AMOLED screen is vibrant even under bright afternoon sunlight in Bangalore. Bluetooth wrist calling is crisp and sleep tracking matches my medical pulse oximeter. Excellent value for college students!",
    sentiment: "Positive",
    sentimentScore: 0.91,
    aspects: { screen: "Vibrant", calling: "Crisp", battery: "Good" }
  },
  {
    id: "REV-103",
    customerName: "Rohan Kulkarni",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
    productPurchased: "TechNest PowerMax 20000mAh Power Bank",
    productId: "TN-004",
    date: "22 Sep 2026",
    rating: 4,
    reviewText: "Huge capacity and 22.5W fast charges my OnePlus quickly. The digital percentage screen is convenient. It is slightly heavy in hand at 385g, but the capacity makes it completely worth having in backpack.",
    sentiment: "Positive",
    sentimentScore: 0.78,
    aspects: { speed: "Fast", capacity: "Massive", weight: "Heavy" }
  },
  {
    id: "REV-104",
    customerName: "Ananya Deshmukh",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    productPurchased: "TechNest Mechanical Keyboard",
    productId: "TN-008",
    date: "25 Sep 2026",
    rating: 5,
    reviewText: "Typing feel is pure joy! Brown tactile switches have a satisfying sound without being loud enough to disturb roommates. The rotary volume knob and double-shot PBT keycaps feel ultra-premium.",
    sentiment: "Positive",
    sentimentScore: 0.96,
    aspects: { buildQuality: "Superior", feel: "Satisfying", design: "Premium" }
  },
  {
    id: "REV-105",
    customerName: "Vikram Nair",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    productPurchased: "TechNest Flex Laptop Stand",
    productId: "TN-009",
    date: "27 Sep 2026",
    rating: 5,
    reviewText: "Sturdy aluminum build that eliminated my neck stiffness during thesis writing. Folds very compact into the included travel pouch. Accommodates my heavy 15.6-inch gaming laptop without wobbling.",
    sentiment: "Positive",
    sentimentScore: 0.89,
    aspects: { ergonomics: "Relief", stability: "Firm", portability: "Compact" }
  },
  {
    id: "REV-106",
    customerName: "Kavita Singhania",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    productPurchased: "TechNest Boom Mini Bluetooth Speaker",
    productId: "TN-003",
    date: "29 Sep 2026",
    rating: 3,
    reviewText: "Sound clarity is decent and the RGB lights look cool in dark dorm rooms. However, the bass begins distorting slightly when turned past 85% maximum volume. Acceptable for the ₹1,299 price tag.",
    sentiment: "Neutral",
    sentimentScore: 0.12,
    aspects: { lighting: "Cool", volume: "Distorts at Peak", price: "Fair" }
  },
  {
    id: "REV-107",
    customerName: "Aditya Verma",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    productPurchased: "TechNest Wireless Charging Pad",
    productId: "TN-006",
    date: "01 Oct 2026",
    rating: 3,
    reviewText: "Charges fine overnight for iPhone and AirPods, but charging speed is somewhat slower than regular cables. Device warms up a little bit during initial fast charge phase. Average everyday convenience.",
    sentiment: "Neutral",
    sentimentScore: 0.05,
    aspects: { convenience: "Good", speed: "Average", thermals: "Warm" }
  },
  {
    id: "REV-108",
    customerName: "Siddharth Roy",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    productPurchased: "TechNest HD Webcam",
    productId: "TN-010",
    date: "02 Oct 2026",
    rating: 4,
    reviewText: "Physical privacy shutter gives peace of mind. Video quality in normal daytime lighting is sharp and wide-angle. Low-light grain reduction could be slightly smoother, but overall good for college presentations.",
    sentiment: "Positive",
    sentimentScore: 0.72,
    aspects: { privacy: "Great", clarity: "Sharp", lowLight: "Moderate" }
  },
  {
    id: "REV-109",
    customerName: "Meera Menon",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    productPurchased: "TechNest FastCharge 65W Adapter",
    productId: "TN-013",
    date: "03 Oct 2026",
    rating: 5,
    reviewText: "Replaced both my laptop brick and phone adapter with just this tiny GaN plug! Stays remarkably cool even when simultaneously charging my laptop and smartphone during campus lectures.",
    sentiment: "Positive",
    sentimentScore: 0.93,
    aspects: { portability: "Outstanding", efficiency: "Cool", versatility: "Dual Port" }
  },
  {
    id: "REV-110",
    customerName: "Tanmay Bansal",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    productPurchased: "TechNest Type-C Fast Charging Cable",
    productId: "TN-005",
    date: "04 Oct 2026",
    rating: 2,
    reviewText: "Braid quality is durable, but delivery was delayed by 3 business days by the local courier partner. Also, 1.5m length is somewhat tight if your wall outlet is far from your hostel study desk.",
    sentiment: "Negative",
    sentimentScore: -0.68,
    aspects: { delivery: "Delayed", length: "Short for room", durability: "OK" }
  },
  {
    id: "REV-111",
    customerName: "Nisha Patel",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    productPurchased: "TechNest Smart LED Desk Lamp",
    productId: "TN-014",
    date: "05 Oct 2026",
    rating: 5,
    reviewText: "The 5 color temperatures helped me study late night without developing headaches. The warm 2700K amber setting is soothing and the 45-minute timer ensures I remember to take breaks.",
    sentiment: "Positive",
    sentimentScore: 0.95,
    aspects: { eyeCare: "Soothing", timer: "Helpful", build: "Modern" }
  },
  {
    id: "REV-112",
    customerName: "Rahul Sen",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    productPurchased: "TechNest USB-C Multiport Hub",
    productId: "TN-012",
    date: "06 Oct 2026",
    rating: 4,
    reviewText: "4K HDMI output connected directly to the seminar projector without any lag. The aluminum shell warms up slightly during heavy 100W PD charging, but transfer speeds remain stable.",
    sentiment: "Positive",
    sentimentScore: 0.81,
    aspects: { videoOutput: "Lag-free", ports: "Comprehensive", thermals: "Warm" }
  }
];

export const computeSentimentMetrics = (reviewsList) => {
  const total = reviewsList.length;
  const positive = reviewsList.filter(r => r.sentiment === 'Positive').length;
  const negative = reviewsList.filter(r => r.sentiment === 'Negative').length;
  const neutral = reviewsList.filter(r => r.sentiment === 'Neutral').length;

  const positivePct = total ? ((positive / total) * 100).toFixed(1) : "0.0";
  const negativePct = total ? ((negative / total) * 100).toFixed(1) : "0.0";
  const neutralPct = total ? ((neutral / total) * 100).toFixed(1) : "0.0";

  const avgRating = total ? (reviewsList.reduce((acc, r) => acc + r.rating, 0) / total).toFixed(2) : "0.00";
  const avgSentimentScore = total ? (reviewsList.reduce((acc, r) => acc + r.sentimentScore, 0) / total).toFixed(2) : "0.00";

  // Ratings distribution
  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviewsList.forEach(r => {
    if (ratingCounts[r.rating] !== undefined) ratingCounts[r.rating]++;
  });

  return {
    total,
    positive,
    negative,
    neutral,
    positivePct,
    negativePct,
    neutralPct,
    avgRating,
    avgSentimentScore,
    ratingCounts
  };
};
