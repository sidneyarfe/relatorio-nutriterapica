import React from 'react';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';
import GlassCard from './GlassCard';
import { ShieldCheck, X, Check } from 'lucide-react';
import { AdminValue } from '../types';

const PhaseOneSection: React.FC = () => {
  const eliminatedItems: AdminValue[] = [
    { label: 'Multa de Mora', value: 'R$ 382.117,04', status: 'Eliminada' },
    { label: 'Juros de Mora', value: 'R$ 346.128,49', status: 'Eliminados' },
    { label: 'Multa Penal', value: 'R$ 238.823,27', status: 'Eliminada' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-neutral-900/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl w-full z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-4">
               <ShieldCheck size={14} />
               Vitória Administrativa
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
               Fase 1: O Processo Administrativo
             </h2>
             <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-light">
                A estratégia inicial focou na exclusão técnica das penalidades, limpando o caminho para a discussão judicial do tributo.
             </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1: Contexto */}
          <ScrollReveal delay={0.2} className="lg:col-span-1">
            <div className="h-full flex flex-col gap-6">
               <div className="p-8 rounded-2xl bg-neutral-900 border border-white/10 h-full">
                  <h3 className="text-xl font-bold text-white mb-2">Decisão TRTMB</h3>
                  <p className="text-neutral-500 text-sm mb-6">12 de Novembro de 2019</p>
                  <p className="text-neutral-300 leading-relaxed mb-6">
                    O Tribunal Administrativo acolheu a tese de que o contribuinte não deu causa à mora. A decisão reconheceu a boa-fé da empresa e a ilegalidade das sanções.
                  </p>
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Impacto Financeiro</p>
                    <p className="text-3xl font-bold text-white">R$ 967 mil</p>
                    <p className="text-green-400 text-sm">Eliminados nesta fase</p>
                  </div>
               </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Lista de Penalidades (The List) */}
          <ScrollReveal delay={0.3} className="lg:col-span-2">
            <div className="grid gap-4">
               {eliminatedItems.map((item, index) => (
                 <GlassCard key={index} className="flex items-center justify-between p-6 group hover:bg-white/5 transition-colors border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                        <X className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="text-neutral-400 text-xs uppercase tracking-wider font-bold">{item.label}</p>
                        <p className="text-xl md:text-2xl text-white font-light line-through decoration-red-500/50 decoration-2">
                          {item.value}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700">
                      <Check size={12} className="text-green-400" />
                      <span className="text-xs font-bold text-neutral-300 uppercase">{item.status}</span>
                    </div>
                 </GlassCard>
               ))}
               
               {/* Summary Item */}
               <div className="mt-4 p-6 rounded-2xl bg-gradient-to-r from-green-900/20 to-neutral-900 border border-green-500/20 flex items-center justify-between">
                  <div>
                    <p className="text-green-400 text-sm font-bold uppercase tracking-wider mb-1">Total Derrubado na Fase 1</p>
                    <p className="text-3xl text-white font-bold">R$ 967.068,80</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-green-500 text-black flex items-center justify-center font-bold">
                    44%
                  </div>
               </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PhaseOneSection;