import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { AcademicBadgeBar } from './components/AcademicBadgeBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { Toast } from './components/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { ReviewsSentimentPage } from './pages/ReviewsSentimentPage';
import { ShippingPage } from './pages/ShippingPage';
import { PaymentPage } from './pages/PaymentPage';
import { SalesChannelsPage } from './pages/SalesChannelsPage';
import { WhatsAppCampaignPage } from './pages/WhatsAppCampaignPage';
import { BlogsPage } from './pages/BlogsPage';
import { ConsumerFeedbackPage } from './pages/ConsumerFeedbackPage';
import { RevenueGenerationPage } from './pages/RevenueGenerationPage';
import { CustomerSupportPage } from './pages/CustomerSupportPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

export function TechNestApp() {
  const [activePage, setActivePage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalProduct, setModalProduct] = useState(null);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const navigateToPage = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewProduct = (product) => {
    setModalProduct(product);
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    navigateToPage('shop');
  };

  const handleOrderPlaced = (order) => {
    setConfirmedOrder(order);
    navigateToPage('order-confirmation');
  };

  const handleTrackOrderFromConfirmation = (orderId) => {
    navigateToPage('shipping');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-brand-500 selection:text-white">
      {/* Top Academic Evaluation Checklist Navigator */}
      <AcademicBadgeBar setActivePage={navigateToPage} />

      {/* Main Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={navigateToPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigateShop={() => navigateToPage('shop')}
            onViewDetails={handleViewProduct}
            onSelectCategory={handleSelectCategory}
            onNavigatePage={navigateToPage}
          />
        )}

        {activePage === 'shop' && (
          <ShopPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onViewDetails={handleViewProduct}
          />
        )}

        {activePage === 'cart' && (
          <CartPage
            onNavigateShop={() => navigateToPage('shop')}
            onNavigateCheckout={() => navigateToPage('checkout')}
          />
        )}

        {activePage === 'checkout' && (
          <CheckoutPage
            onOrderPlaced={handleOrderPlaced}
            onNavigateShop={() => navigateToPage('shop')}
          />
        )}

        {activePage === 'order-confirmation' && (
          <OrderConfirmationPage
            order={confirmedOrder}
            onNavigateShop={() => navigateToPage('shop')}
            onTrackOrder={handleTrackOrderFromConfirmation}
          />
        )}

        {activePage === 'reviews' && (
          <ReviewsSentimentPage />
        )}

        {activePage === 'shipping' && (
          <ShippingPage
            onNavigateCheckout={() => navigateToPage('checkout')}
          />
        )}

        {activePage === 'payment' && (
          <PaymentPage
            onNavigateCheckout={() => navigateToPage('checkout')}
          />
        )}

        {activePage === 'channels' && (
          <SalesChannelsPage
            onNavigatePage={navigateToPage}
          />
        )}

        {activePage === 'whatsapp-campaign' && (
          <WhatsAppCampaignPage
            onNavigatePage={navigateToPage}
          />
        )}

        {activePage === 'blogs' && (
          <BlogsPage />
        )}

        {activePage === 'feedback' && (
          <ConsumerFeedbackPage />
        )}

        {activePage === 'revenue' && (
          <RevenueGenerationPage />
        )}

        {activePage === 'support' && (
          <CustomerSupportPage />
        )}

        {activePage === 'resources' && (
          <ResourcesPage
            onNavigatePage={navigateToPage}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigateShop={() => navigateToPage('shop')}
          />
        )}

        {activePage === 'admin' && (
          <AdminDashboardPage
            onNavigatePage={navigateToPage}
          />
        )}
      </main>

      {/* Footer */}
      <Footer setActivePage={navigateToPage} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        onNavigateCheckout={() => navigateToPage('checkout')}
        onNavigateCart={() => navigateToPage('cart')}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        onGoToCheckout={() => navigateToPage('checkout')}
      />

      {/* Toast Notification */}
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <TechNestApp />
    </CartProvider>
  );
}
