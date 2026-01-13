'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Afa&apos;a Pay"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-primary hidden sm:inline">Afa&apos;a Pay</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-primary hover:text-secondary font-medium">
              Features
            </Link>
            <Link href="#how-it-works" className="text-primary hover:text-secondary font-medium">
              How It Works
            </Link>
            <Link href="#pricing" className="text-primary hover:text-secondary font-medium">
              Pricing
            </Link>
            <Link href="#contact" className="text-primary hover:text-secondary font-medium">
              Contact
            </Link>
            <Link
              href="#get-started"
              className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-green-700 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <Link href="#features" className="block py-2 text-primary hover:text-secondary">
              Features
            </Link>
            <Link href="#how-it-works" className="block py-2 text-primary hover:text-secondary">
              How It Works
            </Link>
            <Link href="#pricing" className="block py-2 text-primary hover:text-secondary">
              Pricing
            </Link>
            <Link href="#contact" className="block py-2 text-primary hover:text-secondary">
              Contact
            </Link>
            <Link
              href="#get-started"
              className="block mt-4 bg-secondary text-white px-6 py-2 rounded-lg hover:bg-green-700 font-medium text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
