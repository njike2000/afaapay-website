'use client';

import { Link as LinkIcon, QrCode, Zap, Shield, Clock, TrendingUp } from 'lucide-react';

const paymentMethods = [
  { name: 'MTN Money', icon: '📱', color: 'from-yellow-400 to-orange-500' },
  { name: 'Orange Money', icon: '🟠', color: 'from-orange-400 to-red-500' },
  { name: 'PayPal', icon: '🅿️', color: 'from-blue-600 to-blue-400' },
  { name: 'Bank Transfer', icon: '🏦', color: 'from-slate-600 to-slate-400' },
  { name: 'Card Payment', icon: '💳', color: 'from-purple-500 to-pink-500' },
  { name: 'Crypto', icon: '₿', color: 'from-yellow-600 to-orange-600' },
];

const facilitatorBenefits = [
  {
    icon: LinkIcon,
    title: 'One Payment Link',
    description: 'Share a single link that accepts all payment methods - no need to create multiple payment pages',
  },
  {
    icon: Zap,
    title: 'Instant Setup',
    description: 'Generate payment links in seconds with no technical knowledge required',
  },
  {
    icon: Shield,
    title: 'Secure & Escrow-Protected',
    description: 'All payments are protected by Afa\'a Pay\'s escrow until delivery confirmation',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Accept payments anytime, anywhere - your customers choose their preferred method',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Analytics',
    description: 'Track all payments, conversion rates, and customer behavior in real-time',
  },
  {
    icon: QrCode,
    title: 'QR Code Generation',
    description: 'Generate QR codes for your payment links - perfect for physical and digital marketing',
  },
];

export default function PaymentFacilitator() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#001F3F] to-[#003D5C] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#2ECC71]/20 rounded-full mb-6">
            <span className="text-[#2ECC71] font-semibold">Payment Facilitator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            One Payment Link.<br />All Payment Methods.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Accept payments from anyone, anywhere, using their preferred payment method. One unified link powers all transactions with Afa'a Pay's trust infrastructure.
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Supported Payment Methods</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-[#2ECC71] transition-all text-center"
              >
                <div className="text-4xl mb-3">{method.icon}</div>
                <div className="font-semibold text-sm">{method.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">How Payment Links Work</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h4 className="font-bold mb-2">Create Link</h4>
              <p className="text-gray-300">
                Generate a unique payment link for your product, service, or invoice in seconds
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h4 className="font-bold mb-2">Share Link</h4>
              <p className="text-gray-300">
                Share via SMS, email, social media, or QR code - customers choose their payment method
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h4 className="font-bold mb-2">Get Paid</h4>
              <p className="text-gray-300">
                Funds are held in escrow and released upon delivery confirmation - zero fraud risk
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {facilitatorBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-[#2ECC71] transition-all">
                <Icon className="w-8 h-8 text-[#2ECC71] mb-4" />
                <h4 className="font-bold mb-2">{benefit.title}</h4>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Use Cases */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Perfect For All Business Types</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-[#2ECC71] mb-4">Individual Sellers & C2C</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Sell items on marketplace platforms</li>
                <li>✓ Collect payments from friends and family</li>
                <li>✓ Accept donations and tips</li>
                <li>✓ Freelance service payments</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#2ECC71] mb-4">SMEs & Traders</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Invoice customers instantly</li>
                <li>✓ Accept online store payments</li>
                <li>✓ Collect deposits and pre-orders</li>
                <li>✓ Manage supplier payments</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#2ECC71] mb-4">Enterprises</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ B2B payment collection</li>
                <li>✓ Multi-currency transactions</li>
                <li>✓ Bulk payment processing</li>
                <li>✓ Automated reconciliation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#2ECC71] mb-4">Financial Institutions</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ White-label payment solutions</li>
                <li>✓ API integration for platforms</li>
                <li>✓ Compliance and audit trails</li>
                <li>✓ Enterprise-grade security</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#2ECC71] text-white hover:bg-[#26B35F] font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Create Your First Payment Link
          </button>
        </div>
      </div>
    </section>
  );
}
