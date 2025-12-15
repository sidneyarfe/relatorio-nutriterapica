import React from 'react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import ScrollReveal from './ScrollReveal';
import { Scale, Gavel } from 'lucide-react';

const StrategySection: React.FC = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Inteligência Jurídica Aplicada
            </h2>
            <p className="text-neutral-400 text-lg font-light">
              Uma atuação bifásica cirúrgica para desmontar a cobrança peça por peça.
            </p>
            <div className="h-1 w-24 bg-gold/50 rounded-full mt-6 mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Fase 1 Card */}
          <ScrollReveal delay={0.2}>
            <GlassCard className="h-full p-10 relative overflow-hidden group border-white/5 hover:border-gold/30">
              <div className="absolute top-0 right-0 p-4 opacity-5 font-serif text-9xl text-white font-bold select-none group-hover:opacity-10 transition-opacity">
                01
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                  <Scale className="w-7 h-7 text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Fase Administrativa</h3>
                <p className="text-gold text-sm font-bold uppercase tracking-wider mb-6">Limpeza de Penalidades</p>

                <p className="text-neutral-400 leading-relaxed mb-8 border-b border-white/5 pb-8">
                  Atuamos na via administrativa para remover os excessos. Conseguimos a eliminação total das multas abusivas e juros moratórios.
                </p>

                <div>
                  <span className="text-white font-semibold">Resultado: </span>
                  <span className="text-neutral-400">Redução inicial de 44% da dívida.</span>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Fase 2 Card */}
          <ScrollReveal delay={0.4}>
            <GlassCard className="h-full p-10 relative overflow-hidden group border-white/5 hover:border-gold/30">
              <div className="absolute top-0 right-0 p-4 opacity-5 font-serif text-9xl text-gold font-bold select-none group-hover:opacity-10 transition-opacity">
                02
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
                  <Gavel className="w-7 h-7 text-gold" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Fase Judicial</h3>
                <p className="text-gold text-sm font-bold uppercase tracking-wider mb-6">Ataque ao Tributo</p>

                <p className="text-neutral-400 leading-relaxed mb-8 border-b border-white/5 pb-8">
                  Com a dívida reduzida, atacamos o núcleo da cobrança. Demonstramos o erro jurídico do Fisco em aplicar alíquotas retroativas.
                </p>

                <div>
                  <span className="text-white font-semibold">Resultado: </span>
                  <span className="text-gold font-bold">Anulação Total (100%).</span>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;