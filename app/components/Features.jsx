export default function Features() {
  const features = [
    {
      icon: '🔗',
      title: 'Payment Links',
      description: 'Generate unique payment links and share via email or SMS. Customers pay with their preferred method.'
    },
    {
      icon: '📱',
      title: 'Multiple Payment Methods',
      description: 'Accept MTN Money, Orange Money, PayPal, bank transfers, and more. All payment networks supported.'
    },
    {
      icon: '📲',
      title: 'QR Codes',
      description: 'Accelerate payments with QR codes. No assistance needed - customers scan and pay instantly.'
    },
    {
      icon: '💰',
      title: 'Mass Payments',
      description: 'Pay salaries, settle invoices, and manage bulk payments in one click. Distribute payments at scale.'
    },
    {
      icon: '📊',
      title: 'Real-Time Analytics',
      description: 'Track all transactions, generate instant reports, and optimize your payment operations.'
    },
    {
      icon: '🏪',
      title: 'Hybrid POS (Coming Soon)',
      description: 'Accept payments at point of sale. Seamless integration for retail and commerce businesses.'
    },
  ]

  return (
    <section id="features" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Powerful Solutions</h2>
          <p className="text-xl text-gray-600">Complete payment solutions for your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition border-l-4 border-secondary">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
