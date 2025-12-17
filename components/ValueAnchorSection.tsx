import React from 'react';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';
import GlassCard from './GlassCard';
import { TrendingUp, CalendarClock, AlertOctagon, ArrowRight } from 'lucide-react';

const ValueAnchorSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#080808] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader 
            title="Quanto dinheiro você ia perder sem nossa defesa?" 
            subtitle="Sem a atuação jurídica eficaz, a simples inércia e o tempo teriam duplicado essa dívida tributária injusta."
            centered
          />
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-stretch">
          
          {/* Card 1: O Passado */}
          <ScrollReveal delay={0.2} className="h-full">
            <GlassCard className="h-full p-8 flex flex-col items-center justify-center text-center border-white/5 relative group hover:bg-white/5 transition-colors">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 text-neutral-400 flex items-center justify-center group-hover:scale-105 group-hover:border-white/20 transition-all duration-500 mx-auto">
                <CalendarClock size={32} />
              </div>
              
              <div className="flex flex-col items-center">
                 <h4 className="text-neutral-500 font-bold uppercase tracking-widest text-xs mb-3">Valor Original (2015)</h4>
                 <p className="text-3xl lg:text-4xl font-light text-white mb-4 tracking-tight">R$ 2.161.185,27</p>
                 <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mx-auto">
                    Montante inicial cobrado nos Autos de Infração na data da autuação.
                 </p>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Conector Central: A Correção */}
          <ScrollReveal delay={0.4} className="flex flex-col items-center justify-center gap-4 py-4 md:py-0 self-center">
            <div className="hidden md:block">
                <ArrowRight className="text-neutral-700 w-6 h-6" />
            </div>
            
            <div className="flex flex-col items-center gap-2">
                <span className="text-xs font-mono text-neutral-600 uppercase">Inflação + Juros</span>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
                  <TrendingUp size={14} />
                  <span>+95,95%</span>
                </div>
            </div>

            <div className="hidden md:block">
                <ArrowRight className="text-neutral-700 w-6 h-6" />
            </div>
          </ScrollReveal>

          {/* Card 2: O Risco Atualizado */}
          <ScrollReveal delay={0.6} className="h-full">
            <GlassCard className="h-full !p-0 border-red-500/30 relative overflow-hidden group">
              
              {/* Background fix: Absolute positioning covering entire card area */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-red-900/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-20 w-full h-full p-8 flex flex-col items-center justify-center text-center">
                <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-900/20 border border-red-500/30 text-red-500 flex items-center justify-center group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all duration-500 mx-auto">
                    <AlertOctagon size={32} />
                </div>
                
                <div className="flex flex-col items-center">
                    <h4 className="text-red-400/80 font-bold uppercase tracking-widest text-xs mb-3">Valor Atualizado (Hoje)</h4>
                    <p className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-md">R$ 4.234.866,53</p>
                    <p className="text-red-200/50 text-sm leading-relaxed max-w-xs mx-auto">
                        Valor corrigido monetariamente caso a defesa não tivesse êxito.
                    </p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

        </div>

        {/* Resumo da Proteção Patrimonial */}
        <ScrollReveal delay={0.8} className="mt-16 text-center">
             <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-gold/30 to-transparent">
                <div className="px-6 py-3 rounded-full bg-[#0a0a0a] backdrop-blur-xl border border-white/10 flex flex-col md:flex-row items-center gap-3 shadow-2xl">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                        </span>
                        <span className="text-xs font-bold text-gold uppercase tracking-widest">Proteção Patrimonial</span>
                    </div>
                    <div className="hidden md:block w-px h-4 bg-white/10"></div>
                    <p className="text-sm text-neutral-300">
                        Economia real de <strong className="text-white">R$ 4,2 Milhões</strong> para o cliente.
                    </p>
                </div>
             </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ValueAnchorSection;