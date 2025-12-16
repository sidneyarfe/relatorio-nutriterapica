import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div 
      className={`
        glass-panel rounded-2xl p-6 shadow-2xl relative overflow-hidden
        transition-all duration-500 ease-out
        ${hoverEffect ? 'hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(197,160,101,0.15)] hover:border-[#C5A065]' : ''}
        ${className}
      `}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;