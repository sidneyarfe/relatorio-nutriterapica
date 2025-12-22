
import React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import ScrollReveal from '../../../components/ScrollReveal';
import GlassCard from '../../../components/GlassCard';
import { Calculator, AlertCircle } from 'lucide-react';

const FeesSection: React.FC = () => {
  const tableData = [
    {
      item: "1. Pró Labore - 10% do valor da causa atualizado",
      original: "R$ 68.063,79",
      correction: "R$ 21.351,61",
      total: "R$ 89.415,40"
    },
    {
      item: "2. Êxito Liminar - 5% do valor da causa atualizado",
      original: "R$ 34.031,90",
      correction: "R$ 10.675,80",
      total: "R$ 44.707,70"
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#080808] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader 
            title="Entenda como estão compostos nossos honorários" 
            subtitle="Valores referentes à atuação do escritório no processo judicial. Valor original da causa: R$ 680.637,92."
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
                    <span className="font-medium text-white text-sm">{row.item.split('-')[0].trim()}</span>
                  </div>
                  
                  <div className="col-span-2 flex justify-between md:block text-right">
                    <span className="md:hidden text-xs text-neutral-500 uppercase">Original</span>
                    <span className="text-neutral-400 font-mono text-sm">{row.original}</span>
                  </div>
                  
                  <div className="col-span-3 flex justify-between md:block text-right">
                    <span className="md:hidden text-xs text-neutral-500 uppercase">Correção (SELIC)</span>
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
               <div className="col-span-2 text-right text-neutral-300 font-mono text-sm font-semibold">R$ 102.095,69</div>
               <div className="col-span-3 text-right text-neutral-300 font-mono text-sm font-semibold">R$ 32.027,10</div>
               <div className="col-span-2 text-right text-white font-mono text-lg font-bold">R$ 134.122,79</div>
            </div>

            {/* Source Footnote */}
            <div className="bg-black/40 px-4 py-3 border-t border-white/5 flex items-center justify-end">
               <div className="flex items-center gap-2 text-neutral-600 text-[10px]">
                 <AlertCircle size={10} />
                 <span>Fonte: <strong className="text-neutral-500">Banco Central do Brasil - SELIC. Período 28/08/2023 a 22/12/2025: Fator aplicado de 1,31369691 (representando acréscimo de 31,37%).</strong></span>
               </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeesSection;
