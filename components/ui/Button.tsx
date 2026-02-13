import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-3 font-sans text-sm tracking-widest uppercase transition-all duration-300 ease-out";
  
  const variants = {
    primary: "bg-cyber-orange text-white hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(255,87,34,0.3)]",
    secondary: "bg-transparent border border-white/20 text-off-white hover:border-cyber-orange hover:text-cyber-orange"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};