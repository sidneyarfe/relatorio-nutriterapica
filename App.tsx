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

const App: React.FC = () => {
  return (
    <main className="w-full bg-background min-h-screen text-white selection:bg-gold/30 selection:text-white">
      <HeroSection />
      
      {/* Narrative Order: Origin (Problem) -> Strategy (Plan) -> Phases (Execution) */}
      
      <div className="bg-[#080808]">
        <OriginSection />
      </div>

      <div className="bg-gradient-to-b from-[#080808] to-[#111111]">
        <StrategySection />
        <PhaseOneSection />
      </div>

      <div className="bg-[#111111]">
        <PhaseTwoSection />
      </div>
      
      {/* High Impact Zero Section */}
      <DebtEliminationSection />
      <FinancialSection />
      <WaterfallSection />
      <FooterSection />
    </main>
  );
};

export default App;