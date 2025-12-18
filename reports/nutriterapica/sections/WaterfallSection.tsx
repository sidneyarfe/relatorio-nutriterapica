import React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import ScrollReveal from '../../../components/ScrollReveal';
import GlassCard from '../../../components/GlassCard';
import { ArrowDown, TrendingDown, Scale, Gavel, AlertCircle } from 'lucide-react';

const WaterfallSection: React.FC = () => {
  const total = 2161185.27;
  const redAdm = 967068.80;
  const saldo = total - redAdm; 
  const redJud = saldo; 
  
  const pTotal = 100;
  const pRedAdm = (redAdm / total) * 100;
  const pSaldo = (saldo / total) * 100;
  const pRedJud = (redJud / total) * 100;

  const formatCurrency = (val: number) => {
    if (val > 1000000) return `R$ ${(val / 1000000).toFixed(2)} mi`;
    if (val > 1000) return `R$ ${(val / 1000).toFixed(0)} k`;
    return `R$ ${val.toFixed(0)}`;
  };

  const formatFullCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
  }

  return (
    <section className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
             <SectionHeader 
                title="Como funcionou o abatimento da sua dívida" 
                subtitle="Entenda visualmente como desmontamos a dívida passo a passo."
                centered
            />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
            <GlassCard className="px-6 pt-8 pb-8 md:px-12 md:pt-12 md:pb-8 h-fit border-white/5 bg-neutral-900/40 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
                    <div>
                        <h3 className="text-white font-bold text-lg">Fluxo de Abatimento</h3>
                        <p className="text-neutral-500 text-sm">Acompanhe a redução do passivo em cada fase.</p>
                    </div>
                    <div className="hidden md:flex gap-6 text-xs font-medium uppercase tracking-wider">
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-neutral-700 rounded-sm"></div> Dívida</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500/80 rounded-sm"></div> Redução</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gold rounded-sm"></div> Saldo</div>
                    </div>
                </div>
                <div className="relative h-[400px] w-full flex items-end justify-between gap-2 md:gap-8 px-2 md:px-10">
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                        <div className="w-full h-px bg-white dashed"></div>
                        <div className="w-full h-px bg-white dashed"></div>
                        <div className="w-full h-px bg-white dashed"></div>
                        <div className="w-full h-px bg-white dashed"></div>
                    </div>
                    <div className="relative w-full h-full flex flex-col justify-end items-center group">
                        <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-[105%] text-white font-bold text-sm bg-neutral-800 px-2 py-1 rounded border border-white/10 whitespace-nowrap z-20">
                            {formatFullCurrency(total)}
                        </div>
                        <div className="text-white font-mono font-bold text-xs md:text-sm mb-2">{formatCurrency(total)}</div>
                        <div style={{ height: `${pTotal}%` }} className="w-full md:w-24 bg-gradient-to-t from-neutral-800 to-neutral-600 rounded-t-lg relative hover:brightness-110 transition-all shadow-lg border-t border-white/10">
                            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                <AlertCircle size={24} className="text-white" />
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-neutral-300 font-bold text-xs md:text-sm uppercase tracking-wide">Autuação</p>
                            <p className="text-neutral-600 text-[10px] hidden md:block mt-1">Valor Original</p>
                        </div>
                        <div className="absolute top-0 right-0 w-[50%] h-px border-t-2 border-dashed border-white/20 translate-x-[50%] z-0 hidden md:block" />
                    </div>
                    <div className="relative w-full h-full flex flex-col justify-end items-center group">
                         <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity absolute top-[20%] text-red-400 font-bold text-sm bg-neutral-800 px-2 py-1 rounded border border-red-500/30 whitespace-nowrap z-20">
                            -{formatFullCurrency(redAdm)}
                        </div>
                        <div style={{ height: `${pSaldo}%` }} className="w-full pointer-events-none" />
                        <div style={{ height: `${pRedAdm}%` }} className="w-full md:w-24 bg-gradient-to-b from-red-500 to-red-700/80 rounded-lg relative hover:brightness-110 transition-all shadow-[0_0_20px_rgba(239,68,68,0.2)] border border-red-500/20 z-10">
                             <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-400 font-bold text-xs whitespace-nowrap">
                                - {pRedAdm.toFixed(0)}%
                            </div>
                             <div className="absolute inset-0 flex items-center justify-center opacity-80">
                                <ArrowDown size={24} className="text-white animate-bounce" />
                            </div>
                        </div>
                         <div className="mt-4 text-center">
                            <p className="text-red-400 font-bold text-xs md:text-sm uppercase tracking-wide">Fase Adm.</p>
                             <p className="text-neutral-600 text-[10px] hidden md:block mt-1">Limpeza de Multas</p>
                        </div>
                    </div>
                    <div className="relative w-full h-full flex flex-col justify-end items-center group">
                        <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-[60%] text-gold font-bold text-sm bg-neutral-800 px-2 py-1 rounded border border-gold/30 whitespace-nowrap z-20">
                            {formatFullCurrency(saldo)}
                        </div>
                         <div className="text-gold font-mono font-bold text-xs md:text-sm mb-2">{formatCurrency(saldo)}</div>
                        <div style={{ height: `${pSaldo}%` }} className="w-full md:w-24 bg-gradient-to-t from-gold/20 to-gold/40 rounded-t-lg relative border-t border-gold/50 hover:bg-gold/30 transition-all backdrop-blur-sm">
                             <div className="absolute inset-0 flex items-center justify-center opacity-60">
                                <Scale size={24} className="text-gold" />
                            </div>
                        </div>
                         <div className="mt-4 text-center">
                            <p className="text-gold font-bold text-xs md:text-sm uppercase tracking-wide">Saldo</p>
                             <p className="text-neutral-600 text-[10px] hidden md:block mt-1">Objeto Principal</p>
                        </div>
                        <div className="absolute top-[45%] right-0 w-[50%] h-px border-t-2 border-dashed border-white/20 translate-x-[50%] z-0 hidden md:block" />
                    </div>
                    <div className="relative w-full h-full flex flex-col justify-end items-center group">
                         <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity absolute top-[65%] text-red-400 font-bold text-sm bg-neutral-800 px-2 py-1 rounded border border-red-500/30 whitespace-nowrap z-20">
                            -{formatFullCurrency(redJud)}
                        </div>
                        <div style={{ height: `${pRedJud}%` }} className="w-full md:w-24 bg-gradient-to-b from-red-500 to-red-700/80 rounded-lg relative hover:brightness-110 transition-all shadow-[0_0_20px_rgba(239,68,68,0.2)] border border-red-500/20">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-400 font-bold text-xs whitespace-nowrap">
                                - {pRedJud.toFixed(0)}%
                            </div>
                             <div className="absolute inset-0 flex items-center justify-center opacity-80">
                                <Gavel size={24} className="text-white" />
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-red-400 font-bold text-xs md:text-sm uppercase tracking-wide">Fase Jud.</p>
                             <p className="text-neutral-600 text-[10px] hidden md:block mt-1">Anulação Total</p>
                        </div>
                    </div>
                    <div className="relative w-20 h-full flex flex-col justify-end items-center">
                        <div className="w-full h-px bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] relative top-px"></div>
                         <div className="mt-4 text-center">
                            <p className="text-green-500 font-bold text-xs md:text-sm uppercase tracking-wide">Zero</p>
                             <div className="mt-2 bg-green-500/20 text-green-400 p-2 rounded-full">
                                <TrendingDown size={16} />
                             </div>
                        </div>
                    </div>
                </div>
            </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WaterfallSection;