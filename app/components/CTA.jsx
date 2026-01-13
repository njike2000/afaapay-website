import Link from 'next/link'

export default function CTA() {
  return (
    <section id="get-started" className="gradient-primary text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Ready to Transform Your Payments?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Join hundreds of businesses using Afa&apos;a Pay for secure, fast, and reliable payment processing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#"
            className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold hover:bg-green-600 text-center transition text-lg"
          >
            Start Free Trial
          </Link>
          <Link
            href="#contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary text-center transition text-lg"
          >
            Schedule Demo
          </Link>
        </div>
        <p className="text-gray-300 mt-8">
          No credit card required. 30-day free trial. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
