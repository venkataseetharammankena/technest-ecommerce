import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialReviews, computeSentimentMetrics } from '../data/reviews';

const CartContext = createContext();

const initialFeedbackData = [
  {
    id: "FB-01",
    customerName: "Aakash Mehta",
    email: "aakash.m@gmail.com",
    product: "TechNest AirBeat Wireless Earbuds",
    rating: 5,
    feedback: "The sound stage and noise isolation exceed what major legacy brands provide at double the price. Very comfortable for 3-hour study sprints.",
    suggestions: "Would love a matte white color option in future iterations.",
    date: "02 Oct 2026"
  },
  {
    id: "FB-02",
    customerName: "Snehal Kulkarni",
    email: "snehal.k@outlook.com",
    product: "TechNest Pulse Smartwatch",
    rating: 5,
    feedback: "Battery lasted 8 full days on a single charge with continuous heart rate monitoring active. Super crisp AMOLED display.",
    suggestions: "Please include additional silicone strap color options in the box.",
    date: "03 Oct 2026"
  },
  {
    id: "FB-03",
    customerName: "Devansh Patel",
    email: "devansh.p@yahoo.com",
    product: "TechNest FastCharge 65W Adapter",
    rating: 4,
    feedback: "Remarkably tiny charger that powers both my Dell laptop and Samsung phone together. Doesn't get burning hot like other cheap adapters.",
    suggestions: "Include a 2-meter braided cable bundle directly in the box.",
    date: "04 Oct 2026"
  },
  {
    id: "FB-04",
    customerName: "Ritika Sen",
    email: "ritika.sen@edu.in",
    product: "TechNest Flex Laptop Stand",
    rating: 5,
    feedback: "High build rigidity. Holds my heavy 15-inch laptop securely without flexing. Helped resolve my upper shoulder tension completely.",
    suggestions: "Offer a rose gold or space grey finish option.",
    date: "05 Oct 2026"
  }
];

