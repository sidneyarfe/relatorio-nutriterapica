
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';
import OriginSection from './sections/OriginSection';
import FinancialSection from './sections/FinancialSection';
import StrategySection from './sections/StrategySection';
import PhaseOneSection from './sections/PhaseOneSection';
import PhaseTwoSection from './sections/PhaseTwoSection';
import DebtEliminationSection from './sections/DebtEliminationSection';
import WaterfallSection from './sections/WaterfallSection';
import ValueAnchorSection from './sections/ValueAnchorSection';
import DetailedFeeSection from './sections/DetailedFeeSection';
import FeeSection from './sections/FeeSection';
import NegotiationSection from './sections/NegotiationSection';
import PasswordGate from './PasswordGate';
import FooterSection from '../../components/FooterSection';

const NutriterapicaReport: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
    setTimeout(() => {
      window.scrollBy({ top: 300, behavior: 'smooth' });
    }, 300);
  };

  return (
    <div className="w-full bg-background min-h-screen text-white selection:bg-gold/30 selection:text-white">
      <HeroSection isUnlocked={isUnlocked}>
        {!isUnlocked && <PasswordGate onUnlock={handleUnlock} />}
      </HeroSection>
      
      {isUnlocked && (
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
    </div>
  );
};

export default NutriterapicaReport;
