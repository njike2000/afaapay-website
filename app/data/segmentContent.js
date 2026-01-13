export const segmentContent = {
  individuals: {
    label: 'Individuals & C2C',
    hero: {
      title: 'Sell with Confidence. Buy with Protection.',
      subtitle: 'Whether you\'re selling items online or buying from friends, Afa\'a Pay protects both sides with escrow and instant dispute resolution.',
      cta: 'Start Selling Today',
    },
    trustPillars: [
      {
        icon: 'Lock',
        title: 'Buyer Protection',
        description: 'Your money is safe in escrow until you receive and confirm the item. No risk of non-payment.',
      },
      {
        icon: 'Shield',
        title: 'Seller Assurance',
        description: 'Get paid instantly upon delivery confirmation. No chargebacks, no disputes - just fair transactions.',
      },
      {
        icon: 'Users',
        title: 'Fair Mediation',
        description: 'If something goes wrong, our neutral mediation system resolves disputes in 24-72 hours.',
      },
    ],
    features: [
      'Instant peer-to-peer transfers',
      'Zero fees for transfers between Afa\'a Pay users',
      'Digital proof of transaction',
      'Mobile-first design for easy access',
      'Dispute resolution in under 72 hours',
      'QR code payments for in-person transactions',
    ],
    industries: [
      'Online Marketplace Sellers',
      'Freelancers & Service Providers',
      'Family Remittances',
      'Community Trading',
      'Gig Economy Workers',
      'Student Services',
    ],
  },
  smes: {
    label: 'SMEs & Traders',
    hero: {
      title: 'Grow Your Business. Reduce Your Risk.',
      subtitle: 'Accept payments from customers worldwide while protecting yourself from fraud. Afa\'a Pay\'s trust infrastructure lets you scale confidently.',
      cta: 'Get Started Free',
    },
    trustPillars: [
      {
        icon: 'TrendingUp',
        title: '90% Fraud Reduction',
        description: 'Escrow and digital contracts eliminate 90% of payment fraud and credit loss.',
      },
      {
        icon: 'Clock',
        title: 'Instant Reconciliation',
        description: 'Automatic invoice matching and real-time payment tracking - zero manual work.',
      },
      {
        icon: 'FileText',
        title: 'Digital Contracts',
        description: 'Every transaction is automatically documented with legally binding contracts.',
      },
    ],
    features: [
      'Payment links for instant invoicing',
      'Multiple payment method support',
      'Automated invoice generation',
      'Real-time sales analytics',
      'Bulk payment processing',
      'Customer payment history tracking',
      'Supplier payment management',
      'Tax-ready reports',
    ],
    industries: [
      'E-commerce & Online Stores',
      'Retail & Wholesale',
      'Food & Beverage',
      'Transportation & Logistics',
      'Professional Services',
      'Manufacturing & Supply Chain',
      'Agriculture & Trading',
      'Tourism & Hospitality',
    ],
  },
  enterprises: {
    label: 'Enterprises',
    hero: {
      title: 'Enterprise-Grade Payment Infrastructure.',
      subtitle: 'Secure, scalable, and compliant payment solutions built for global enterprises. Reduce credit risk while improving cash flow.',
      cta: 'Schedule Demo',
    },
    trustPillars: [
      {
        icon: 'Shield',
        title: 'Supply Chain Security',
        description: 'Digitize your entire supply chain with immutable contracts and transparent payment flows.',
      },
      {
        icon: 'BarChart3',
        title: 'Risk Management',
        description: 'Real-time visibility into payment status, automated compliance checks, and audit trails.',
      },
      {
        icon: 'Zap',
        title: 'Operational Efficiency',
        description: 'Automate payment workflows, reduce manual processing, and accelerate settlement times.',
      },
    ],
    features: [
      'API integration for seamless workflow',
      'Multi-currency support',
      'Bulk payment processing (1000+ transactions)',
      'Advanced analytics and reporting',
      'Compliance and audit trails',
      'Custom integration support',
      'Dedicated account management',
      'SLA guarantees',
      'White-label solutions',
      'Enterprise security standards',
    ],
    industries: [
      'Financial Services',
      'Telecommunications',
      'Energy & Utilities',
      'Manufacturing',
      'Retail & Distribution',
      'Healthcare & Pharmaceuticals',
      'Government Contractors',
      'Technology & SaaS',
    ],
  },
  financial: {
    label: 'Financial Institutions',
    hero: {
      title: 'Modernize Your Payment Infrastructure.',
      subtitle: 'White-label payment solutions with built-in trust infrastructure. Offer your customers escrow, contracts, and mediation.',
      cta: 'Partner With Us',
    },
    trustPillars: [
      {
        icon: 'Lock',
        title: 'Regulatory Compliance',
        description: 'Built-in compliance with KYC, AML, and local payment regulations across Africa.',
      },
      {
        icon: 'BarChart3',
        title: 'Risk Mitigation',
        description: 'Reduce fraud, chargebacks, and credit loss with escrow and digital contracts.',
      },
      {
        icon: 'Zap',
        title: 'Revenue Opportunity',
        description: 'New revenue streams through white-label solutions and transaction fees.',
      },
    ],
    features: [
      'White-label payment platform',
      'API-first architecture',
      'Multi-currency settlement',
      'Real-time transaction monitoring',
      'Fraud detection & prevention',
      'Compliance reporting',
      'Customer onboarding tools',
      'Settlement management',
      'Webhook integrations',
      'Advanced security protocols',
    ],
    industries: [
      'Commercial Banks',
      'Microfinance Institutions',
      'Mobile Money Operators',
      'Payment Service Providers',
      'Fintech Companies',
      'Insurance Companies',
      'Investment Platforms',
      'Cryptocurrency Exchanges',
    ],
  },
  government: {
    label: 'Government & Public Sector',
    hero: {
      title: 'Transparent. Compliant. Efficient.',
      subtitle: 'Modernize government payments with immutable records, transparent processes, and citizen-friendly payment options.',
      cta: 'Learn More',
    },
    trustPillars: [
      {
        icon: 'FileText',
        title: 'Transparency & Accountability',
        description: 'Every transaction is recorded with immutable digital contracts - perfect for audit trails.',
      },
      {
        icon: 'Shield',
        title: 'Fraud Prevention',
        description: 'Eliminate corruption and payment fraud with escrow and automated verification.',
      },
      {
        icon: 'Users',
        title: 'Citizen Convenience',
        description: 'Citizens can pay using their preferred method - mobile money, cards, or bank transfers.',
      },
    ],
    features: [
      'Tax and fee collection',
      'License and permit payments',
      'Utility bill processing',
      'Public service payments',
      'Citizen verification integration',
      'Bulk disbursement capabilities',
      'Real-time revenue tracking',
      'Compliance documentation',
      'Multi-language support',
      'Accessibility features',
    ],
    industries: [
      'Tax Administration',
      'Utilities & Water',
      'Education & Universities',
      'Healthcare & Hospitals',
      'Transportation & Licensing',
      'Land & Property Registry',
      'Social Services',
      'Public Procurement',
    ],
  },
};

export const getSegmentContent = (segmentId) => {
  return segmentContent[segmentId] || segmentContent.individuals;
};
