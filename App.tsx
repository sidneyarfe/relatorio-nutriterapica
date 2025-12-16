import React from 'react';
import HeroSection from './components/HeroSection';
import StrategySection from './components/StrategySection';
import OriginSection from './components/OriginSection';
import PhaseOneSection from './components/PhaseOneSection';
import PhaseTwoSection from './components/PhaseTwoSection';
import DebtEliminationSection from './components/DebtEliminationSection';
import FinancialSection from './components/FinancialSection';
import WaterfallSection from './components/WaterfallSection';
import FooterSection from './components/FooterSection';
import ValueAnchorSection from './components/ValueAnchorSection';
import FeeSection from './components/FeeSection';
import DetailedFeeSection from './components/DetailedFeeSection';
import NegotiationSection from './components/NegotiationSection';

const App: React.FC = () => {
  return (
    <main className="w-full bg-background min-h-screen text-white selection:bg-gold/30 selection:text-white">
      <HeroSection />
      
      {/* Narrative Order: Origin (Problem) -> Financial X-Ray (Context) -> Strategy (Plan) -> Phases (Execution) */}
      
      <div className="bg-[#080808]">
        <OriginSection />
      </div>

      {/* Financial Breakdown now appears before the strategy to establish context */}
      <FinancialSection />

      <div className="bg-gradient-to-b from-[#080808] to-[#111111]">
        <StrategySection />
        <PhaseOneSection />
      </div>

      <div className="bg-[#111111]">
        <PhaseTwoSection />
      </div>
      
      {/* High Impact Zero Section First, then the Waterfall Explaining HOW, then Anchor/Context */}
      <DebtEliminationSection />
      <WaterfallSection />
      
      <ValueAnchorSection />
      
      {/* Detailed breakdown of debts before the generic fee explanation */}
      <DetailedFeeSection />
      
      {/* New Fee Section illustrating the cost vs benefit */}
      <FeeSection />

      {/* Call to Action for Negotiation */}
      <NegotiationSection />
      
      <FooterSection />
    </main>
  );
};

export default App;