export const CartProvider = ({ children }) => {
  // Cart state persisted in localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('technest_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponDiscount, setCouponDiscount] = useState(0);

  // Reviews state with sentiment analysis
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('technest_reviews');
      return saved ? JSON.parse(saved) : initialReviews;
    } catch {
      return initialReviews;
    }
  });

  // Consumer feedback state
  const [feedbackList, setFeedbackList] = useState(() => {
    try {
      const saved = localStorage.getItem('technest_feedback');
      return saved ? JSON.parse(saved) : initialFeedbackData;
    } catch {
      return initialFeedbackData;
    }
  });

  // Simulated orders
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('technest_orders');
      return saved ? JSON.parse(saved) : [
        {
          orderId: "TN-98421",
          date: "05 Oct 2026, 14:32",
          items: [
            { id: "TN-001", name: "TechNest AirBeat Wireless Earbuds", price: 1899, quantity: 1 },
            { id: "TN-005", name: "TechNest Type-C Fast Charging Cable", price: 349, quantity: 1 }
          ],
          customer: { name: "Rohan Kulkarni", email: "rohan.k@gmail.com", city: "Bengaluru", state: "Karnataka" },
          subtotal: 2248,
          discount: 0,
          shipping: 0,
          total: 2248,
          paymentMethod: "UPI (Google Pay)",
          status: "In Transit",
          expectedDelivery: "08 Oct 2026"
        },
        {
          orderId: "TN-98319",
          date: "04 Oct 2026, 11:15",
          items: [
            { id: "TN-008", name: "TechNest Mechanical Keyboard", price: 2999, quantity: 1 }
          ],
          customer: { name: "Ananya Deshmukh", email: "ananya.d@gmail.com", city: "Pune", state: "Maharashtra" },
          subtotal: 2999,
          discount: 299,
          shipping: 0,
          total: 2700,
          paymentMethod: "Credit Card (HDFC)",
          status: "Delivered",
          expectedDelivery: "06 Oct 2026"
        }
      ];
    } catch {
      return [];
    }
  });

  // Support tickets
  const [supportTickets, setSupportTickets] = useState(() => {
    try {
      const saved = localStorage.getItem('technest_tickets');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Toast notification state
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('technest_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('technest_reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem('technest_feedback', JSON.stringify(feedbackList));
  }, [feedbackList]);

  useEffect(() => {
    localStorage.setItem('technest_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('technest_tickets', JSON.stringify(supportTickets));
  }, [supportTickets]);

  // Cart operations
  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, id: product.id }];
    });
    showToast(`Added "${product.name}" to cart!`);
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
    setCouponDiscount(0);
  };

  // Calculations
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const cartOriginalTotal = cartItems.reduce((acc, item) => acc + (item.product.originalPrice * item.quantity), 0);
  const productDiscount = cartOriginalTotal - cartSubtotal;

  // Coupon handling
  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'TECHNEST10') {
      const discount = Math.round(cartSubtotal * 0.10);
      setAppliedCoupon('TECHNEST10');
      setCouponDiscount(discount);
      showToast('Coupon TECHNEST10 applied! 10% extra discount added.');
      return { success: true, discount };
    } else {
      showToast('Invalid coupon code. Try TECHNEST10', 'error');
      return { success: false, message: 'Invalid coupon code. Use TECHNEST10 for 10% off.' };
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponDiscount(0);
    showToast('Coupon removed', 'info');
  };

  // Shipping charge: Free above ₹999, else ₹79
  const deliveryFee = cartSubtotal === 0 ? 0 : (cartSubtotal >= 999 ? 0 : 79);
  const cartTotal = Math.max(0, cartSubtotal - couponDiscount + deliveryFee);

  // Review operations
  const addReview = (reviewData) => {
    const newRev = {
      id: `REV-${Date.now().toString().slice(-4)}`,
      date: "Just now",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      ...reviewData
    };
    setReviews(prev => [newRev, ...prev]);
    showToast('Your review was successfully submitted and analyzed!');
  };

  // Feedback operations
  const addFeedback = (feedbackData) => {
    const newFeedback = {
      id: `FB-${(feedbackList.length + 1).toString().padStart(2, '0')}`,
      date: "Today",
      ...feedbackData
    };
    setFeedbackList(prev => [newFeedback, ...prev]);
    showToast('Feedback submitted successfully! Thank you for helping us improve.');
  };

  // Support ticket
  const addSupportTicket = (ticketData) => {
    const ticketId = `TKT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newTicket = {
      id: ticketId,
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: "Open",
      ...ticketData
    };
    setSupportTickets(prev => [newTicket, ...prev]);
    showToast(`Support Ticket ${ticketId} created. We will reply within 4 hours.`);
    return ticketId;
  };

  // Order placement
  const placeOrder = (orderData) => {
    const orderId = `TN-${Math.floor(10000 + Math.random() * 90000)}`;
    const newOrder = {
      orderId,
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) + `, ${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}`,
      items: cartItems.map(i => ({
        id: i.product.id,
        name: i.product.name,
        price: i.product.price,
        quantity: i.quantity,
        image: i.product.image
      })),
      subtotal: cartSubtotal,
      discount: couponDiscount,
      shipping: deliveryFee,
      total: cartTotal,
      status: "Confirmed (Processing)",
      expectedDelivery: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      ...orderData
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  const sentimentMetrics = computeSentimentMetrics(reviews);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      cartSubtotal,
      cartOriginalTotal,
      productDiscount,
      deliveryFee,
      cartTotal,
      isCartOpen,
      setIsCartOpen,
      appliedCoupon,
      couponDiscount,
      applyCoupon,
      removeCoupon,
      reviews,
      addReview,
      sentimentMetrics,
      feedbackList,
      addFeedback,
      orders,
      placeOrder,
      supportTickets,
      addSupportTicket,
      toast,
      showToast
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
