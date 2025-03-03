import React from 'react';

export interface BaseButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  disabled?: boolean;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  className = '',
  onClick,
  type = 'button',
  fullWidth = false,
  disabled = false,
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

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
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

export default BaseButton;