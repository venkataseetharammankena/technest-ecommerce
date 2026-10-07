# TechNest – Smart Electronics Store
> **"Smart Technology. Better Everyday."**  
> **MBA E-Commerce Individual Assignment: Continuous Assessment 1 (CA1) & Continuous Assessment 2 (CA2)**

---

## 📌 Executive Summary
**TechNest** is a modern, responsive, Direct-to-Consumer (D2C) electronics and smart accessories web application developed as an **MBA E-Commerce Academic Project**. The business is conceptualized for college students, young professionals, and modern consumers seeking affordable, ergonomic, and durable technology gear.

The application satisfies **100% of the syllabus criteria** for both **Continuous Assessment 1 (CA1)** and **Continuous Assessment 2 (CA2)**.

---

## 🎓 Academic Compliance & Evaluation Matrix

### ✅ Continuous Assessment 1 (CA1)

| Requirement | Description | TechNest Implementation |
|---|---|---|
| **A. Online Store** | Functional storefront with categories, search, filter, sort, cart, checkout demo | Real-time search, category tabs, price slider, cart drawer, full cart page, and simulated checkout |
| **B. First 15 Products** | 15 realistic products with INR prices, specs, stock, ratings, and images | Products `TN-001` through `TN-015` with full specs table, stock status, and discount badges |
| **C. Customer Reviews & Sentiment Analysis** | Dedicated section with 10+ reviews, sentiment classification, polarity score & charts | Labeled *"Customer Review Sentiment Analysis – CA1"*, featuring interactive Doughnut & Bar charts and live review submission simulator |
| **D. Shipping Details** | Dedicated shipping page with 3–7d standard, 1–3d express, free > ₹999, tracking | Shipping policy, PIN code checker, RTS guidelines, and an interactive **Live Order Tracking Simulator** |
| **E. Payment Details** | Payment options: UPI, Cards, Net Banking, COD, Wallets, demo checkout | Dedicated payment guide with prominent disclaimer: *"This is an academic demonstration store. No real payment will be processed."* |
| **F. Sales Channels** | Omnichannel cards for Website, WhatsApp, Instagram, Facebook, Email | 5 channel strategy cards with marketing activities, target audience, and contribution chart |

---

### ✅ Continuous Assessment 2 (CA2)

| Requirement | Description | TechNest Implementation |
|---|---|---|
| **G. 10 Additional Products** | Products 16–25 added to the catalog (Total 25 products) | Products `TN-016` to `TN-025` added with complete specifications and INR pricing |
| **H. WhatsApp Marketing Campaign** | Dedicated page for *"TechNest Fest"* campaign dashboard & metrics | Campaign dashboard, sample metrics (Sent, Opened, Clicks, Conversions), and 3 smartphone message previews |
| **I. Blog Page** | Dedicated blog section with 3 professional tech buying articles | 3 deep-dive articles with introduction, structured tips, author credentials, and full modal reader |
| **J. Consumer Feedback** | Dedicated consumer feedback page with form & live customer wall | Interactive feedback form with ratings, suggestions, and real-time state persistence |
| **K. Revenue Generation Streams** | Dedicated page with 8 monetization streams & revenue model flow | 8 revenue cards (Margins, Examples, Scalability) and a visual 6-stage revenue flow diagram |
| **L. Customer Support Center** | Support ticket portal with 6 issue desks + 10 categorized FAQs | Support ticket simulator generating `#TKT-` ticket codes + 10 accordion FAQs |
| **M. Customer Resources** | Dedicated page with 8 clickable guides | 8 resource guides (Shipping, Returns, Warranty, Payment, Tracking, Buying, FAQs, Support) |

---

## 🛠️ Technology Stack
- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS 3 (Modern UI, responsive breakpoints, custom animations)
- **Icons:** Lucide React (Clean, modern e-commerce iconography)
- **Celebration Effects:** Canvas Confetti (Post-order placement delight)
- **Persistence:** LocalStorage (Simulated cart, orders, reviews, feedback, and tickets persist across refreshes)

---

## 🚀 How to Run the Application Locally

### 1. Prerequisites
- Node.js (v18 or higher recommended; verified on Node v22)
- npm

### 2. Start Development Server
```powershell
cd C:\Users\Seetharam\.gemini\antigravity\scratch\technest-store
npm run dev
```
Open your browser at `http://localhost:3000` (or the port indicated in terminal).

### 3. Build for Production
```powershell
npm run build
npm run preview
```
The compiled, production-ready static assets will be in the `/dist` directory.

---

## 💡 Key Demonstration Highlights for Professors
1. **Academic Evaluation Rubric Bar:** Click *"View Professor Rubric & Fast Navigator"* in the top banner for 1-click jumps to any CA1 or CA2 requirement.
2. **Sentiment Analysis Sandbox:** On the Reviews page, submit a new customer review to see the sentiment score calculate dynamically.
3. **Interactive Tracking Simulator:** On the Shipping page, enter Order ID `TN-98421` to see live milestone progression.
4. **End-to-End Demo Checkout:** Add items to cart, proceed to checkout, enter details, and click *"Place Demonstration Order"* to see the simulated order confirmation.
5. **Admin Demonstration Cockpit:** Accessible via the top bar or footer, presenting consolidated operational KPIs.

---
*Developed for MBA E-Commerce Academic Evaluation.*
