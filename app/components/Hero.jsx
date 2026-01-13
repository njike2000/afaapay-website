import Link from 'next/link'

export default function Hero() {
  return (
    <section className="gradient-primary text-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Secure Digital Payments Made Simple
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Afa&apos;a Pay is a trusted fintech platform offering secure payment processing, escrow services, and fraud protection for businesses and individuals across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#get-started"
                className="bg-secondary text-primary px-8 py-3 rounded-lg font-bold hover:bg-green-600 text-center transition"
              >
                Get Started Free
              </Link>
              <Link
                href="#how-it-works"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary text-center transition"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div>
                <p className="text-3xl font-bold text-secondary">50+</p>
                <p className="text-gray-300 text-sm">Active Merchants</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">95%</p>
                <p className="text-gray-300 text-sm">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">24/7</p>
                <p className="text-gray-300 text-sm">Support</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-96 bg-gradient-to-br from-green-400 to-blue-600 rounded-2xl opacity-20 blur-3xl"></div>
            <div className="absolute text-center">
              <div className="text-6xl font-bold text-secondary opacity-30">💳</div>
              <p className="text-gray-300 mt-4">Trusted by businesses across Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
