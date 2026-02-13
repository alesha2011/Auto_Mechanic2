import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] shadow-2xl ${className}`}>
      {children}
    </div>
  );
};