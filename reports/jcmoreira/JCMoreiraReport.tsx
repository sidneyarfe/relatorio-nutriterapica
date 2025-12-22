
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './sections/HeroSection';
import ContextSection from './sections/ContextSection';
import StrategySection from './sections/StrategySection';
import TimelineSection from './sections/TimelineSection';
import BenefitsSection from './sections/BenefitsSection';
import FeesSection from './sections/FeesSection';
import FeeImpactSection from './sections/FeeImpactSection';
import NegotiationSection from './sections/NegotiationSection';
import NextStepsSection from './sections/NextStepsSection';
import PasswordGate from '../nutriterapica/PasswordGate'; 
import FooterSection from '../../components/FooterSection';

const JCMoreiraReport: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
    setTimeout(() => {
      window.scrollBy({ top: 300, behavior: 'smooth' });
    }, 300);
  };

  return (
    <div className="w-full bg-background min-h-screen text-white selection:bg-gold/30">
      {!isUnlocked ? (
        <div className="h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full">
            <PasswordGate onUnlock={handleUnlock} />
          </div>
        </div>
      ) : (
        <div className="animate-fade-in-up">
          <HeroSection />
          <ContextSection />
          <StrategySection />
          <TimelineSection />
          <BenefitsSection />
          <FeesSection />
          <FeeImpactSection />
          <NegotiationSection />
          <NextStepsSection />
          <FooterSection />
        </div>
      )}
    </div>
  );
};

export default JCMoreiraReport;
