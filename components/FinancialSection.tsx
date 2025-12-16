import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import ScrollReveal from './ScrollReveal';

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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mt-12 items-center">
          {/* Chart Container */}
          <ScrollReveal delay={0.2} className="relative h-[350px] md:h-[400px] w-full flex items-center justify-center">
             <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={90}
                      outerRadius={130}
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
          </ScrollReveal>

          {/* Legend Card */}
          <ScrollReveal delay={0.4} className="w-full">
             <GlassCard className="p-6 md:p-8 w-full">
                <h3 className="text-white text-lg font-semibold mb-6 border-b border-white/10 pb-4">
                  Composição do Débito Derrubado
                </h3>
                <div className="space-y-4">
                  {data.map((item, index) => (
                    <div key={index} className="flex items-center justify-between group border-b border-white/5 pb-3 last:border-0 last:pb-0 hover:bg-white/5 p-2 rounded-lg transition-colors -mx-2">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full border border-white/10" style={{ backgroundColor: item.fill }} />
                        <span className="text-neutral-300 text-sm font-medium">{item.name}</span>
                      </div>
                      <div className="text-right">
                          <span className="block text-white font-mono text-sm font-bold tracking-tight">{item.realValue}</span>
                          <span className="block text-neutral-500 text-[10px] uppercase tracking-wider">{item.value}%</span>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between px-2">
                     <span className="text-gold font-bold text-sm uppercase tracking-wider">Total</span>
                     <span className="text-gold font-bold text-lg font-mono">R$ 2.161.185,27</span>
                  </div>
                </div>
             </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FinancialSection;