
import React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import GlassCard from '../../../components/GlassCard';
import ScrollReveal from '../../../components/ScrollReveal';
import { AlertTriangle, Database } from 'lucide-react';

const ContextSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader 
            title="O Cenário da Autuação" 
            subtitle="Entenda o ataque fiscal que ameaçava a operação da empresa."
            centered
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <ScrollReveal delay={0.2}>
            <GlassCard className="p-10 border-white/5 h-full">
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 w-fit mb-6">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ataque ao Estoque</h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                O Fisco Estadual realizou um "Levantamento Fiscal" que desconsiderou completamente a realidade contábil da empresa. Ao ignorar os estoques existentes, criou-se um <span className="text-white font-medium">lucro fictício</span> que serviu de base para uma cobrança indevida de ICMS.
              </p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <GlassCard className="p-10 border-white/5 h-full flex flex-col justify-between">
              <div>
                <div className="p-4 rounded-2xl bg-gold/10 border border-gold/20 text-gold w-fit mb-6">
                  <Database size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Números do Risco</h3>
                <p className="text-neutral-400 leading-relaxed font-light mb-8">
                  O Auto de Infração nº 012013510012798-5 tentava consolidar um passivo referente a 2008.
                </p>
              </div>
              <div className="pt-8 border-t border-white/5">
                <div className="flex justify-between items-end">
                  <span className="text-xs uppercase text-neutral-500 font-bold">Risco Econômico Atualizado (SELIC)</span>
                  <span className="text-2xl font-bold text-white font-mono">R$ 894.151,93</span>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;
