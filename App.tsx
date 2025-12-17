import React, { useState, useEffect } from 'react';
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
import PasswordGate from './components/PasswordGate';

const App: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Load unlock state from session if needed, or keep it fresh
  const handleUnlock = () => {
    setIsUnlocked(true);
    // Scroll a bit after unlock to show content
    setTimeout(() => {
      window.scrollBy({ top: 200, behavior: 'smooth' });
    }, 100);
  };

  return (
    <main className="w-full bg-background min-h-screen text-white selection:bg-gold/30 selection:text-white">
      <HeroSection />
      
      {!isUnlocked ? (
        <PasswordGate onUnlock={handleUnlock} />
      ) : (
        <div className="animate-fade-in-up">
          <div className="bg-[#080808]">
            <OriginSection />
          </div>

          <FinancialSection />

          <div className="bg-gradient-to-b from-[#080808] to-[#111111]">
            <StrategySection />
            <PhaseOneSection />
          </div>

          <div className="bg-[#111111]">
            <PhaseTwoSection />
          </div>
          
          <DebtEliminationSection />
          <WaterfallSection />
          
          <ValueAnchorSection />
          
          <DetailedFeeSection />
          
          <FeeSection />

          <NegotiationSection />
        </div>
      )}
      
      <FooterSection />
    </main>
  );
};

export default App;