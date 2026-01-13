export default function Industries() {
  const industries = [
    { name: 'Enterprises', icon: '🏢', description: 'Collect payments from multiple sources' },
    { name: 'Schools & Universities', icon: '🎓', description: 'Manage tuition and fees' },
    { name: 'Healthcare', icon: '🏥', description: 'Simplify patient payments' },
    { name: 'E-Commerce', icon: '🛒', description: 'Accept online payments' },
    { name: 'Restaurants', icon: '🍽️', description: 'Fast and secure payments' },
    { name: 'Travel Agencies', icon: '✈️', description: 'Booking and payment processing' },
    { name: 'Construction (BTP)', icon: '🏗️', description: 'Project payment management' },
    { name: 'NGOs', icon: '🤝', description: 'Donation and grant collection' },
    { name: 'Microfinance', icon: '💳', description: 'Loan disbursement and repayment' },
    { name: 'Retail', icon: '🏪', description: 'Point of sale payments' },
    { name: 'Events', icon: '🎉', description: 'Ticket and registration payments' },
    { name: 'Toll Operators', icon: '🛣️', description: 'Automated toll collection' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Solutions for Every Industry</h2>
          <p className="text-xl text-gray-600">Afa&apos;a Pay works for businesses across all sectors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="bg-light p-6 rounded-lg text-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">{industry.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-2">{industry.name}</h3>
              <p className="text-sm text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
