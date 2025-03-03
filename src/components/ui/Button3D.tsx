import React from 'react';

interface Button3DProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  disabled?: boolean;
  variant?: 'gold' | 'white';
}

export const Button3D: React.FC<Button3DProps> = ({
  children,
  className = '',
  onClick,
  type = 'button',
  fullWidth = false,
  disabled = false,
  variant = 'gold'
}) => {
  const baseStyles = `
    relative
    px-6 py-2
    font-medium rounded-full
    transform-gpu
    transition-all duration-300
    before:absolute before:inset-0
    before:rounded-full
    before:transition-transform
    before:duration-300
    before:-z-10
    hover:translate-y-[-4px]
    hover:before:translate-y-[2px]
    hover:before:scale-[1.08]
    active:translate-y-[-2px]
    active:before:translate-y-[1px]
    active:before:scale-[1.04]
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:hover:translate-y-0
    disabled:hover:before:translate-y-0
    disabled:hover:before:scale-100
    disabled:hover:shadow-none
  `;

  const variantStyles = {
    gold: `
      bg-[#B8860B] text-white
      before:bg-[#B8860B]
      hover:shadow-[0_8px_24px_rgba(184,134,11,0.4)]
      active:shadow-[0_4px_16px_rgba(184,134,11,0.3)]
    `,
    white: `
      bg-white text-[#0e0e0e]
      before:bg-white
      hover:shadow-[0_8px_24px_rgba(220,220,220,0.4)]
      active:shadow-[0_4px_16px_rgba(220,220,220,0.3)]
    `
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  );
};

export const GoldButton: React.FC<Button3DProps> = (props) => {
  return <Button3D {...props} variant="gold" />;
};

export const WhiteButton: React.FC<Button3DProps> = (props) => {
  return <Button3D {...props} variant="white" />;
};

export default Button3D;