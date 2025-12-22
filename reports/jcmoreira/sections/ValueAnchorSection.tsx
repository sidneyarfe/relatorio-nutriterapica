
import React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import ScrollReveal from '../../../components/ScrollReveal';
import GlassCard from '../../../components/GlassCard';
import { TrendingUp, CalendarClock, AlertOctagon, ArrowRight } from 'lucide-react';

const ValueAnchorSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#080808] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader 
            title="Quanto dinheiro você ia perder sem nossa defesa?" 
            subtitle="Sem a anulação estratégica do Auto de Infração, a simples incidência da taxa SELIC tornaria a dívida impagável."
            centered
          />
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-stretch">
          
          {/* Card 1: O Início do Litígio */}
          <ScrollReveal delay={0.2} className="h-full">
            <GlassCard className="h-full p-8 flex flex-col items-center justify-center text-center border-white/5 relative group hover:bg-white/5 transition-colors">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 text-neutral-400 flex items-center justify-center group-hover:scale-105 group-hover:border-white/20 transition-all duration-500 mx-auto">
                <CalendarClock size={32} />
              </div>
              
              <div className="flex flex-col items-center">
                 <h4 className="text-neutral-500 font-bold uppercase tracking-widest text-xs mb-3">Valor Base do Litígio</h4>
                 <p className="text-3xl lg:text-4xl font-light text-white mb-4 tracking-tight">R$ 680.637,92</p>
                 <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mx-auto">
                    Montante original apurado no Auto de Infração nº 012013510012798-5.
                 </p>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Conector Central */}
          <ScrollReveal delay={0.4} className="flex flex-col items-center justify-center gap-4 py-4 md:py-0 self-center">
            <div className="hidden md:block">
                <ArrowRight className="text-neutral-700 w-6 h-6" />
            </div>
            
            <div className="flex flex-col items-center gap-2">
                <span className="text-xs font-mono text-neutral-600 uppercase">Acréscimo SELIC</span>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
                  <TrendingUp size={14} />
                  <span>+31,37%</span>
                </div>
            </div>

            <div className="hidden md:block">
                <ArrowRight className="text-neutral-700 w-6 h-6" />
            </div>
          </ScrollReveal>

          {/* Card 2: O Risco Anulado */}
          <ScrollReveal delay={0.6} className="h-full">
            <GlassCard className="h-full !p-0 border-red-500/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-red-900/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-20 w-full h-full p-8 flex flex-col items-center justify-center text-center">
                <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-900/20 border border-red-500/30 text-red-500 flex items-center justify-center group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all duration-500 mx-auto">
                    <AlertOctagon size={32} />
                </div>
                
                <div className="flex flex-col items-center">
                    <h4 className="text-red-400/80 font-bold uppercase tracking-widest text-xs mb-3">Valor Atualizado (2025)</h4>
                    <p className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-md">R$ 894.151,93</p>
                    <p className="text-red-200/50 text-sm leading-relaxed max-w-xs mx-auto">
                        Valor total que seria exigido pelo Estado caso a defesa não tivesse obtido êxito no TJPA.
                    </p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

        </div>

        {/* Pill de Economia */}
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
                        Economia real de <strong className="text-white">R$ 894 mil</strong> para o cliente.
                    </p>
                </div>
             </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ValueAnchorSection;
