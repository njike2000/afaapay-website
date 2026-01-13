'use client';

import { ArrowRight } from 'lucide-react';
import { getSegmentContent } from '../data/segmentContent';

export default function SegmentHero({ selectedSegment }) {
  const content = getSegmentContent(selectedSegment);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#001F3F] to-[#003D5C] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {content.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            {content.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#2ECC71] text-white hover:bg-[#26B35F] font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors">
              {content.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#001F3F] font-bold py-3 px-8 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
