
import React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import GlassCard from '../../../components/GlassCard';
import ScrollReveal from '../../../components/ScrollReveal';
import { CheckCircle } from 'lucide-react';

const NextStepsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#080808] to-black">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <SectionHeader title="Situação Atual" centered />
        </ScrollReveal>

        <div className="mt-12 flex flex-col items-center">
          <ScrollReveal delay={0.2} className="w-full max-w-3xl">
            <GlassCard className="p-8 md:p-12 border-gold/30 text-center h-fit w-full">
              <h3 className="text-2xl font-bold mb-6">O Caminho para a Sentença Final</h3>
              <p className="text-neutral-400 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                Com a vitória unânime no Tribunal de Justiça (2ª Instância), o prognóstico para a sentença final de mérito é <span className="text-white font-bold">extremamente favorável</span>. A tese de decadência já foi validada pelo colegiado de desembargadores.
              </p>
              <div className="flex flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase">
                  <CheckCircle size={12} /> Pedido de multa por descumprimento em curso
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;
