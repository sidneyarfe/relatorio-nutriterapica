import React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import GlassCard from '../../../components/GlassCard';
import ScrollReveal from '../../../components/ScrollReveal';
import { Zap, BookOpen } from 'lucide-react';

const StrategySection: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader 
            title="Defesa Técnica Estratégica" 
            subtitle="Dois pilares fundamentais que desmoronaram a tese do Fisco."
            centered
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <ScrollReveal delay={0.2}>
            <div className="group cursor-default">
              <GlassCard className="p-10 border-gold/30 hover:bg-gold/5 transition-all duration-500 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-serif text-gold group-hover:opacity-10 transition-opacity">A</div>
                <div className="relative z-10">
                  <div className="p-4 rounded-2xl bg-gold/10 border border-gold/20 text-gold w-fit mb-6">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Tese da Decadência</h3>
                  <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-6">A "Bala de Prata"</p>
                  <p className="text-neutral-400 leading-relaxed font-light mb-8">
                    Demonstramos que o Fisco perdeu o prazo legal para cobrar. Como o ICMS é sujeito a homologação e houve pagamentos em 2008, o prazo de 5 anos expirou antes da autuação em 2013.
                  </p>
                  <p className="text-white text-sm font-bold border-l-2 border-gold pl-4">Extinção de 11 dos 12 meses autuados.</p>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="group cursor-default">
              <GlassCard className="p-10 border-white/10 hover:bg-white/5 transition-all duration-500 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-serif text-white group-hover:opacity-10 transition-opacity">B</div>
                <div className="relative z-10">
                  <div className="p-4 rounded-2xl bg-neutral-800 border border-white/10 text-white w-fit mb-6">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Erro Material</h3>
                  <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest mb-6">Realidade Contábil</p>
                  <p className="text-neutral-400 leading-relaxed font-light mb-8">
                    Provamos, através de balanço patrimonial e registros de entrada/saída, que havia estoque real. O lucro alegado pelo estado era matematicamente impossível.
                  </p>
                  <p className="text-neutral-300 text-sm font-bold border-l-2 border-neutral-700 pl-4">Nulidade total por vício de cálculo.</p>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;