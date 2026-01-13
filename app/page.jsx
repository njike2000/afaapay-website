'use client';

import { useState } from 'react';
import Header from './components/Header';
import OrganizationSelector from './components/OrganizationSelector';
import SegmentHero from './components/SegmentHero';
import SegmentTrustPillars from './components/SegmentTrustPillars';
import SegmentFeatures from './components/SegmentFeatures';
import PaymentFacilitator from './components/PaymentFacilitator';
import SegmentIndustries from './components/SegmentIndustries';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import ContactFormspree from './components/ContactFormspree';
import Footer from './components/Footer';

export default function Home() {
  const [selectedSegment, setSelectedSegment] = useState('individuals');

  return (
    <>
      <Header />
      
      {/* Organization Selector Section */}
      <section className="py-16 md:py-20 bg-gray-50 border-b-2 border-[#2ECC71]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-3">
              Who Are You?
            </h2>
            <p className="text-lg text-gray-600">
              Select your organization type to see features tailored just for you
            </p>
          </div>
          <OrganizationSelector 
            selectedType={selectedSegment} 
            onTypeChange={setSelectedSegment}
          />
        </div>
      </section>

      {/* Segment-Specific Content */}
      <SegmentHero selectedSegment={selectedSegment} />
      <SegmentTrustPillars selectedSegment={selectedSegment} />
      <SegmentFeatures selectedSegment={selectedSegment} />
      
      {/* Universal Payment Facilitator */}
      <PaymentFacilitator />
      
      {/* Segment Industries */}
      <SegmentIndustries selectedSegment={selectedSegment} />
      
      {/* General Sections */}
      <HowItWorks />
      <Pricing />
      <CTA />
      <ContactFormspree />
      <Footer />
    </>
  );
}
