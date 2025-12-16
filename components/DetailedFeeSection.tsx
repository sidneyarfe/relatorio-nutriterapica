import React from 'react';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';
import GlassCard from './GlassCard';
import { Calculator, AlertCircle } from 'lucide-react';

const DetailedFeeSection: React.FC = () => {
  const tableData = [
    {
      item: "1. Êxito Processo Administrativo",
      original: "R$ 35.823,49",
      correction: "R$ 26.089,49",
      total: "R$ 61.912,98"
    },
    {
      item: "2. Pró-labore Judicial",
      original: "R$ 119.411,65",
      correction: "R$ 86.964,99",
      total: "R$ 206.376,64"
    },
    {
      item: "3. Êxito Liminar",
      original: "R$ 59.705,82",
      correction: "R$ 43.482,50",
      total: "R$ 103.188,32"
    },
    {
      item: "4. Êxito Proveito Econômico",
      original: "R$ 59.705,82",
      correction: "R$ 11.146,39",
      total: "R$ 70.852,21"
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#080808] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader 
            title="Quanto a Nutriterápica deve a Dias Advocacia" 
            subtitle="Valores referentes a atuação no processo administrativo e judicial."
            centered
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <GlassCard className="!p-0 overflow-hidden border-white/10 bg-neutral-900/40 h-fit w-full">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-neutral-400">
              <div className="col-span-5">Item</div>
              <div className="col-span-2 text-right">Valor Original</div>
              <div className="col-span-3 text-right">Correção (SELIC)</div>
              <div className="col-span-2 text-right text-white">Total Devido</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-white/5">
              {tableData.map((row, index) => (
                <div key={index} className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 p-4 hover:bg-white/5 transition-colors">
                  <div className="col-span-5 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-gold/80 text-[10px] font-bold shrink-0">
                      {index + 1}
                    </div>
                    <span className="font-medium text-white text-sm">{row.item.substring(3)}</span>
                  </div>
                  
                  <div className="col-span-2 flex justify-between md:block text-right">
                    <span className="md:hidden text-xs text-neutral-500 uppercase">Original</span>
                    <span className="text-neutral-400 font-mono text-sm">{row.original}</span>
                  </div>
                  
                  <div className="col-span-3 flex justify-between md:block text-right">
                    <span className="md:hidden text-xs text-neutral-500 uppercase">Correção</span>
                    <span className="text-neutral-400 font-mono text-sm">{row.correction}</span>
                  </div>
                  
                  <div className="col-span-2 flex justify-between md:block text-right">
                     <span className="md:hidden text-xs text-gold uppercase font-bold">Total</span>
                    <span className="text-gold font-mono font-bold text-sm">{row.total}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Footer (Totals) */}
            <div className="bg-gradient-to-r from-gold/10 to-transparent border-t border-gold/20 p-4 flex flex-col md:grid md:grid-cols-12 gap-4">
               <div className="col-span-5 text-gold font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                  <Calculator size={16} />
                  Totais
               </div>
               <div className="col-span-2 text-right text-neutral-300 font-mono text-sm font-semibold">R$ 274.646,78</div>
               <div className="col-span-3 text-right text-neutral-300 font-mono text-sm font-semibold">R$ 167.683,37</div>
               <div className="col-span-2 text-right text-white font-mono text-lg font-bold">R$ 442.330,15</div>
            </div>

            {/* Source Footnote (Integrated) */}
            <div className="bg-black/40 px-4 py-3 border-t border-white/5 flex items-center justify-end">
               <div className="flex items-center gap-2 text-neutral-600 text-[10px]">
                 <AlertCircle size={10} />
                 <span>Fonte: <strong className="text-neutral-500">Banco Central do Brasil - SELIC</strong></span>
               </div>
            </div>
          </GlassCard>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default DetailedFeeSection;