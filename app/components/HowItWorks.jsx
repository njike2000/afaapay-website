export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Create Account',
      description: 'Sign up in minutes with your business details. Complete KYC verification for full access.'
    },
    {
      number: '2',
      title: 'Generate Payment Link',
      description: 'Create a unique payment link for each transaction. Share with customers via email or SMS.'
    },
    {
      number: '3',
      title: 'Customer Pays',
      description: 'Customers choose their preferred payment method. Funds are securely processed and held.'
    },
    {
      number: '4',
      title: 'Instant Settlement',
      description: 'Funds are settled to your account instantly or on your preferred schedule.'
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple, secure, and straightforward payment processing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number Circle */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
              </div>

              {/* Arrow to next step */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-8 -right-4 text-secondary text-2xl">
                  →
                </div>
              )}

              {/* Content */}
              <div className="bg-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">Ready to get started?</p>
          <a
            href="#get-started"
            className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  )
}
