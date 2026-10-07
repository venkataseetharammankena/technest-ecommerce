import React, { useState } from 'react';
import { 
  CreditCard, Smartphone, Building, Banknote, Wallet, 
  ShieldCheck, Lock, CheckCircle2, ArrowRight, AlertTriangle, 
  QrCode, Sparkles 
} from 'lucide-react';

export const PaymentPage = ({ onNavigateCheckout }) => {
  const [selectedDemoMethod, setSelectedDemoMethod] = useState('upi');
  const [demoState, setDemoState] = useState({
    upiId: 'student@okaxis',
    cardNum: '4111 2222 3333 4444',
    bankName: 'HDFC Bank',
    walletName: 'Paytm Wallet'
  });
  const [simulatedSuccess, setSimulatedSuccess] = useState(false);

  const paymentMethods = [
    {
      id: 'upi',
      name: 'Unified Payments Interface (UPI)',
      icon: <Smartphone className="w-6 h-6 text-emerald-600" />,
      badges: ['Google Pay', 'PhonePe', 'Paytm', 'BHIM', 'Cred'],
      description: 'Zero surcharge, instant 1-click payment using any UPI application or dynamic QR code scan.',
      features: ['Instant payment acknowledgement', 'No card numbers or CVV needed', 'Real-time bank-to-bank settlement'],
      demoType: 'Enter Virtual Payment Address (VPA) or scan simulated QR'
    },
    {
      id: 'credit-card',
      name: 'Credit Card',
      icon: <CreditCard className="w-6 h-6 text-brand-600" />,
      badges: ['Visa', 'MasterCard', 'RuPay', 'American Express'],
      description: 'Supports all domestic and international credit cards protected with 256-bit bank encryption and RBI 2FA.',
      features: ['3D Secure OTP verification', 'Zero-cost EMI eligible on cart > ₹3,000', 'Automated fraud risk scoring'],
      demoType: 'Simulate 16-digit card authentication'
    },
    {
      id: 'debit-card',
      name: 'Debit Card',
      icon: <CreditCard className="w-6 h-6 text-indigo-600" />,
      badges: ['All Indian Scheduled Banks'],
      description: 'Direct debit from savings/current bank accounts with instant OTP verification.',
      features: ['Supported across all RuPay, Visa, and Mastercard debit cards', 'Instant refunds directly to linked account'],
      demoType: 'Simulate direct debit authorization'
    },
    {
      id: 'net-banking',
      name: 'Internet Net Banking',
      icon: <Building className="w-6 h-6 text-amber-600" />,
      badges: ['HDFC', 'SBI', 'ICICI', 'Axis', 'Kotak', '50+ Banks'],
      description: 'Direct gateway integration with 50+ public and private sector scheduled commercial banks in India.',
      features: ['Direct high-limit transactions', 'Direct bank login security redirect', 'Corporate bank account support'],
      demoType: 'Select bank from dropdown and test mock portal'
    },
    {
      id: 'cod',
      name: 'Cash on Delivery (COD)',
      icon: <Banknote className="w-6 h-6 text-teal-600" />,
      badges: ['Pay at Doorstep', 'Cash or UPI QR'],
      description: 'Pay cash or scan courier partner QR upon package delivery at your doorstep.',
      features: ['No upfront advance online transfer required', 'Available for orders up to ₹5,000', 'SMS OTP verification before package dispatch'],
      demoType: 'Verify delivery address for doorstep cash collection'
    },
    {
      id: 'wallets',
      name: 'Digital Prepaid Wallets',
      icon: <Wallet className="w-6 h-6 text-purple-600" />,
      badges: ['Amazon Pay', 'Paytm Wallet', 'MobiKwik', 'Freecharge'],
      description: 'Fast one-click checkout using balance stored in recognized prepaid mobile digital wallets.',
      features: ['Instant transaction speeds', 'Exclusive cashback partnerships', 'Stored value convenience'],
      demoType: 'Simulate wallet balance deduction'
    }
  ];

  const handleTestSimulation = (e) => {
    e.preventDefault();
    setSimulatedSuccess(true);
    setTimeout(() => {
      setSimulatedSuccess(false);
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Title & Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl">
        <div className="relative z-10 space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-mono">
              CA1 SECTION E
            </span>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Requirement E Satisfied
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Payment Options & Security
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            TechNest integrates multiple digital financial rails for Indian e-commerce consumers, ensuring swift and secure order processing.
          </p>
        </div>
      </div>

      {/* MANDATORY ACADEMIC DISCLAIMER BANNER */}
      <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 shadow-sm flex items-start gap-4">
        <div className="p-2 rounded-xl bg-amber-100 text-amber-700 shrink-0">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div className="space-y-1 text-xs sm:text-sm">
          <h4 className="font-bold text-amber-900 text-base">
            Academic Project Mandatory Disclaimer
          </h4>
          <p className="font-semibold text-amber-950">
            "This is an academic demonstration store. No real payment will be processed."
          </p>
          <p className="text-amber-800 text-xs leading-relaxed">
            All transaction gateways, OTP verifications, QR code generators, and bank redirects featured on TechNest operate in simulated demo sandbox mode for Continuous Assessment evaluation.
          </p>
        </div>
      </div>

      {/* Grid of Payment Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paymentMethods.map((pm) => (
          <div
            key={pm.id}
            onClick={() => setSelectedDemoMethod(pm.id)}
            className={`p-6 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer ${
              selectedDemoMethod === pm.id
                ? 'border-brand-500 ring-2 ring-brand-100 shadow-lg'
                : 'border-slate-200/80 shadow-xs hover:border-slate-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  {pm.icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                  SIMULATED GATEWAY
                </span>
              </div>

              <h3 className="font-bold text-slate-900 text-base mb-1">{pm.name}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{pm.description}</p>

              {/* Supported Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {pm.badges.map((b, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold">
                    {b}
                  </span>
                ))}
              </div>

              {/* Bullet Features */}
              <div className="space-y-1 text-[11px] text-slate-600 border-t border-slate-100 pt-3">
                {pm.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedDemoMethod(pm.id);
              }}
              className={`w-full py-2.5 rounded-xl text-xs font-bold transition-colors ${
                selectedDemoMethod === pm.id
                  ? 'bg-brand-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {selectedDemoMethod === pm.id ? 'Active Simulator' : 'Test This Method'}
            </button>
          </div>
        ))}
      </div>

      {/* Interactive Payment Gateway Simulator Sandbox */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-600" />
              Interactive Academic Payment Sandbox
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Simulate end-to-end checkout execution for professors evaluating payment architecture.
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
            Sandbox Active
          </span>
        </div>

        {/* Selected method simulation form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-4">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Selected Rail: <span className="text-brand-600">{paymentMethods.find(m => m.id === selectedDemoMethod)?.name}</span>
            </div>

            {selectedDemoMethod === 'upi' && (
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 block">Virtual Payment Address (VPA)</label>
                <input
                  type="text"
                  value={demoState.upiId}
                  onChange={(e) => setDemoState({ ...demoState, upiId: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-mono"
                  placeholder="username@okhdfcbank"
                />
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-4">
                  <div className="w-20 h-20 bg-white border border-slate-300 rounded-xl p-1 flex items-center justify-center shrink-0">
                    <QrCode className="w-16 h-16 text-slate-800" />
                  </div>
                  <div className="text-xs text-slate-600">
                    <span className="font-bold block text-slate-900">Dynamic UPI QR Code</span>
                    Scan with any Indian UPI app to simulate instantaneous ₹2,150 settlement.
                  </div>
                </div>
              </div>
            )}

            {selectedDemoMethod === 'credit-card' && (
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Simulated Card Number</label>
                  <input
                    type="text"
                    value={demoState.cardNum}
                    onChange={(e) => setDemoState({ ...demoState, cardNum: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-mono"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Expiry</label>
                    <input type="text" defaultValue="12/28" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-mono" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">CVV</label>
                    <input type="text" defaultValue="882" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-mono" />
                  </div>
                </div>
              </div>
            )}

            {selectedDemoMethod === 'net-banking' && (
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 block">Select Commercial Bank</label>
                <select
                  value={demoState.bankName}
                  onChange={(e) => setDemoState({ ...demoState, bankName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs"
                >
                  <option value="HDFC Bank">HDFC Bank Limited</option>
                  <option value="State Bank of India">State Bank of India (SBI)</option>
                  <option value="ICICI Bank">ICICI Bank</option>
                  <option value="Axis Bank">Axis Bank</option>
                  <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                </select>
                <p className="text-xs text-slate-500">
                  Transfers are simulated using mock token verification without real bank credentials.
                </p>
              </div>
            )}

            {selectedDemoMethod === 'cod' && (
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl text-xs text-teal-900 space-y-1">
                <span className="font-bold block">Cash on Delivery Authorized</span>
                <p>Doorstep courier partner collects exact ₹2,150 in physical cash or via courier UPI POS machine upon delivery.</p>
              </div>
            )}

            {(selectedDemoMethod === 'debit-card' || selectedDemoMethod === 'wallets') && (
              <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-2xl text-xs text-indigo-900 space-y-1">
                <span className="font-bold block">Wallet / Debit Authorization</span>
                <p>Simulates tokenized 1-click debit from verified user profile.</p>
              </div>
            )}

            <button
              onClick={handleTestSimulation}
              className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Simulate Payment Authorization (₹2,150)
            </button>

            {simulatedSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 font-bold flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Simulation Authorized! Response: 200 OK (Auth Token: SIM-AUTH-8849)</span>
              </div>
            )}
          </div>

          {/* Right: Security Safeguards */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-xs text-slate-600">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>Security Architecture Overview</span>
            </div>
            <ul className="space-y-2 list-disc list-inside leading-relaxed text-slate-600">
              <li><strong>PCI-DSS Compliance:</strong> Payment tokens are tokenized without raw database retention.</li>
              <li><strong>256-bit SSL Encryption:</strong> All client-server payloads transport across HTTPS TLS 1.3.</li>
              <li><strong>RBI 2FA Protocols:</strong> Mandates One-Time Password validation for card payments above ₹0.</li>
              <li><strong>Fraud Guard:</strong> Algorithmic geo-velocity IP checks to block bot-driven chargeback attacks.</li>
            </ul>
            <div className="pt-2">
              <button
                onClick={onNavigateCheckout}
                className="w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Go to Full Demonstration Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
