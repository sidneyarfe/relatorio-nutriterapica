import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import ScrollReveal from './ScrollReveal';
import { RefreshCcw } from 'lucide-react';

interface RichFinancialData {
  name: string;
  value: number;
  realValue: string;
  fill: string;
}

const data: RichFinancialData[] = [
  { name: 'Tributo Principal', value: 55.25, realValue: 'R$ 1.194.116,47', fill: '#C5A065' },
  { name: 'Multa de Mora', value: 17.68, realValue: 'R$ 382.117,04', fill: '#404040' },
  { name: 'Juros de Mora', value: 16.02, realValue: 'R$ 346.128,49', fill: '#737373' },
  { name: 'Multa Penal', value: 11.05, realValue: 'R$ 238.823,27', fill: '#A3A3A3' },
];

const FinancialSection: React.FC = () => {
  const [showResult, setShowResult] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-4 bg-[#080808]">
      <div className="max-w-6xl w-full">
        <ScrollReveal>
          <SectionHeader 
            title="Raio-X Financeiro" 
            subtitle="Composição da dívida extinta e o impacto econômico final."
            centered
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
          {/* Chart Container */}
          <ScrollReveal delay={0.2} className="relative h-[400px] w-full flex items-center justify-center">
             <div 
               className={`transition-all duration-700 ease-in-out absolute inset-0 flex items-center justify-center
               ${showResult ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'}`}
             >
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={100}
                      outerRadius={140}
                      paddingAngle={4}
                      dataKey="value"
                      stroke="#000"
                      strokeWidth={2}
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(20,20,20,0.9)', borderRadius: '12px', border: '1px solid #333' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value: number) => [`${value}%`, '']}
                    />
                  </PieChart>
                </ResponsiveContainer>
                {/* Center Label */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                  <p className="text-neutral-500 text-xs uppercase tracking-widest">Dívida</p>
                  <p className="text-white text-xl font-bold">Inicial</p>
                </div>
             </div>

             {/* Success State Overlay */}
             <div 
                className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform 
                ${showResult ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}
             >
                <div className="text-center">
                  <h3 className="text-5xl md:text-6xl font-bold text-gold mb-2 drop-shadow-[0_0_25px_rgba(197,160,101,0.6)] animate-pulse">
                    100%
                  </h3>
                  <p className="text-2xl text-white font-light tracking-wide">Economia Gerada</p>
                </div>
             </div>
          </ScrollReveal>

          {/* Controls & Legend */}
          <div className="space-y-8">
             <ScrollReveal delay={0.4}>
               <GlassCard className="p-8">
                  <h3 className="text-white text-lg font-semibold mb-6 border-b border-white/10 pb-4">
                    Composição do Débito Derrubado
                  </h3>
                  <div className="space-y-5">
                    {data.map((item, index) => (
                      <div key={index} className="flex items-center justify-between group border-b border-white/5 pb-2 last:border-0 last:pb-0">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border border-white/10" style={{ backgroundColor: item.fill }} />
                          <span className="text-neutral-300 text-sm group-hover:text-white transition-colors">{item.name}</span>
                        </div>
                        <div className="text-right">
                            <span className="block text-white font-mono text-sm">{item.realValue}</span>
                            <span className="block text-neutral-500 text-xs">{item.value}%</span>
                        </div>
                      </div>
                    ))}
                    <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
                       <span className="text-gold font-bold">Total</span>
                       <span className="text-gold font-bold">R$ 2.161.185,27</span>
                    </div>
                  </div>
               </GlassCard>
             </ScrollReveal>

             <ScrollReveal delay={0.5}>
               <button 
                  onClick={() => setShowResult(!showResult)}
                  className="w-full py-4 rounded-xl bg-gold/10 border border-gold/30 text-gold font-semibold uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-[0_0_20px_rgba(197,160,101,0.3)]"
               >
                  <RefreshCcw className={`w-5 h-5 transition-transform duration-700 ${showResult ? '-rotate-180' : ''}`} />
                  {showResult ? 'Ver Composição' : 'Ver Resultado Final'}
               </button>
             </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSection;