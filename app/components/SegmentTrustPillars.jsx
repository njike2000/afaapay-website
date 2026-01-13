'use client';

import { Lock, Shield, FileText, Users, TrendingUp, Clock, BarChart3, Zap } from 'lucide-react';
import { getSegmentContent } from '../data/segmentContent';

const iconMap = {
  Lock,
  Shield,
  FileText,
  Users,
  TrendingUp,
  Clock,
  BarChart3,
  Zap,
};

export default function SegmentTrustPillars({ selectedSegment }) {
  const content = getSegmentContent(selectedSegment);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">
            Why {content.label} Trust Afa'a Pay
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored trust infrastructure designed for your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.trustPillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon];
            return (
              <div key={index} className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:shadow-lg hover:border-[#2ECC71] transition-all">
                <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#001F3F] mb-4">{pillar.title}</h3>
                <p className="text-gray-700">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
