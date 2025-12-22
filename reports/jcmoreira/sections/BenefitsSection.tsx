
import React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import GlassCard from '../../../components/GlassCard';
import ScrollReveal from '../../../components/ScrollReveal';
import { Ban, CheckCircle, FileCheck, PackageX } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    { icon: <Ban size={24} />, text: "Suspensão total da cobrança de R$ 894k." },
    { icon: <FileCheck size={24} />, text: "Retirada imediata de protestos em cartório." },
    { icon: <PackageX size={24} />, text: "Proibição de apreensão pela SEFA-PA." },
    { icon: <CheckCircle size={24} />, text: "Regularidade fiscal plena para operar." },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader 
            title="O Que Esta Vitória Garante Hoje" 
            subtitle="Resultados práticos que protegem o dia a dia da empresa."
            centered
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {benefits.map((b, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <GlassCard className="p-8 border-white/5 flex flex-col items-center text-center h-full hover:border-gold/20 transition-colors">
                {/* Icon container centered horizontally and icon centered within it */}
                <div className="w-full h-16 rounded-2xl bg-white/5 text-gold mb-6 border border-white/10 flex items-center justify-center">
                  {b.icon}
                </div>
                <p className="text-sm text-neutral-300 font-medium leading-relaxed">{b.text}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
