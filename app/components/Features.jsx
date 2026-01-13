export default function Features() {
  const features = [
    {
      icon: '🔒',
      title: 'Secure Escrow',
      description: 'Hold payments safely until conditions are met. Protect both buyers and sellers with our escrow service.'
    },
    {
      icon: '💳',
      title: 'Multiple Payment Methods',
      description: 'Accept payments via card, mobile money, bank transfer, and more. All in one unified platform.'
    },
    {
      icon: '⚡',
      title: 'Instant Settlement',
      description: 'Get paid instantly or on your schedule. Fast, reliable settlement to your account.'
    },
    {
      icon: '🛡️',
      title: 'Fraud Protection',
      description: 'Advanced fraud detection and prevention. Real-time monitoring keeps your transactions safe.'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Track transactions, monitor performance, and get insights with our comprehensive dashboard.'
    },
    {
      icon: '🌍',
      title: 'Pan-African Coverage',
      description: 'Operate across Cameroon and CEMAC region. Expand your business across borders.'
    },
  ]

  return (
    <section id="features" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need to manage payments securely and efficiently</p>
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
