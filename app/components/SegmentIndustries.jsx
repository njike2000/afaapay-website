'use client';

import { Briefcase } from 'lucide-react';
import { getSegmentContent } from '../data/segmentContent';

export default function SegmentIndustries({ selectedSegment }) {
  const content = getSegmentContent(selectedSegment);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Afa'a Pay is trusted by {content.label.toLowerCase()} across these industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.industries.map((industry, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-[#001F3F] to-[#003D5C] rounded-lg text-white hover:shadow-lg transition-shadow"
            >
              <Briefcase className="w-8 h-8 text-[#2ECC71] mb-4" />
              <h3 className="font-semibold text-lg">{industry}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
