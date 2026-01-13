import Link from 'next/link'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for testing and small transactions',
      features: [
        'Up to 10 transactions/month',
        'Basic payment link',
        'Email support',
        'Standard settlement',
        'Basic analytics',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '2%',
      description: 'For growing businesses',
      features: [
        'Unlimited transactions',
        'Advanced payment links',
        'Priority email support',
        'Instant settlement',
        'Advanced analytics',
        'Escrow services',
        'API access',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale operations',
      features: [
        'Custom transaction limits',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom settlement terms',
        'Custom analytics',
        'Advanced escrow features',
        'Full API access',
        'White-label options',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 transition ${
                plan.highlighted
                  ? 'bg-primary text-white shadow-xl scale-105'
                  : 'bg-white text-primary shadow-sm hover:shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-secondary text-primary px-4 py-1 rounded-full inline-block text-sm font-bold mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-gray-200' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== 'Free' && plan.price !== 'Custom' && (
                  <span className={`text-sm ${plan.highlighted ? 'text-gray-200' : 'text-gray-600'}`}>
                    {' '}per transaction
                  </span>
                )}
              </div>

              <Link
                href="#get-started"
                className={`block w-full py-3 rounded-lg font-bold text-center mb-8 transition ${
                  plan.highlighted
                    ? 'bg-secondary text-primary hover:bg-green-600'
                    : 'bg-secondary text-white hover:bg-green-700'
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include 30-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  )
}
