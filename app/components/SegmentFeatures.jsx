'use client';

import { CheckCircle2 } from 'lucide-react';
import { getSegmentContent } from '../data/segmentContent';

export default function SegmentFeatures({ selectedSegment }) {
  const content = getSegmentContent(selectedSegment);

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">
            Features Built for {content.label}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to transact with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {content.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" />
              <span className="text-lg text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
